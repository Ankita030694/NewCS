'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faChartLine,
  faPlus,
  faEdit,
  faTrash,
  faUpload,
  faMagic,
} from '@fortawesome/free-solid-svg-icons';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { db, auth, storage } from '../../../lib/firebase';

const BLOG_DRAFT_KEY = 'credsettle:blogDraft';

const TiptapEditor = dynamic(() => import('./TiptapEditor'), {
  ssr: false,
  loading: () => <p>Loading Editor...</p>,
});

interface FAQ {
  id?: string;
  question: string;
  answer: string;
}

interface Review {
  id?: string;
  name: string;
  rating: number;
  review: string; // "comment" in lib/blogs, but prompt uses "review", let’s map it
  date?: string;
}

interface Blog {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  image: string;
  created: number;
  metaTitle?: string;
  metaDescription?: string;
  slug: string;
  faqs?: FAQ[];
  reviews?: Review[];
  author: string;
}

const BlogsDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [newBlog, setNewBlog] = useState<Blog>({
    title: '',
    subtitle: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [],
    reviews: [],
    author: 'CredSettle Team',
  });
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState('');
  const [rssDebugInfo, setRssDebugInfo] = useState('');

  const [isLoadingRss, setIsLoadingRss] = useState(false);
  const [primaryKeyword, setPrimaryKeyword] = useState('');
  const [secondaryKeyword, setSecondaryKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [expansionPrompt, setExpansionPrompt] = useState('');
  const [isExpanding, setIsExpanding] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Draft Saving Logic
  useEffect(() => {
    if (showBlogForm && newBlog) {
      // Only save if we have some meaningful content to save
      const hasContent = 
        newBlog.title || 
        newBlog.subtitle || 
        newBlog.description || 
        (newBlog.faqs && newBlog.faqs.length > 0) ||
        newBlog.image;

      if (hasContent) {
        localStorage.setItem(BLOG_DRAFT_KEY, JSON.stringify({
          blog: newBlog,
          mode: formMode,
          timestamp: Date.now()
        }));
      }
    }
  }, [newBlog, showBlogForm, formMode]);

  const filteredBlogs = blogs.filter((blog) => 
    (blog.title && blog.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (blog.subtitle && blog.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (blog.description && blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const hasSessionToken = !!localStorage.getItem('credsettle:sessionToken');
    if (hasSessionToken) {
      setIsAuthorized(true);
      setIsChecking(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
      } else {
        router.replace('/nullify');
      }
      setIsChecking(false);
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/nullify');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleNavigation = (itemId: string) => {
    if (itemId === 'blogs') {
      router.push('/authority/blogs');
    } else if (itemId === 'articles') {
      router.push('/authority/articles');
    } else if (itemId === 'home') {
      router.push('/authority/dashboard');
    } else if (itemId === 'users') {
      router.push('/authority/users');
    } else if (itemId === 'amalive') {
      router.push('/authority/amalive');
    } else {
      setActiveTab(itemId);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const data = querySnapshot.docs.map((firestoreDoc) => {
          const docData = firestoreDoc.data();
          return {
            id: firestoreDoc.id,
            title: docData.title || '',
            subtitle: docData.subtitle || '',
            description: docData.description || '',
            date: docData.date || '',
            image: docData.image || '',
            created: docData.created || Date.now(),
            metaTitle: docData.metaTitle || '',
            metaDescription: docData.metaDescription || '',
            slug: docData.slug || '',
            faqs: docData.faqs || [],
            reviews: [], // Reviews are subcollection, not fetched here
            author: docData.author || 'CredSettle Team',
          };
        });

        const sortedData = data.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });

        setBlogs(sortedData);
      } catch (error) {
        console.error('Error fetching blogs data:', error);
      }
    };

    fetchBlogs();
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => {
      if (
        name === 'title' &&
        (!prevState.slug || prevState.slug === generateSlug(prevState.title))
      ) {
        return {
          ...prevState,
          [name]: value,
          slug: generateSlug(value),
        };
      }

      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleEditorChange = (content: string) => {
    setNewBlog((prevState) => ({
      ...prevState,
      description: content,
    }));
  };

  const addFaq = () => {
    setNewBlog((prevState) => ({
      ...prevState,
      faqs: [...(prevState.faqs || []), { question: '', answer: '' }],
    }));
  };

  const removeFaq = (index: number) => {
    setNewBlog((prevState) => ({
      ...prevState,
      faqs: (prevState.faqs || []).filter((_, i) => i !== index),
    }));
  };

  const handleFaqChange = (
    index: number,
    field: 'question' | 'answer',
    value: string,
  ) => {
    setNewBlog((prevState) => {
      const updatedFaqs = [...(prevState.faqs || [])];
      updatedFaqs[index] = {
        ...updatedFaqs[index],
        [field]: value,
      };
      return {
        ...prevState,
        faqs: updatedFaqs,
      };
    });
  };

  const addReview = () => {
    setNewBlog((prevState) => ({
      ...prevState,
      reviews: [...(prevState.reviews || []), { name: '', rating: 5, review: '' }],
    }));
  };

  const removeReview = (index: number) => {
    setNewBlog((prevState) => ({
      ...prevState,
      reviews: (prevState.reviews || []).filter((_, i) => i !== index),
    }));
  };

  const handleReviewChange = (
    index: number,
    field: 'name' | 'rating' | 'review',
    value: string | number,
  ) => {
    setNewBlog((prevState) => {
      const updatedReviews = [...(prevState.reviews || [])];
      updatedReviews[index] = {
        ...updatedReviews[index],
        [field]: value,
      };
      return {
        ...prevState,
        reviews: updatedReviews,
      };
    });
  };

  const compressImage = (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const MAX_WIDTH = 1200;
          const MAX_HEIGHT = 1200;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else if (height > MAX_HEIGHT) {
            width = Math.round(width * (MAX_HEIGHT / height));
            height = MAX_HEIGHT;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Canvas to Blob conversion failed'));
                return;
              }

              const compressedFile = new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });

              resolve(compressedFile);
            },
            'image/jpeg',
            0.7,
          );
        };

        img.onerror = () => {
          reject(new Error('Error loading image for compression'));
        };
      };

      reader.onerror = () => {
        reject(new Error('Error reading file for compression'));
      };
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const MAX_FILE_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      alert('Image is too large. Maximum size is 10MB.');
      return;
    }

    try {
      setUploading(true);
      setUploadProgress(0);

      const storageRef = ref(storage, `blog-images/${Date.now()}_${file.name}`);

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);

      let fileToUpload = file;
      if (file.type.startsWith('image/')) {
        fileToUpload = await compressImage(file);
      }

      const maxRetries = 3;
      let retryCount = 0;
      let uploadSuccessful = false;

      while (retryCount < maxRetries && !uploadSuccessful) {
        try {
          const snapshot = await uploadBytes(storageRef, fileToUpload);
          const downloadURL = await getDownloadURL(snapshot.ref);
          setNewBlog((prevState) => ({
            ...prevState,
            image: downloadURL,
          }));
          uploadSuccessful = true;
          setUploadProgress(100);
        } catch (err) {
          console.error(`Upload attempt ${retryCount + 1} failed:`, err);
          retryCount += 1;

          if (retryCount >= maxRetries) {
            throw new Error(
              `Failed after ${maxRetries} attempts: ${
                err instanceof Error ? err.message : String(err)
              }`,
            );
          }

          await new Promise((resolve) =>
            setTimeout(resolve, 1000 * Math.pow(2, retryCount)),
          );
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert(
        `Failed to upload image: ${
          error instanceof Error
            ? error.message
            : 'Please check your internet connection and try again.'
        }`,
      );
    } finally {
      setUploading(false);
    }
  };


  const clearDraft = () => {
    localStorage.removeItem(BLOG_DRAFT_KEY);
  };

  const handleSubmitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blogWithMetadata = {
        ...newBlog,
        created: formMode === 'add' ? Date.now() : newBlog.created,
        date: new Date(newBlog.date).toISOString().split('T')[0],
      };

      const { faqs, reviews, ...blogData } = blogWithMetadata;
      let blogId = newBlog.id;

      if (formMode === 'add') {
        const docRef = await addDoc(collection(db, 'blogs'), blogData);
        blogId = docRef.id;
      } else if (blogId) {
        const blogRef = doc(db, 'blogs', blogId);
        await updateDoc(blogRef, blogData);
      }

      if (blogId && faqs && faqs.length > 0) {
        if (formMode === 'edit') {
          const faqsSnapshot = await getDocs(collection(db, 'blogs', blogId, 'faqs'));
          for (const faqDoc of faqsSnapshot.docs) {
            await deleteDoc(faqDoc.ref);
          }
        }

        for (const faq of faqs) {
          await addDoc(collection(db, 'blogs', blogId, 'faqs'), {
            question: faq.question,
            answer: faq.answer,
          });
        }
      }

      // Handle Reviews Logic
      if (blogId && reviews) {
        const reviewsCollectionRef = collection(db, 'blogs', blogId, 'reviews');
        
        // Delete existing reviews first (simplest sync strategy)
        const reviewsSnapshot = await getDocs(reviewsCollectionRef);
        for (const reviewDoc of reviewsSnapshot.docs) {
           await deleteDoc(reviewDoc.ref);
        }

        // Add current reviews
        for (const review of reviews) {
            await addDoc(reviewsCollectionRef, {
                author: review.name, 
                rating: Number(review.rating),
                comment: review.review, 
                date: review.date ? new Date(review.date).toISOString() : new Date().toISOString()
            });
        }
      }

      resetForm();
      clearDraft(); // Clear draft on successful submit

      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const updatedBlogs = querySnapshot.docs.map((firestoreDoc) => {
        const docData = firestoreDoc.data();
        return {
          id: firestoreDoc.id,
          title: docData.title || '',
          subtitle: docData.subtitle || '',
          description: docData.description || '',
          date: docData.date || '',
          image: docData.image || '',
          created: docData.created || Date.now(),
          metaTitle: docData.metaTitle || '',
          metaDescription: docData.metaDescription || '',
          slug: docData.slug || '',
          faqs: [],
          reviews: [],
          author: docData.author || 'CredSettle Team',
        };
      });
      const sortedUpdatedBlogs = updatedBlogs.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });

      setBlogs(sortedUpdatedBlogs);
    } catch (error) {
      console.error('Error processing blog:', error);
    }
  };

  const handleEdit = async (blog: Blog) => {
    try {
      if (!blog.id) {
        return;
      }

      const faqsSnapshot = await getDocs(collection(db, 'blogs', blog.id, 'faqs'));
      const faqs = faqsSnapshot.docs.map((faqDoc) => ({
        id: faqDoc.id,
        question: faqDoc.data().question || '',
        answer: faqDoc.data().answer || '',
      }));

      // Fetch Reviews
      const reviewsSnapshot = await getDocs(collection(db, 'blogs', blog.id, 'reviews'));
      const reviews = reviewsSnapshot.docs.map((reviewDoc) => {
         const data = reviewDoc.data();
         return {
             id: reviewDoc.id,
             name: data.author || '',
             rating: data.rating || 5,
             review: data.comment || '',
             date: data.date ? (data.date.toDate ? data.date.toDate().toISOString() : new Date(data.date).toISOString()) : undefined
         };
      });

      setNewBlog({ ...blog, faqs, reviews });
      setFormMode('edit');
      setShowBlogForm(true);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setNewBlog(blog);
      setFormMode('edit');
      setShowBlogForm(true);
    }
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;

    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const blogDoc = await getDoc(doc(db, 'blogs', id));
        const blogData = blogDoc.data();

        if (blogData) {
          const content = blogData.description || '';
          const imgRegex = /<img[^>]+src="([^">]+)"/g;
          const imageUrls = new Set<string>();
          let match;

          while ((match = imgRegex.exec(content)) !== null) {
            imageUrls.add(match[1]);
          }

          const imagesSnapshot = await getDocs(collection(db, 'blog_images'));
          const unusedImages = imagesSnapshot.docs.filter((imageDoc) => {
            const imageData = imageDoc.data();
            return imageUrls.has(imageData.url);
          });

          for (const imageDoc of unusedImages) {
            const imageData = imageDoc.data();
            try {
              const imageRef = ref(storage, imageData.path);
              await deleteObject(imageRef);
              await deleteDoc(imageDoc.ref);
            } catch (err) {
              console.error(`Error deleting image ${imageData.filename}:`, err);
            }
          }
        }

        await deleteDoc(doc(db, 'blogs', id));

        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const resetForm = () => {
    setNewBlog({
      title: '',
      subtitle: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      image: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      faqs: [],
      reviews: [],
      author: 'CredSettle Team',
    });
    setFormMode('add');
    setShowBlogForm(false);
  };

  const handleCancelForm = () => {
    if (window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      resetForm();
      clearDraft(); // Clear draft on cancel
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleGenerate = async () => {
    if (!primaryKeyword) {
      alert('Please enter a primary keyword');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          primaryKeyword,
          secondaryKeyword,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          result += decoder.decode(value, { stream: true });
        }
      }

      // Parse JSON
      const generatedData = JSON.parse(result);

      // Update state
      setNewBlog((prev) => ({
        ...prev,
        title: generatedData.title || prev.title,
        subtitle: generatedData.subtitle || prev.subtitle,
        description: generatedData.description || prev.description,
        metaTitle: generatedData.metaTitle || prev.metaTitle,
        metaDescription: generatedData.metaDescription || prev.metaDescription,
        slug: generatedData.slug || prev.slug,
        faqs: generatedData.faqs || prev.faqs,
        reviews: generatedData.reviews || prev.reviews, // Now we capture reviews!
      }));

      // Optionally handle reviews if your schema supports it
      // if (generatedData.reviews) { ... }

      alert('Blog generated successfully!');
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Failed to generate blog. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt) {
      alert('Please enter an image prompt');
      return;
    }

    try {
      setIsGeneratingImage(true);
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setNewBlog((prev) => ({
        ...prev,
        image: data.url,
      }));
      setImagePreview(data.url);
      alert('AI image generated and uploaded successfully!');
    } catch (error) {
      console.error('Image generation failed:', error);
      alert('Failed to generate image. Please try again.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleExpandContent = async () => {
    if (!newBlog.description) {
      alert('Please enter some initial content to expand.');
      return;
    }

    try {
      setIsExpanding(true);
      const response = await fetch('/api/expand-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentContent: newBlog.description,
          expansionPrompt: expansionPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to expand content');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          result += decoder.decode(value, { stream: true });
        }
      }

      setNewBlog((prev) => ({
        ...prev,
        description: result,
      }));
      alert('Content expanded successfully to 5000+ words!');
    } catch (error) {
      console.error('Content expansion failed:', error);
      alert('Failed to expand content. Please try again.');
    } finally {
      setIsExpanding(false);
    }
  };

  const testRssFeed = async () => {
    try {
      setIsLoadingRss(true);

      const response = await fetch('/api/rss');

      if (!response.ok) {
        throw new Error(`RSS feed returned status: ${response.status}`);
      }

      const xml = await response.text();

      const isValidXml =
        xml.includes('<?xml version="1.0"') &&
        xml.includes('<rss version="2.0"') &&
        xml.includes('</rss>');

      const itemCount = (xml.match(/<item>/g) || []).length;
      const hasEmptyTitles = xml.includes('<title></title>');
      const hasEmptyLinks = xml.includes('<link></link>');
      const hasMalformedDates = xml.includes('<pubDate>Invalid Date</pubDate>');

      setRssDebugInfo(
        `RSS Feed Status: ${response.status === 200 ? '✅ OK' : '❌ Error'}\n` +
          `Valid XML Structure: ${isValidXml ? '✅ Yes' : '❌ No'}\n` +
          `Items in Feed: ${itemCount}\n` +
          `Empty Titles: ${hasEmptyTitles ? '❌ Yes' : '✅ No'}\n` +
          `Empty Links: ${hasEmptyLinks ? '❌ Yes' : '✅ No'}\n` +
          `Malformed Dates: ${hasMalformedDates ? '❌ Yes' : '✅ No'}\n\n` +
          `Sample XML (first 500 chars):\n${xml.substring(0, 500)}...`,
      );
    } catch (error) {
      console.error('Error testing RSS feed:', error);
      setRssDebugInfo(
        `Error testing RSS feed: ${
          error instanceof Error ? error.message : String(error)
        }`,
      );
    } finally {
      setIsLoadingRss(false);
    }
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin inline-block w-8 h-8 border-4 border-gray-900 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-600 font-medium">Checking your access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="min-h-screen overflow-hidden relative bg-gray-50">
      <motion.div
        className="min-h-screen bg-gray-50 flex flex-col pb-12"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex-1 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Blogs Dashboard
              </h1>
              <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
            </div>
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all shadow-md"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Logout
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {showBlogForm
                  ? formMode === 'add'
                    ? 'Create New Blog'
                    : 'Edit Blog'
                  : 'Blog Management'}
              </h2>
              <motion.button
                onClick={() => {
                  if (showBlogForm) {
                    // When going back to list, ask if they want to discard if there are changes
                    if (newBlog.title || newBlog.description) {
                       if(window.confirm('You have unsaved changes. Do you want to discard them?')) {
                         resetForm();
                         clearDraft();
                       }
                    } else {
                      resetForm();
                    }
                  } else {
                    // Check for draft when opening form
                    const savedDraft = localStorage.getItem(BLOG_DRAFT_KEY);
                    if (savedDraft) {
                      try {
                        const { blog, mode } = JSON.parse(savedDraft);
                        if (window.confirm('We found an unsaved blog draft. Would you like to restore it?')) {
                          setNewBlog(blog);
                          setFormMode(mode || 'add');
                          setShowBlogForm(true);
                          return;
                        } else {
                          clearDraft();
                        }
                      } catch (e) {
                        console.error('Error parsing draft:', e);
                        clearDraft();
                      }
                    }
                    
                    setFormMode('add');
                    setShowBlogForm(true);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold shadow-md transition-all"
              >
                <FontAwesomeIcon icon={showBlogForm ? faChartLine : faPlus} className="mr-2" />
                {showBlogForm ? 'View Blogs' : 'Add Blog'}
              </motion.button>
            </div>

            {showBlogForm ? (
              <AnimatePresence mode="wait">
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmitBlog}
                  className="space-y-6"
                >
                  {/* AI Generator Section */}
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mb-6">
                    <h3 className="text-indigo-800 font-medium mb-2 flex items-center">
                      <FontAwesomeIcon icon={faMagic} className="mr-2" />
                      AI Magic Generator
                    </h3>
                    <div className="flex flex-col gap-4">
                      <div>
                          <label className="block text-xs text-indigo-800 mb-1">Primary Keyword (Must be specific)</label>
                          <input
                            type="text"
                            value={primaryKeyword}
                            onChange={(e) => setPrimaryKeyword(e.target.value)}
                            placeholder="e.g., 'Get freed from loan'"
                            className="w-full px-4 py-2 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                            disabled={isGenerating}
                          />
                      </div>
                      <div>
                          <label className="block text-xs text-indigo-800 mb-1">Secondary Keyword (Optional)</label>
                          <input
                            type="text"
                            value={secondaryKeyword}
                            onChange={(e) => setSecondaryKeyword(e.target.value)}
                            placeholder="e.g., 'loan settlement process'"
                            className="w-full px-4 py-2 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
                            disabled={isGenerating}
                          />
                      </div>
                      <button
                        type="button"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 transition-colors flex items-center justify-center"
                      >
                        {isGenerating ? (
                          <>
                            <span className="animate-spin mr-2">💫</span>
                            Generating...
                          </>
                        ) : (
                          <>
                            Generate Blog
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-indigo-600 mt-2">
                      This will auto-fill the form with SEO-optimized title, description, content, FAQs, and more (Indian Context).
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Blog Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="Enter blog title"
                      />
                    </div>

                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-2">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={newBlog.slug}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="url-friendly-blog-name"
                      />
                      <p className="mt-2 text-xs text-gray-500">
                        Will be used in the URL: /blog/{newBlog.slug}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Subtitle/SEO Keywords
                      </label>
                      <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={newBlog.subtitle}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="Enter subtitle or SEO keywords"
                      />
                    </div>

                    <div>
                      <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        id="metaTitle"
                        name="metaTitle"
                        value={newBlog.metaTitle || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="Enter meta title for SEO"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Publication Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={newBlog.date}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                        Blog Image
                      </label>
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center space-x-3">
                          <input
                            type="file"
                            id="image-upload"
                            ref={fileInputRef}
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <motion.button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 rounded-lg text-sm font-medium flex items-center transition-all"
                          >
                            <FontAwesomeIcon icon={faUpload} className="mr-2" />
                            {uploading ? 'Uploading...' : 'Choose Image'}
                          </motion.button>
                          {newBlog.image && (
                            <span className="text-xs text-green-600">v Image uploaded successfully</span>
                          )}
                        </div>

                        {uploading && (
                          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="bg-gray-900 h-2.5 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        )}

                        {(imagePreview || newBlog.image) && (
                          <div className="mt-2">
                            <img
                              src={imagePreview || newBlog.image}
                              alt="Blog image preview"
                              className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300 shadow-md"
                            />
                          </div>
                        )}

                        {/* AI Image Generator Box */}
                        <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                          <label className="block text-xs font-semibold text-purple-800 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faMagic} className="mr-2" />
                            AI Image Generator (DALL-E 3)
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={imagePrompt}
                              onChange={(e) => setImagePrompt(e.target.value)}
                              placeholder="Describe the image you want..."
                              className="flex-1 px-3 py-2 text-sm border border-purple-200 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400 text-black"
                              disabled={isGeneratingImage}
                            />
                            <button
                              type="button"
                              onClick={handleGenerateImage}
                              disabled={isGeneratingImage}
                              className="px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-md hover:bg-purple-700 disabled:bg-purple-400 transition-colors"
                            >
                              {isGeneratingImage ? 'Generating...' : 'Generate'}
                            </button>
                          </div>
                          <p className="mt-1 text-[10px] text-purple-600">The generated image will be uploaded to Firebase automatically.</p>
                        </div>

                        <input type="hidden" id="image" name="image" value={newBlog.image} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="metaDescription"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Meta Description
                      </label>
                      <input
                        type="text"
                        id="metaDescription"
                        name="metaDescription"
                        value={newBlog.metaDescription || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        placeholder="Enter meta description for SEO"
                      />
                    </div>

                    <div>
                      <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-2">
                        Author
                      </label>
                      <select
                        id="author"
                        name="author"
                        value={newBlog.author}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                      >
                        <option value="CredSettle Team">CredSettle Team</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">FAQs</label>
                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                      {(newBlog.faqs || []).map((faq, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-semibold text-gray-900">FAQ #{index + 1}</h3>
                            <motion.button
                              type="button"
                              onClick={() => removeFaq(index)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition-all"
                            >
                              Remove
                            </motion.button>
                          </div>
                          <div className="mb-3">
                            <label className="block text-xs font-medium text-gray-700 mb-1">Question</label>
                            <input
                              type="text"
                              value={faq.question}
                              onChange={(event) => handleFaqChange(index, 'question', event.target.value)}
                              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                              placeholder="Enter FAQ question"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Answer</label>
                            <textarea
                              value={faq.answer}
                              onChange={(event) => handleFaqChange(index, 'answer', event.target.value)}
                              rows={3}
                              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                              placeholder="Enter FAQ answer"
                            />
                          </div>
                        </div>
                      ))}

                      <motion.button
                        type="button"
                        onClick={addFaq}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold flex items-center shadow-md transition-all"
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add FAQ
                      </motion.button>
                      <p className="mt-2 text-xs text-gray-500">Add frequently asked questions related to this blog post.</p>
                    </div>
                  </div>

                  {/* Reviews Section */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reviews (Snippets)</label>
                    <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                      {(newBlog.reviews || []).map((review, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-sm font-semibold text-gray-900">Review #{index + 1}</h3>
                            <motion.button
                              type="button"
                              onClick={() => removeReview(index)}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded-md transition-all"
                            >
                              Remove
                            </motion.button>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                             <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                                <input
                                  type="text"
                                  value={review.name}
                                  onChange={(e) => handleReviewChange(index, 'name', e.target.value)}
                                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                                  placeholder="Reviewer Name"
                                />
                             </div>
                             <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Rating</label>
                                <select
                                  value={review.rating}
                                  onChange={(e) => handleReviewChange(index, 'rating', Number(e.target.value))}
                                  className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                                >
                                   {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Stars</option>)}
                                </select>
                             </div>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Review Content</label>
                            <textarea
                              value={review.review}
                              onChange={(e) => handleReviewChange(index, 'review', e.target.value)}
                              rows={3}
                              className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                              placeholder="Review content..."
                            />
                          </div>
                        </div>
                      ))}

                      <motion.button
                        type="button"
                        onClick={addReview}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold flex items-center shadow-md transition-all"
                      >
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />
                        Add Review
                      </motion.button>
                      <p className="mt-2 text-xs text-gray-500">Add or edit reviews. These will be displayed on the blog page.</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Blog Content
                    </label>
                    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                      {typeof window !== 'undefined' && (
                        <TiptapEditor content={newBlog.description} onChange={handleEditorChange} className="bg-white text-black h-[500px]" />
                      )}
                    </div>
                    {/* AI Content Expander Box */}
                    <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                      <label className="block text-sm font-semibold text-emerald-800 mb-3 flex items-center">
                        <FontAwesomeIcon icon={faMagic} className="mr-2" />
                        AI Content Expander (5000+ Words)
                      </label>
                      <div className="flex flex-col gap-3">
                        <textarea
                          value={expansionPrompt}
                          onChange={(e) => setExpansionPrompt(e.target.value)}
                          placeholder="What specific sections or details should be expanded? (e.g. 'Add more details about RBI 2025 guidelines and NBFC rules')"
                          rows={2}
                          className="w-full px-4 py-2 text-sm border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black"
                          disabled={isExpanding}
                        />
                        <button
                          type="button"
                          onClick={handleExpandContent}
                          disabled={isExpanding || !newBlog.description}
                          className="w-full md:w-auto self-end px-6 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 disabled:bg-emerald-400 transition-colors shadow-sm"
                        >
                          {isExpanding ? (
                            <span className="flex items-center justify-center">
                              <span className="animate-spin mr-2">💫</span>
                              Expanding Content...
                            </span>
                          ) : (
                            'Expand to 5000+ Words'
                          )}
                        </button>
                      </div>
                      <p className="mt-2 text-xs text-emerald-600 font-medium italic">
                        Tip: GPT-4o will intelligently expand your existing content while maintaining SEO and professional tone.
                      </p>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Use the toolbar above to format your content.</p>
                  </div>

                  <div className="mt-6 p-5 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="text-sm font-semibold text-blue-900 mb-2">RSS Feed Information</h3>
                    <p className="text-xs text-blue-700">
                      Your blog will be automatically added to the RSS feed at{' '}
                      <strong className="text-blue-900">
                        {process.env.NEXT_PUBLIC_WEBSITE_URL || 'https://www.amalegalsolutions.com'}/api/rss
                      </strong>{' '}
                      which syncs with LinkedIn’s RSS automation feature.
                    </p>
                  </div>

                  <div className="flex justify-end space-x-4 pt-4">
                    <motion.button
                      type="button"
                      onClick={handleCancelForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-medium border border-gray-300 transition-all"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold shadow-md transition-all"
                    >
                      {formMode === 'add' ? 'Publish Blog' : 'Update Blog'}
                    </motion.button>
                  </div>
                </motion.form>
              </AnimatePresence>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full sm:max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm text-gray-900"
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-x-auto rounded-lg"
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Subtitle
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                          <tr key={blog.id} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                              {blog.date ? new Date(blog.date).toLocaleDateString() : '-'}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 max-w-xs truncate">{blog.title}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{blog.subtitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {blog.image ? (
                                <img
                                  src={blog.image}
                                  alt=""
                                  className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200 shadow-sm"
                                />
                              ) : (
                                <span className="text-xs text-gray-500">No image</span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              <div className="flex space-x-2">
                                <motion.button
                                  onClick={() => handleEdit(blog)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs flex items-center shadow-sm transition-all"
                                >
                                  <FontAwesomeIcon icon={faEdit} className="mr-1" />
                                  Edit
                                </motion.button>
                                <motion.button
                                  onClick={() => handleDelete(blog.id)}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs flex items-center shadow-sm transition-all"
                                >
                                  <FontAwesomeIcon icon={faTrash} className="mr-1" />
                                  Delete
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-sm text-gray-500">
                            No blogs found. Click Add Blog to create a new blog.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-600">
                      Showing{' '}
                      <span className="font-semibold text-gray-900">
                        {blogs.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}
                      </span>{' '}
                      to{' '}
                      <span className="font-semibold text-gray-900">
                        {Math.min(currentPage * itemsPerPage, blogs.length)}
                      </span>{' '}
                      of <span className="font-semibold text-gray-900">{blogs.length}</span> results
                    </div>
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={handlePreviousPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-lg text-sm font-medium border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        disabled={currentPage === 1}
                      >
                        Previous
                      </motion.button>
                      <motion.button
                        onClick={handleNextPage}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 rounded-lg text-sm font-medium border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                        disabled={currentPage === totalPages || blogs.length === 0}
                      >
                        Next
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              </div>
            )}

            {!showBlogForm && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 p-6 border border-blue-200 rounded-lg bg-blue-50">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                  <h3 className="text-lg font-bold text-blue-900">RSS Feed Diagnostics</h3>
                  <motion.button
                    onClick={testRssFeed}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isLoadingRss}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg flex items-center font-medium shadow-sm transition-all disabled:opacity-50"
                  >
                    {isLoadingRss ? 'Testing...' : 'Test RSS Feed'}
                  </motion.button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors"
                  >
                    View RSS Feed &rarr;
                  </a>
                  <a
                    href="https://validator.w3.org/feed/check.cgi?url=https://www.amalegalsolutions.com/api/rss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors"
                  >
                    Validate with W3C Feed Validator &rarr;
                  </a>
                </div>

                {rssDebugInfo && (
                  <div className="mt-4">
                    <pre className="bg-white p-4 rounded-lg text-xs text-gray-800 overflow-x-auto whitespace-pre-wrap border border-gray-200 shadow-sm">
                      {rssDebugInfo}
                    </pre>
                  </div>
                )}

                <p className="mt-4 text-xs text-blue-700 bg-blue-100 p-3 rounded-md border border-blue-200">
                  <strong className="text-blue-900">Tip:</strong> RSS feeds should be valid XML with proper entity escaping
                  for special characters. Make sure all required fields (title, link, description, pubDate) are present for
                  each item.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogsDashboard;


