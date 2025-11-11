'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faParagraph,
  faListUl,
  faListOl,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faQuoteRight,
  faCode,
  faMinus,
  faHighlighter,
  faLink,
  faLinkSlash,
  faImage,
  faTable,
  faArrowLeftLong,
  faArrowRightLong,
  faArrowUpLong,
  faArrowDownLong,
  faTrash,
  faRotateLeft,
  faRotateRight,
  faEraser,
} from '@fortawesome/free-solid-svg-icons';

import { db, storage } from '../../../lib/firebase';

const lowlight = createLowlight(common);

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  className?: string;
}

interface MenuBarProps {
  editor: any;
  uploading: boolean;
  onImageRequest: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor, uploading, onImageRequest }) => {
  if (!editor) {
    return null;
  }

  const colors = useMemo(
    () => [
      { name: 'Default', value: '#000000' },
      { name: 'Gray', value: '#4B5563' },
      { name: 'Red', value: '#EF4444' },
      { name: 'Orange', value: '#F97316' },
      { name: 'Yellow', value: '#EAB308' },
      { name: 'Green', value: '#22C55E' },
      { name: 'Blue', value: '#3B82F6' },
      { name: 'Indigo', value: '#6366F1' },
      { name: 'Purple', value: '#8B5CF6' },
      { name: 'Pink', value: '#EC4899' },
    ],
    [],
  );

  return (
    <div className="sticky top-0 z-10 border-b border-gray-300 p-2 flex flex-wrap gap-1 bg-gray-50">
      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`toolbar-btn ${editor.isActive('bold') ? 'toolbar-btn--active' : ''}`}
          title="Bold"
        >
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`toolbar-btn ${editor.isActive('italic') ? 'toolbar-btn--active' : ''}`}
          title="Italic"
        >
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`toolbar-btn ${editor.isActive('underline') ? 'toolbar-btn--active' : ''}`}
          title="Underline"
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`toolbar-btn ${editor.isActive('strike') ? 'toolbar-btn--active' : ''}`}
          title="Strikethrough"
        >
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={`toolbar-btn ${editor.isActive('subscript') ? 'toolbar-btn--active' : ''}`}
          title="Subscript"
        >
          <FontAwesomeIcon icon={faSubscript} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={`toolbar-btn ${editor.isActive('superscript') ? 'toolbar-btn--active' : ''}`}
          title="Superscript"
        >
          <FontAwesomeIcon icon={faSuperscript} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`toolbar-btn ${editor.isActive('paragraph') ? 'toolbar-btn--active' : ''}`}
          title="Paragraph"
        >
          <FontAwesomeIcon icon={faParagraph} />
        </button>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <button
            key={level}
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
            className={`toolbar-btn ${
              editor.isActive('heading', { level }) ? 'toolbar-btn--active' : ''
            }`}
            title={`Heading ${level}`}
          >
            H{level}
          </button>
        ))}
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`toolbar-btn ${editor.isActive('bulletList') ? 'toolbar-btn--active' : ''}`}
          title="Bullet List"
        >
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`toolbar-btn ${editor.isActive('orderedList') ? 'toolbar-btn--active' : ''}`}
          title="Ordered List"
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'left' }) ? 'toolbar-btn--active' : ''}`}
          title="Align Left"
        >
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'center' }) ? 'toolbar-btn--active' : ''}`}
          title="Align Center"
        >
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'right' }) ? 'toolbar-btn--active' : ''}`}
          title="Align Right"
        >
          <FontAwesomeIcon icon={faAlignRight} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`toolbar-btn ${editor.isActive({ textAlign: 'justify' }) ? 'toolbar-btn--active' : ''}`}
          title="Justify"
        >
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`toolbar-btn ${editor.isActive('blockquote') ? 'toolbar-btn--active' : ''}`}
          title="Blockquote"
        >
          <FontAwesomeIcon icon={faQuoteRight} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`toolbar-btn ${editor.isActive('codeBlock') ? 'toolbar-btn--active' : ''}`}
          title="Code Block"
        >
          <FontAwesomeIcon icon={faCode} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="toolbar-btn"
          title="Horizontal Rule"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <select
          className="toolbar-select"
          onChange={(event) => editor.chain().focus().setColor(event.target.value).run()}
          defaultValue=""
          title="Text Color"
        >
          <option value="">Text Color</option>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`toolbar-btn ${editor.isActive('highlight') ? 'toolbar-btn--active' : ''}`}
          title="Highlight"
        >
          <FontAwesomeIcon icon={faHighlighter} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Enter the URL');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={`toolbar-btn ${editor.isActive('link') ? 'toolbar-btn--active' : ''}`}
          title="Add Link"
        >
          <FontAwesomeIcon icon={faLink} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          className="toolbar-btn"
          title="Remove Link"
          disabled={!editor.isActive('link')}
        >
          <FontAwesomeIcon icon={faLinkSlash} />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!uploading) {
              onImageRequest();
            }
          }}
          className="toolbar-btn"
          title="Insert Image"
        >
          <FontAwesomeIcon icon={faImage} spin={uploading} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1 mr-2">
        <button
          type="button"
          onClick={() => {
            const rows = parseInt(window.prompt('Number of rows', '3') || '3', 10);
            const cols = parseInt(window.prompt('Number of columns', '3') || '3', 10);
            editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
          }}
          className="toolbar-btn"
          title="Insert Table"
        >
          <FontAwesomeIcon icon={faTable} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().addColumnBefore().run()}
          disabled={!editor.can().addColumnBefore()}
          className="toolbar-btn"
          title="Add Column Before"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().addColumnAfter().run()}
          disabled={!editor.can().addColumnAfter()}
          className="toolbar-btn"
          title="Add Column After"
        >
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().addRowBefore().run()}
          disabled={!editor.can().addRowBefore()}
          className="toolbar-btn"
          title="Add Row Before"
        >
          <FontAwesomeIcon icon={faArrowUpLong} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().addRowAfter().run()}
          disabled={!editor.can().addRowAfter()}
          className="toolbar-btn"
          title="Add Row After"
        >
          <FontAwesomeIcon icon={faArrowDownLong} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().deleteTable().run()}
          disabled={!editor.can().deleteTable()}
          className="toolbar-btn"
          title="Delete Table"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      <span className="toolbar-divider" />

      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          className="toolbar-btn"
          title="Undo"
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          className="toolbar-btn"
          title="Redo"
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().unsetAllMarks().run();
            editor.chain().focus().clearNodes().run();
          }}
          className="toolbar-btn"
          title="Clear Formatting"
        >
          <FontAwesomeIcon icon={faEraser} />
        </button>
      </div>
    </div>
  );
};

const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = document.createElement('img');
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

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content, onChange, className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
        HTMLAttributes: {
          class: 'max-w-full h-auto',
          loading: 'lazy',
          onerror:
            "this.onerror=null; this.src='/images/placeholder.png'; this.classList.add('error-image');",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Subscript,
      Superscript,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: content || '<p>Start writing your blog...</p>',
    onUpdate: ({ editor: editorInstance }) => {
      onChange(editorInstance.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg max-w-none p-4 min-h-[300px] focus:outline-none',
      },
    },
    autofocus: 'end',
  });

  const handleUpload = useCallback(
    async (file: File) => {
      if (!editor) {
        return;
      }

      try {
        setUploading(true);

        const MAX_FILE_SIZE = 10 * 1024 * 1024;
        if (file.size > MAX_FILE_SIZE) {
          alert('Image is too large. Maximum size is 10MB.');
          return;
        }

        let fileToUpload = file;
        if (file.type.startsWith('image/')) {
          fileToUpload = await compressImage(file);
        }

        const timestamp = Date.now();
        const filename = `${timestamp}_${file.name}`;
        const storageRef = ref(storage, `blog-content-images/${filename}`);

        const maxRetries = 3;
        let retryCount = 0;
        let downloadURL = '';
        let uploadSuccessful = false;

        while (retryCount < maxRetries && !uploadSuccessful) {
          try {
            const snapshot = await uploadBytes(storageRef, fileToUpload);
            downloadURL = await getDownloadURL(snapshot.ref);

            await addDoc(collection(db, 'blog_images'), {
              filename,
              url: downloadURL,
              path: `blog-content-images/${filename}`,
              uploadedAt: timestamp,
              fileSize: fileToUpload.size,
              type: fileToUpload.type,
              inUse: true,
            });

            editor.chain().focus().setImage({ src: downloadURL, alt: file.name }).run();
            uploadSuccessful = true;
          } catch (err) {
            console.error(`Upload attempt ${retryCount + 1} failed:`, err);
            retryCount += 1;

            if (retryCount >= maxRetries) {
              throw new Error('Failed after maximum upload attempts');
            }

            await new Promise((resolve) =>
              setTimeout(resolve, 1000 * Math.pow(2, retryCount)),
            );
          }
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
      } finally {
        setUploading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    },
    [editor],
  );

  const handleFileInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        handleUpload(file);
      }
    },
    [handleUpload],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (editor && content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .toolbar-btn {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid transparent;
        background-color: transparent;
        transition: background-color 0.2s ease, border-color 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
        color: #111827;
      }
      .toolbar-btn--active {
        background-color: #e5e7eb;
        border-color: #9ca3af;
      }
      .toolbar-btn:hover:not(:disabled) {
        background-color: #e5e7eb;
      }
      .toolbar-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .toolbar-select {
        padding: 6px 8px;
        border-radius: 6px;
        border: 1px solid #d1d5db;
        background-color: #f9fafb;
        color: #111827;
      }
      .toolbar-divider {
        width: 1px;
        background-color: #d1d5db;
        margin: 0 6px;
      }
      .ProseMirror {
        min-height: 300px;
        outline: none;
      }
      .ProseMirror h1 { font-size: 2em; font-weight: 700; margin: 0.67em 0; }
      .ProseMirror h2 { font-size: 1.5em; font-weight: 700; margin: 0.83em 0; }
      .ProseMirror h3 { font-size: 1.17em; font-weight: 600; margin: 1em 0; }
      .ProseMirror h4 { font-size: 1em; font-weight: 600; margin: 1.33em 0; }
      .ProseMirror h5 { font-size: 0.83em; font-weight: 600; margin: 1.67em 0; }
      .ProseMirror h6 { font-size: 0.67em; font-weight: 600; margin: 2.33em 0; }
      .ProseMirror p { margin: 1em 0; }
      .ProseMirror blockquote { border-left: 4px solid #d1d5db; margin-left: 0; padding-left: 1em; color: #4b5563; }
      .ProseMirror pre { background-color: #f5f5f5; padding: 0.75em; border-radius: 0.5em; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
      .ProseMirror table { border-collapse: collapse; margin: 0; overflow: hidden; table-layout: fixed; width: 100%; }
      .ProseMirror table td,
      .ProseMirror table th { border: 2px solid #ced4da; box-sizing: border-box; min-width: 1em; padding: 6px 8px; position: relative; vertical-align: top; }
      .ProseMirror table th { background-color: #f8f9fa; font-weight: 600; text-align: left; }
      .ProseMirror ul { list-style-type: disc; padding-left: 1.5em; margin: 1em 0; }
      .ProseMirror ol { list-style-type: decimal; padding-left: 1.5em; margin: 1em 0; }
      .ProseMirror li { margin: 0.5em 0; display: list-item; }
      .ProseMirror ul ul { list-style-type: circle; margin: 0.5em 0; }
      .ProseMirror ul ul ul { list-style-type: square; margin: 0.5em 0; }
      .ProseMirror ol ol { list-style-type: lower-alpha; margin: 0.5em 0; }
      .ProseMirror ol ol ol { list-style-type: lower-roman; margin: 0.5em 0; }
      .ProseMirror hr { border: none; border-top: 2px solid #ced4da; margin: 1.5em 0; }
      .ProseMirror img { max-width: 100%; height: auto; border-radius: 0.5rem; }
      .ProseMirror img.error-image {
        border: 2px solid #ef4444;
        min-height: 100px;
        min-width: 100px;
        position: relative;
      }
      .ProseMirror img.error-image::after {
        content: 'Failed to load image';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ef4444;
        font-size: 0.875rem;
        text-align: center;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      if (event.dataTransfer?.files.length) {
        const file = event.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          event.preventDefault();
          handleUpload(file);
          return true;
        }
      }
      return false;
    },
    [handleUpload],
  );

  const handlePaste = useCallback(
    (event: ClipboardEvent) => {
      if (event.clipboardData?.files.length) {
        const file = event.clipboardData.files[0];
        if (file.type.startsWith('image/')) {
          event.preventDefault();
          handleUpload(file);
          return true;
        }
      }
      return false;
    },
    [handleUpload],
  );

  return (
    <div className={`${className} relative`}>
      {isMounted && editor && (
        <div className="flex flex-col h-full">
          <MenuBar
            editor={editor}
            uploading={uploading}
            onImageRequest={() => fileInputRef.current?.click()}
          />
          <div className="overflow-y-auto flex-1">
            <EditorContent
              editor={editor}
              onDrop={handleDrop}
              onPaste={(event) => handlePaste(event.nativeEvent)}
            />
          </div>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default TiptapEditor;


