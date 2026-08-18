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
  faClipboardList,
  faFileAlt,
  faInfoCircle,
  faCheckCircle,
  faArrowLeft,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faStar,
  faSearch,
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
  infographic?: string;
  keyTakeaways?: string[];
  popularSearches?: string[];
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
    infographic: '',
    created: Date.now(),
    metaTitle: '',
    metaDescription: '',
    slug: '',
    faqs: [],
    reviews: [],
    keyTakeaways: [],
    popularSearches: [],
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
  const [blogContext, setBlogContext] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagePrompt, setImagePrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [infographicPrompt, setInfographicPrompt] = useState('');
  const [isGeneratingInfographic, setIsGeneratingInfographic] = useState(false);
  const [imageLogs, setImageLogs] = useState<string[]>([]);
  const [showImageLogs, setShowImageLogs] = useState(false);
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
            infographic: docData.infographic || '',
            created: docData.created || Date.now(),
            metaTitle: docData.metaTitle || '',
            metaDescription: docData.metaDescription || '',
            slug: docData.slug || '',
            keyTakeaways: Array.isArray(docData.keyTakeaways) ? docData.keyTakeaways : [],
            popularSearches: Array.isArray(docData.popularSearches) ? docData.popularSearches : [],
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

  const addKeyTakeaway = () => {
    setNewBlog((prevState) => ({
      ...prevState,
      keyTakeaways: [...(prevState.keyTakeaways || []), ''],
    }));
  };

  const removeKeyTakeaway = (index: number) => {
    setNewBlog((prevState) => ({
      ...prevState,
      keyTakeaways: (prevState.keyTakeaways || []).filter((_, i) => i !== index),
    }));
  };

  const handleKeyTakeawayChange = (index: number, value: string) => {
    setNewBlog((prevState) => {
      const updated = [...(prevState.keyTakeaways || [])];
      updated[index] = value;
      return { ...prevState, keyTakeaways: updated };
    });
  };

  const addPopularSearch = () => {
    setNewBlog((prevState) => ({
      ...prevState,
      popularSearches: [...(prevState.popularSearches || []), ''],
    }));
  };

  const removePopularSearch = (index: number) => {
    setNewBlog((prevState) => ({
      ...prevState,
      popularSearches: (prevState.popularSearches || []).filter((_, i) => i !== index),
    }));
  };

  const handlePopularSearchChange = (index: number, value: string) => {
    setNewBlog((prevState) => {
      const updated = [...(prevState.popularSearches || [])];
      updated[index] = value;
      return { ...prevState, popularSearches: updated };
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
          infographic: docData.infographic || '',
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
    } catch (error: any) {
      console.error('Error processing blog:', error);
      alert(`Failed to save blog: ${error.message || String(error)}`);
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
      infographic: '',
      created: Date.now(),
      metaTitle: '',
      metaDescription: '',
      slug: '',
      keyTakeaways: [],
      popularSearches: [],
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
    if (!blogContext) {
      alert('Please enter the blog context');
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
          context: blogContext,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || `Error: ${response.status}`);
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
        reviews: generatedData.reviews || prev.reviews,
        keyTakeaways: generatedData.keyTakeaways || prev.keyTakeaways,
        popularSearches: generatedData.popularSearches || prev.popularSearches,
      }));

      if (generatedData.suggestedImagePrompt) {
        setImagePrompt(generatedData.suggestedImagePrompt);
      }

      if (generatedData.infographicPrompt) {
        setInfographicPrompt(generatedData.infographicPrompt);
      }

      // Optionally handle reviews if your schema supports it
      // if (generatedData.reviews) { ... }

      alert('Blog generated successfully!');
    } catch (error: any) {
      console.error('Generation failed:', error);
      alert(`Failed to generate blog: ${error.message || 'Please try again.'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  const dataUrlToBlob = async (urlOrDataUri: string): Promise<Blob> => {
    if (urlOrDataUri.startsWith('data:')) {
      const arr = urlOrDataUri.split(',');
      const mimeMatch = arr[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : 'image/png';
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime });
    }
    const res = await fetch(urlOrDataUri);
    if (!res.ok) {
      throw new Error(`Failed to fetch image binary from URL (${res.status} ${res.statusText})`);
    }
    return await res.blob();
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt) {
      alert('Please enter an image prompt');
      return;
    }

    const currentLogs: string[] = [`[${new Date().toLocaleTimeString()}] Starting Cover Image Generation...`];
    setImageLogs(currentLogs);

    try {
      setIsGeneratingImage(true);
      currentLogs.push(`[${new Date().toLocaleTimeString()}] Calling /api/generate-image with prompt...`);
      setImageLogs([...currentLogs]);

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: imagePrompt }),
      });

      const data = await response.json().catch(() => ({}));
      if (Array.isArray(data.logs)) {
        currentLogs.push(...data.logs);
      }

      const generatedUrl = data.url || data.imageUrl;
      if (!response.ok || !data.success || !generatedUrl) {
        const errorMsg = data.error || `HTTP ${response.status}: Failed to generate image`;
        currentLogs.push(`[${new Date().toLocaleTimeString()}] ERROR: ${errorMsg}`);
        setImageLogs([...currentLogs]);
        setShowImageLogs(true);
        throw new Error(errorMsg);
      }

      currentLogs.push(`[${new Date().toLocaleTimeString()}] Image generation succeeded (${data.model || 'AI Model'}). Preparing storage upload...`);
      setImageLogs([...currentLogs]);

      try {
        const imageBlob = await dataUrlToBlob(generatedUrl);
        currentLogs.push(`[${new Date().toLocaleTimeString()}] Image Blob prepared (${(imageBlob.size / 1024).toFixed(1)} KB). Uploading to Firebase Storage...`);
        setImageLogs([...currentLogs]);
        
        const storageRef = ref(storage, `blog-images/ai_generated_${Date.now()}.png`);
        const snapshot = await uploadBytes(storageRef, imageBlob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        currentLogs.push(`[${new Date().toLocaleTimeString()}] Successfully uploaded to Firebase: ${downloadURL.slice(0, 60)}...`);
        setImageLogs([...currentLogs]);

        setNewBlog((prev) => ({
          ...prev,
          image: downloadURL,
        }));
        setImagePreview(downloadURL);
      } catch (uploadError: any) {
        currentLogs.push(`[${new Date().toLocaleTimeString()}] Firebase upload warning: ${uploadError.message || String(uploadError)}. Falling back to direct URL.`);
        setImageLogs([...currentLogs]);
        setNewBlog((prev) => ({
          ...prev,
          image: generatedUrl,
        }));
        setImagePreview(generatedUrl);
      }
    } catch (error: any) {
      console.error('Image generation failed:', error);
      alert(`Image generation error: ${error.message || 'Please check error log below.'}`);
      setShowImageLogs(true);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleGenerateInfographic = async () => {
    if (!infographicPrompt) {
      alert('Please enter an infographic prompt');
      return;
    }

    const currentLogs: string[] = [`[${new Date().toLocaleTimeString()}] Starting Infographic Generation...`];
    setImageLogs(currentLogs);

    try {
      setIsGeneratingInfographic(true);
      currentLogs.push(`[${new Date().toLocaleTimeString()}] Calling /api/generate-image with infographic prompt...`);
      setImageLogs([...currentLogs]);

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: infographicPrompt }),
      });

      const data = await response.json().catch(() => ({}));
      if (Array.isArray(data.logs)) {
        currentLogs.push(...data.logs);
      }

      const generatedInfographicUrl = data.url || data.imageUrl;
      if (!response.ok || !data.success || !generatedInfographicUrl) {
        const errorMsg = data.error || `HTTP ${response.status}: Failed to generate infographic`;
        currentLogs.push(`[${new Date().toLocaleTimeString()}] ERROR: ${errorMsg}`);
        setImageLogs([...currentLogs]);
        setShowImageLogs(true);
        throw new Error(errorMsg);
      }

      currentLogs.push(`[${new Date().toLocaleTimeString()}] Infographic generation succeeded (${data.model || 'AI Model'}). Preparing storage upload...`);
      setImageLogs([...currentLogs]);

      try {
        const imageBlob = await dataUrlToBlob(generatedInfographicUrl);
        currentLogs.push(`[${new Date().toLocaleTimeString()}] Infographic Blob prepared (${(imageBlob.size / 1024).toFixed(1)} KB). Uploading to Firebase Storage...`);
        setImageLogs([...currentLogs]);
        
        const storageRef = ref(storage, `blog-images/ai_infographic_${Date.now()}.png`);
        const snapshot = await uploadBytes(storageRef, imageBlob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        currentLogs.push(`[${new Date().toLocaleTimeString()}] Successfully uploaded infographic to Firebase.`);
        setImageLogs([...currentLogs]);

        setNewBlog((prev) => ({
          ...prev,
          infographic: downloadURL,
        }));
      } catch (uploadError: any) {
        currentLogs.push(`[${new Date().toLocaleTimeString()}] Firebase upload warning: ${uploadError.message || String(uploadError)}. Falling back to direct URL.`);
        setImageLogs([...currentLogs]);
        setNewBlog((prev) => ({
          ...prev,
          infographic: generatedInfographicUrl,
        }));
      }
    } catch (error: any) {
      console.error('Infographic generation failed:', error);
      alert(`Infographic generation error: ${error.message || 'Please check error log below.'}`);
      setShowImageLogs(true);
    } finally {
      setIsGeneratingInfographic(false);
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
    <div className="p-6 max-w-7xl mx-auto bg-slate-50 min-h-screen text-slate-800 font-sans">
      <AnimatePresence mode="wait">
        {!showBlogForm ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5 bg-white p-6 rounded-2xl shadow-sm">
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-[#007AFF]">📝</span>
                  <span>Curated Blog Dashboard</span>
                </h1>
                <p className="text-slate-400 text-xs mt-1 font-semibold">
                  Publish high-quality articles, SEO schemas, client star ratings, and detailed Q&A guides.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
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
                        clearDraft();
                      }
                    }
                    setFormMode('add');
                    setShowBlogForm(true);
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Write Blog Post</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <FontAwesomeIcon icon={faUsers} />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Metrics Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Total Published Blogs</span>
                <p className="text-3xl font-black text-[#007AFF] mt-1">{blogs.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">TOC & SEO Enriched</span>
                <p className="text-3xl font-black text-green-700 mt-1">
                  {blogs.filter(b => b.description?.includes('<h2') || b.description?.includes('<h3')).length}
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">FAQs Embedded</span>
                <p className="text-3xl font-black text-blue-700 mt-1">
                  {blogs.filter(b => b.faqs && b.faqs.length > 0).length}
                </p>
              </div>
            </div>

            {/* Filter and Search */}
            <div className="flex bg-white p-4 rounded-2xl border border-slate-100 shadow-sm items-center gap-3">
              <FontAwesomeIcon icon={faSearch} className="text-slate-400 text-sm ml-2" />
              <input
                type="text"
                placeholder="Search blogs by title, subtitle, or slug..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none placeholder-slate-400 text-slate-700"
              />
            </div>

            {/* Blogs Table / List */}
            {currentBlogs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm border-dashed border-slate-200">
                <FontAwesomeIcon icon={faClipboardList} className="text-slate-300 text-4xl mb-4" />
                <p className="text-slate-400 text-sm italic">No blog posts found matching search query.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Banner</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Title & Details</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Slug / Link</th>
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {currentBlogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="p-4">
                            {blog.image ? (
                              <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-16 h-10 object-cover rounded-lg bg-slate-100 border border-slate-200/50 shadow-sm"
                              />
                            ) : (
                              <div className="w-16 h-10 rounded-lg bg-slate-100 border border-slate-200/50 shadow-sm flex items-center justify-center text-xs text-slate-400">No Img</div>
                            )}
                          </td>
                          <td className="p-4 max-w-xs">
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#007AFF] transition-colors">
                              {blog.title}
                            </span>
                            <div className="flex gap-2 items-center text-[10px] text-slate-400 font-semibold mt-1">
                              <span>{blog.date ? new Date(blog.date).toLocaleDateString() : '-'}</span>
                              <span>•</span>
                              <span>By: {blog.author}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md">
                              {blog.slug}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(blog)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#007AFF] transition-colors cursor-pointer"
                                title="Edit post"
                              >
                                <FontAwesomeIcon icon={faEdit} className="text-xs" />
                              </button>
                              <button
                                onClick={() => handleDelete(blog.id)}
                                className="w-8 h-8 rounded-lg hover:bg-red-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-600 transition-colors cursor-pointer"
                                title="Delete post"
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-xs" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/50">
                    <span className="text-xs text-slate-400 font-semibold">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                      </button>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-slate-200 rounded-lg hover:bg-white text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
                      >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* RSS Feed Diagnostics */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 p-6 border border-slate-200 rounded-2xl bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faInfoCircle} className="text-blue-700" />
                  <span>RSS Feed Diagnostics</span>
                </h3>
                <button
                  onClick={testRssFeed}
                  disabled={isLoadingRss}
                  className="px-4 py-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 text-xs rounded-xl flex items-center font-bold transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isLoadingRss ? 'Testing...' : 'Test RSS Feed'}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <a
                  href="/api/rss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-xs font-semibold transition-colors"
                >
                  View RSS Feed &rarr;
                </a>
                <a
                  href="https://validator.w3.org/feed/check.cgi?url=https://www.amalegalsolutions.com/api/rss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline text-xs font-semibold transition-colors"
                >
                  Validate with W3C Feed Validator &rarr;
                </a>
              </div>

              {rssDebugInfo && (
                <div className="mt-4">
                  <pre className="bg-slate-50 p-4 rounded-xl text-[10px] text-slate-700 overflow-x-auto whitespace-pre-wrap border border-slate-200 shadow-inner">
                    {rssDebugInfo}
                  </pre>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmitBlog}
            className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm"
          >
            {/* Form Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-6 gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
                </button>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">
                    {formMode === 'add' ? 'Publish a New Blog Post' : 'Modify Blog Post Details'}
                  </h2>
                  <p className="text-slate-400 text-xs mt-0.5 font-semibold">
                    Set up titles, subtitle blocks, canonical slug, Rich Tiptap body content, FAQs, and reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Writeup Generator Card */}
            <div className="p-6 border border-blue-200/80 bg-gradient-to-br from-blue-50/40 to-orange-50/10 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 text-[#007AFF] text-xs font-bold animate-pulse">✨</span>
                  <div>
                    <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                      AI Writeup Auto-Generator (ChatGPT)
                    </h3>
                    <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                      Paste the raw writeup or primary keyword below. ChatGPT will automatically draft the title, subtitle, slug, detailed rich blog post, 10+ FAQ schemas, and 5+ client reviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">Blog Context / Writeup</label>
                <textarea
                  value={blogContext}
                  onChange={(e) => setBlogContext(e.target.value)}
                  placeholder="Enter primary keyword, draft notes, or transcripts for the legal blog here..."
                  rows={4}
                  className="p-3 bg-white border border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-50 rounded-xl text-xs text-slate-800 focus:outline-none shadow-sm transition-all resize-y"
                  disabled={isGenerating}
                />
              </div>

              <div className="flex items-center justify-end mt-4">
                <motion.button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isGenerating || !blogContext}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-[#007AFF] hover:from-blue-600 hover:to-[#005FCC] text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
                >
                  {isGenerating ? (
                    <>
                      <span className="animate-spin text-xs">💫</span>
                      <span>Generating Content...</span>
                    </>
                  ) : (
                    <>
                      <span>✨ Generate Blog with AI</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Main Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Blog Title *</label>
                <input
                  type="text"
                  name="title"
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Defeating Bank Harassment & Debt Settlement"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Subtitle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Subtitle Block *</label>
                <input
                  type="text"
                  name="subtitle"
                  value={newBlog.subtitle}
                  onChange={handleInputChange}
                  placeholder="e.g. A comprehensive guide on debtor legal rights and RBI OTS principles"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-2">
                  <span>URL Slug *</span>
                  <span className="text-[10px] text-slate-400 italic lowercase font-normal">(only letters, numbers, hyphens)</span>
                </label>
                <input
                  type="text"
                  name="slug"
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. defeating-bank-harassment"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white font-mono"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Publication Date *</label>
                <input
                  type="date"
                  name="date"
                  value={newBlog.date}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
                <select
                  name="author"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                >
                  <option value="CredSettle Team">CredSettle Team</option>
                  <option value="Anuj Anand Malik">Anuj Anand Malik</option>
                </select>
              </div>

              {/* Image Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Cover Image URL *</label>
                <div className="flex flex-col xl:flex-row gap-2">
                  <input
                    type="text"
                    name="image"
                    readOnly
                    value={newBlog.image}
                    placeholder="Upload or generate an image"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 flex-1"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-250 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                      title="Upload cover image"
                    >
                      <FontAwesomeIcon icon={faUpload} />
                      <span>{uploading ? '...' : 'Upload'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleGenerateImage}
                      disabled={isGeneratingImage || !imagePrompt}
                      className="px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-[#007AFF]/35 text-[#007AFF] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 whitespace-nowrap"
                      title="Generate cover image with AI"
                    >
                      <span>{isGeneratingImage ? '💫 Generating...' : '✨ Generate AI'}</span>
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="Prompt for AI image generator..."
                    className="flex-1 p-2 border border-slate-200 rounded-lg text-xs bg-white text-slate-700"
                    disabled={isGeneratingImage}
                  />
                </div>
                {uploading && (
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden mt-2">
                    <div
                      className="bg-[#007AFF] h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>

              {/* Infographic Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Infographic URL</label>
                <div className="flex flex-col xl:flex-row gap-2">
                  <input
                    type="text"
                    name="infographic"
                    value={newBlog.infographic || ''}
                    onChange={handleInputChange}
                    placeholder="URL for the blog infographic"
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#007AFF] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white flex-1"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleGenerateInfographic}
                      disabled={isGeneratingInfographic || !infographicPrompt}
                      className="px-4 py-3 bg-green-50 hover:bg-green-100 border border-green-500/35 text-green-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 whitespace-nowrap"
                      title="Generate infographic with AI"
                    >
                      <span>{isGeneratingInfographic ? '💫 Generating...' : '✨ Generate AI Infographic'}</span>
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={infographicPrompt}
                    onChange={(e) => setInfographicPrompt(e.target.value)}
                    placeholder="Prompt for AI infographic generator..."
                    className="flex-1 p-2 border border-slate-200 rounded-lg text-xs bg-white text-slate-700"
                    disabled={isGeneratingInfographic}
                  />
                </div>
              </div>
            </div>

            {/* Image Generation Diagnostic & Error Log Console */}
            {imageLogs.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-100 p-4 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Image Generator Live Diagnostics & Logs ({imageLogs.length} events)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowImageLogs((prev) => !prev)}
                    className="text-[11px] font-mono font-semibold text-blue-400 hover:text-blue-300 cursor-pointer"
                  >
                    {showImageLogs ? 'Hide Console [ - ]' : 'Expand Console [ + ]'}
                  </button>
                </div>

                {showImageLogs && (
                  <div className="mt-3 max-h-48 overflow-y-auto font-mono text-[11px] leading-relaxed space-y-1 bg-black/50 p-3 rounded-lg border border-slate-800 select-text">
                    {imageLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.includes('ERROR') || log.includes('warning') || log.includes('failed')
                            ? 'text-amber-400'
                            : log.includes('Successfully') || log.includes('succeeded')
                            ? 'text-emerald-400'
                            : 'text-slate-300'
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Image Preview Block */}
            {(imagePreview || newBlog.image || newBlog.infographic) && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Image Previews</span>
                <div className="flex gap-4">
                  {(imagePreview || newBlog.image) && (
                    <img
                      src={imagePreview || newBlog.image}
                      alt="cover preview"
                      className="w-full max-w-sm h-40 object-cover rounded-xl border border-slate-200 shadow-sm"
                    />
                  )}
                  {newBlog.infographic && (
                    <img
                      src={newBlog.infographic}
                      alt="infographic preview"
                      className="w-full max-w-sm h-40 object-cover rounded-xl border border-slate-200 shadow-sm"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Tiptap Rich Description Editor */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Detailed Blog Content Body</label>
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {typeof window !== 'undefined' && (
                  <TiptapEditor
                    content={newBlog.description}
                    onChange={handleEditorChange}
                    className="min-h-[400px] bg-white text-slate-800"
                  />
                )}
              </div>
            </div>

            {/* AI Content Expander */}
            <div className="p-5 border border-indigo-200/80 bg-indigo-50/50 rounded-2xl shadow-sm flex flex-col gap-4">
              <h3 className="text-xs font-black text-indigo-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faMagic} className="text-indigo-700" />
                <span>AI Content Expander (5000+ Words)</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={expansionPrompt}
                  onChange={(e) => setExpansionPrompt(e.target.value)}
                  placeholder="What specific sections or details should be expanded? (e.g. 'Add more details about RBI guidelines')"
                  className="flex-1 p-3 border border-indigo-200 rounded-lg focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  disabled={isExpanding}
                />
                <button
                  type="button"
                  onClick={handleExpandContent}
                  disabled={isExpanding || !newBlog.description}
                  className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50 shadow-sm whitespace-nowrap"
                >
                  {isExpanding ? '💫 Expanding...' : 'Expand Content'}
                </button>
              </div>
            </div>

            {/* SEO Meta Tags Accordion */}
            <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50 flex flex-col gap-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faInfoCircle} className="text-[#007AFF]" />
                <span>Google Search SEO Configuration</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Title</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={newBlog.metaTitle || ''}
                    onChange={handleInputChange}
                    placeholder="Defaults to post title if left blank"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#007AFF] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-extrabold uppercase text-slate-400">Custom Meta Description</label>
                  <input
                    type="text"
                    name="metaDescription"
                    value={newBlog.metaDescription || ''}
                    onChange={handleInputChange}
                    placeholder="Short description for Google snippet"
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#007AFF] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Key Takeaways Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faFileAlt} className="text-[#007AFF]" />
                  <span>Key Takeaways (Top Section)</span>
                </h3>
                <button
                  type="button"
                  onClick={addKeyTakeaway}
                  className="text-xs font-bold text-[#007AFF] hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Takeaway</span>
                </button>
              </div>

              {(newBlog.keyTakeaways || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No key takeaways generated. Add some to display the summary box.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.keyTakeaways || []).map((takeaway, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-sm">
                      <button
                        type="button"
                        onClick={() => removeKeyTakeaway(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer transition-colors"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 gap-2.5 pr-8">
                        <textarea
                          placeholder="Actionable takeaway..."
                          rows={2}
                          value={takeaway}
                          onChange={(e) => handleKeyTakeawayChange(idx, e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-[#007AFF] focus:outline-none text-xs font-medium text-slate-700 bg-slate-50 resize-y"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Popular Searches Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faSearch} className="text-[#007AFF]" />
                  <span>Popular Searches (Bottom Badges)</span>
                </h3>
                <button
                  type="button"
                  onClick={addPopularSearch}
                  className="text-xs font-bold text-[#007AFF] hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Search Term</span>
                </button>
              </div>

              {(newBlog.popularSearches || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No popular searches generated. Add some to display tags at the bottom.</p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {(newBlog.popularSearches || []).map((term, idx) => (
                    <div key={idx} className="bg-white px-3 py-2 rounded-lg border border-slate-200 flex items-center gap-2 shadow-sm">
                      <input
                        type="text"
                        placeholder="Search term..."
                        value={term}
                        onChange={(e) => handlePopularSearchChange(idx, e.target.value)}
                        className="focus:outline-none text-xs font-semibold text-slate-700 bg-transparent w-[120px]"
                      />
                      <button
                        type="button"
                        onClick={() => removePopularSearch(idx)}
                        className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer transition-colors"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[9px]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FAQ Subcollection Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faFileAlt} className="text-blue-700" />
                  <span>Crawlable Q&A (FAQ Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addFaq}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add FAQ Item</span>
                </button>
              </div>

              {(newBlog.faqs || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No FAQ cards configured. Add items to support Google Q&A Rich snippets.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.faqs || []).map((faq, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-sm">
                      <button
                        type="button"
                        onClick={() => removeFaq(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer transition-colors"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 gap-2.5 pr-8">
                        <input
                          type="text"
                          placeholder="Question (e.g. Can I settle a bank loan without court?)"
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none text-xs font-semibold text-slate-700 bg-slate-50"
                        />
                        <textarea
                          placeholder="Detailed SEO-optimized answer..."
                          rows={2}
                          value={faq.answer}
                          onChange={(e) => handleFaqChange(idx, 'answer', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none text-xs font-medium text-slate-700 bg-slate-50 resize-y"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reviews Section */}
            <div className="p-6 border border-slate-150 rounded-3xl bg-slate-50/30 flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faStar} className="text-blue-500" />
                  <span>Client Reviews (Snippet Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addReview}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span>Add Review</span>
                </button>
              </div>

              {(newBlog.reviews || []).length === 0 ? (
                <p className="text-slate-400 text-xs italic">No reviews configured. Add client reviews to display star ratings in search results.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {(newBlog.reviews || []).map((review, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex flex-col gap-3 relative shadow-sm">
                      <button
                        type="button"
                        onClick={() => removeReview(idx)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 cursor-pointer transition-colors"
                      >
                        <FontAwesomeIcon icon={faTimes} className="text-[10px]" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pr-8">
                        <div className="flex flex-col gap-1.5">
                           <label className="text-[10px] font-extrabold uppercase text-slate-400">Reviewer Name</label>
                           <input
                             type="text"
                             value={review.name}
                             onChange={(e) => handleReviewChange(idx, 'name', e.target.value)}
                             className="p-2.5 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none text-xs font-semibold text-slate-700 bg-slate-50"
                             placeholder="e.g. Rajesh Kumar"
                           />
                        </div>
                        <div className="flex flex-col gap-1.5">
                           <label className="text-[10px] font-extrabold uppercase text-slate-400">Star Rating</label>
                           <select
                             value={review.rating}
                             onChange={(e) => handleReviewChange(idx, 'rating', Number(e.target.value))}
                             className="p-2.5 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none text-xs font-semibold text-slate-700 bg-slate-50"
                           >
                              {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Stars</option>)}
                           </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-extrabold uppercase text-slate-400">Review Content</label>
                        <textarea
                          value={review.review}
                          onChange={(e) => handleReviewChange(idx, 'review', e.target.value)}
                          rows={2}
                          className="p-2.5 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none text-xs font-medium text-slate-700 bg-slate-50 resize-y"
                          placeholder="Review text..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handleCancelForm}
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                {formMode === 'add' ? 'Publish Blog Post' : 'Save Changes'}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogsDashboard;
