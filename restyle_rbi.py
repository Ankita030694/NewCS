import re

path = '/Users/piyushmishra/Desktop/NEWCS/NewCS/src/app/rbi-guidelines-for-recovery-agents-2026/RbiGuidelinesClient.tsx'
with open(path, 'r') as f:
    text = f.read()

# 1. Colors
text = text.replace('#8B0000', '#2F6CE2')
text = text.replace('#300000', '#001235')
text = text.replace('text-red-', 'text-blue-')
text = text.replace('bg-red-', 'bg-blue-')
text = text.replace('border-red-', 'border-blue-')
text = text.replace('hover:bg-red-', 'hover:bg-blue-')
text = text.replace('hover:text-red-', 'hover:text-blue-')
text = text.replace('focus:ring-red-', 'focus:ring-blue-')

# 2. Replace Right Sidebar
# Find the start of Right Column
right_col_start = text.find('{/* Right Column: CTA & Author Bio */}')
if right_col_start != -1:
    end_aside = text.find('</aside>', right_col_start) + len('</aside>')
    
    new_sidebar = """{/* Right Column: CTA & Related Expertise & Author */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Harassment?</h4>
                                <p className="text-sm text-gray-600 mb-6">Do not ignore illegal recovery tactics. Secure your rights and build a strong defense.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Defence
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Draft Police Complaints</p>
                                    <p>✔ Reply to Legal Notices</p>
                                    <p>✔ Stop Agent Calls</p>
                                </div>
                            </div>

                            {/* Author Bio Widget Styled as ChequeBounce */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-white shadow-sm">
                                    <Image
                                        src="/anujbhiya.png"
                                        alt="Anuj Bhiya - Legal Expert"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Anuj Bhiya</h4>
                                <p className="text-xs text-blue-600 font-medium mb-3">Senior Legal Advocate</p>
                                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                                    Specializing in borrower rights and anti-harassment litigation.
                                </p>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Anti Harassment</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>"""
    text = text[:right_col_start] + new_sidebar + text[end_aside:]

# 3. Add Reviews section at the bottom before </>\n    );
reviews_section = """            
            {/* Reviews Section at the bottom */}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                            <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                <span>{review.name}</span>
                                <span className="opacity-60">{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
"""

# Find the end of the divs
end_tag = "        </>\n    );"
if end_tag in text and "Client Success Stories" not in text:
    text = text.replace(end_tag, reviews_section + end_tag)

with open(path, 'w') as f:
    f.write(text)

print("Formatting updated successfully.")
