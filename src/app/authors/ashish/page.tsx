import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Ashish - Legal and Debt Resolution Professional | CredSettle',
    description: 'Ashish is a leading legal and debt resolution expert at CredSettle, helping individuals navigate multiple loan settlements and financial recovery.',
};

export default function AshishAuthorPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                
                {/* Back Link */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    {/* Header Banner */}
                    <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-900 w-full relative">
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    </div>
                    
                    <div className="px-8 pb-12 relative">
                        {/* Avatar */}
                        <div className="flex justify-between items-end -mt-16 mb-8 relative z-10">
                            <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-white overflow-hidden">
                                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-700 font-black text-5xl">
                                    AS
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <a href="mailto:contact@credsettle.com" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-sm">
                                    Contact Author
                                </a>
                                <a href="https://www.linkedin.com/in/ashish-jhangra-ab1a54127/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#0077b5] hover:bg-[#005e93] text-white font-bold rounded-xl transition-all shadow-sm flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Bio Section */}
                        <div className="mb-10">
                            <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">Ashish</h1>
                            <h2 className="text-xl font-medium text-blue-600 mb-6">Legal and Debt Resolution Professional</h2>
                            
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p className="mb-4">
                                    Ashish is a seasoned legal professional specializing in consumer debt resolution, loan settlement negotiation, and banking disputes. With extensive experience navigating the complexities of Indian financial regulations (including RBI guidelines and the SARFAESI Act), he helps distressed borrowers reclaim their financial independence.
                                </p>
                                <p className="mb-4">
                                    At CredSettle, Ashish leads the legal strategy for complex multi-loan consolidation and harassment defense. He is passionate about protecting consumer rights and ensuring that banks and recovery agencies adhere strictly to fair practice codes.
                                </p>
                                <p>
                                    His expertise spans across credit card debt relief, personal loan settlements, and resolving high-value business loan defaults safely and legally.
                                </p>
                            </div>
                        </div>

                        {/* Stats / Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-8">
                            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                <div className="text-2xl font-black text-gray-900 mb-1">10+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Years Experience</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                <div className="text-2xl font-black text-gray-900 mb-1">2,500+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cases Handled</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                <div className="text-2xl font-black text-gray-900 mb-1">₹50Cr+</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Debt Settled</div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                <div className="text-2xl font-black text-gray-900 mb-1">100%</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Client Focus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
