import re

file_path = "/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app/authority/blogs/page.tsx"

with open(file_path, "r") as f:
    content = f.read()

# Update imports
imports_to_add = [
    "faSearch", "faStar", "faChevronLeft", "faChevronRight", 
    "faTimes", "faArrowLeft", "faCheckCircle", "faInfoCircle", 
    "faFileAlt", "faClipboardList"
]
for imp in imports_to_add:
    if imp not in content:
        content = content.replace("faMagic,", f"faMagic,\n  {imp},")

# Extract the logic before return
return_match = re.search(r"^\s*if \(!isAuthorized\) \{\s*return null;\s*\}\s*return \(", content, re.MULTILINE)
if not return_match:
    print("Could not find return statement!")
    exit(1)

logic_part = content[:return_match.end() - 9] # -9 to remove "return ("

new_return = """
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
                  <span className="text-[#B8860B]">📝</span>
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
                  className="bg-[#B8860B] hover:bg-[#9E7307] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
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
                <p className="text-3xl font-black text-[#B8860B] mt-1">{blogs.length}</p>
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
                        <th className="p-4 text-xs font-bold text-slate-400 uppercase">Q&A / Reviews</th>
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
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm line-clamp-1 hover:text-[#B8860B] transition-colors">
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
                          <td className="p-4">
                            <div className="flex gap-2 items-center">
                              <span className="px-2 py-0.5 bg-blue-50 border border-blue-200/50 rounded-md text-[10px] font-extrabold text-blue-700">
                                {blog.faqs?.length || 0} FAQs
                              </span>
                              <span className="px-2 py-0.5 bg-amber-50 border border-amber-200/50 rounded-md text-[10px] font-extrabold text-[#B8860B]">
                                {blog.reviews?.length || 0} Reviews
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleEdit(blog)}
                                className="w-8 h-8 rounded-lg hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#B8860B] transition-colors cursor-pointer"
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
            <div className="p-6 border border-amber-200/80 bg-gradient-to-br from-amber-50/40 to-orange-50/10 rounded-2xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-200/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-[#B8860B] text-xs font-bold animate-pulse">✨</span>
                  <div>
                    <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider">
                      AI Writeup Auto-Generator (ChatGPT)
                    </h3>
                    <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed normal-case">
                      Enter keywords below. ChatGPT will automatically draft the title, subtitle, slug, 3,000+ words detailed rich blog post, 10+ FAQ schemas, and 5+ client reviews.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">Primary Keyword</label>
                  <input
                    type="text"
                    value={primaryKeyword}
                    onChange={(e) => setPrimaryKeyword(e.target.value)}
                    placeholder="e.g. 'Get freed from loan'"
                    className="p-3 bg-white border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none shadow-sm transition-all"
                    disabled={isGenerating}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">Secondary Keyword (Optional)</label>
                  <input
                    type="text"
                    value={secondaryKeyword}
                    onChange={(e) => setSecondaryKeyword(e.target.value)}
                    placeholder="e.g. 'loan settlement process'"
                    className="p-3 bg-white border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-50 rounded-xl text-xs text-slate-800 focus:outline-none shadow-sm transition-all"
                    disabled={isGenerating}
                  />
                </div>
              </div>

              <div className="flex items-center justify-end mt-4">
                <motion.button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isGenerating || !primaryKeyword}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-[#B8860B] hover:from-amber-600 hover:to-[#9E7307] text-white disabled:opacity-40 rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-1.5"
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
                  required
                  value={newBlog.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Defeating Bank Harassment & Debt Settlement"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Subtitle */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Subtitle Block *</label>
                <input
                  type="text"
                  name="subtitle"
                  required
                  value={newBlog.subtitle}
                  onChange={handleInputChange}
                  placeholder="e.g. A comprehensive guide on debtor legal rights and RBI OTS principles"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
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
                  required
                  value={newBlog.slug}
                  onChange={handleInputChange}
                  placeholder="e.g. defeating-bank-harassment"
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white font-mono"
                />
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Publication Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={newBlog.date}
                  onChange={handleInputChange}
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
                />
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Featured Author Profile</label>
                <select
                  name="author"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  required
                  className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-white"
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
                    className="p-3.5 border border-slate-200 rounded-xl focus:border-[#B8860B] focus:outline-none text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 flex-1"
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
                      className="px-4 py-3 bg-amber-50 hover:bg-amber-100 border border-[#D4AF37]/35 text-[#B8860B] rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 whitespace-nowrap"
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
                      className="bg-[#B8860B] h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>

            {/* Image Preview Block */}
            {(imagePreview || newBlog.image) && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-150 flex flex-col items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cover Image Preview</span>
                <img
                  src={imagePreview || newBlog.image}
                  alt="cover preview"
                  className="w-full max-w-sm h-40 object-cover rounded-xl border border-slate-200 shadow-sm"
                />
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
            <div className="p-5 border border-emerald-200/80 bg-emerald-50/50 rounded-2xl shadow-sm flex flex-col gap-4">
              <h3 className="text-xs font-black text-emerald-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faMagic} className="text-emerald-700" />
                <span>AI Content Expander (5000+ Words)</span>
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={expansionPrompt}
                  onChange={(e) => setExpansionPrompt(e.target.value)}
                  placeholder="What specific sections or details should be expanded? (e.g. 'Add more details about RBI guidelines')"
                  className="flex-1 p-3 border border-emerald-200 rounded-lg focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  disabled={isExpanding}
                />
                <button
                  type="button"
                  onClick={handleExpandContent}
                  disabled={isExpanding || !newBlog.description}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50 shadow-sm whitespace-nowrap"
                >
                  {isExpanding ? '💫 Expanding...' : 'Expand Content'}
                </button>
              </div>
            </div>

            {/* SEO Meta Tags Accordion */}
            <div className="p-5 border border-slate-150 rounded-2xl bg-slate-50/50 flex flex-col gap-4">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <FontAwesomeIcon icon={faInfoCircle} className="text-[#B8860B]" />
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
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#B8860B] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
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
                    className="p-3 border border-slate-200 rounded-lg focus:border-[#B8860B] focus:outline-none text-xs font-semibold text-slate-700 bg-white"
                  />
                </div>
              </div>
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
                          required
                          value={faq.question}
                          onChange={(e) => handleFaqChange(idx, 'question', e.target.value)}
                          className="p-3 border border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none text-xs font-semibold text-slate-700 bg-slate-50"
                        />
                        <textarea
                          placeholder="Detailed SEO-optimized answer..."
                          required
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
                  <FontAwesomeIcon icon={faStar} className="text-amber-500" />
                  <span>Client Reviews (Snippet Schema)</span>
                </h3>
                <button
                  type="button"
                  onClick={addReview}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
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
                             className="p-2.5 border border-slate-200 rounded-lg focus:border-amber-400 focus:outline-none text-xs font-semibold text-slate-700 bg-slate-50"
                             placeholder="e.g. Rajesh Kumar"
                           />
                        </div>
                        <div className="flex flex-col gap-1.5">
                           <label className="text-[10px] font-extrabold uppercase text-slate-400">Star Rating</label>
                           <select
                             value={review.rating}
                             onChange={(e) => handleReviewChange(idx, 'rating', Number(e.target.value))}
                             className="p-2.5 border border-slate-200 rounded-lg focus:border-amber-400 focus:outline-none text-xs font-semibold text-slate-700 bg-slate-50"
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
                          className="p-2.5 border border-slate-200 rounded-lg focus:border-amber-400 focus:outline-none text-xs font-medium text-slate-700 bg-slate-50 resize-y"
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
"""

content = logic_part + new_return + "};\n\nexport default BlogsDashboard;\n"

with open(file_path, "w") as f:
    f.write(content)

print("Updated UI successfully!")
