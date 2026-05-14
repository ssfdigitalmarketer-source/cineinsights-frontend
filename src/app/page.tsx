import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <section className="px-margin py-20 lg:py-48 w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="flex flex-col gap-stack-lg w-full relative z-10">
          <div className="flex items-center gap-2">
            <div className="text-label text-primary font-bold uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full">AdTech Focused</div>
            <div className="h-px w-12 bg-outline-variant"></div>
            <div className="text-label text-outline uppercase tracking-widest">Version 2.4.0</div>
          </div>
          <h1 className="text-h1 text-on-surface w-full lg:w-3/4 leading-[1.05] tracking-tight">
            The Content Intelligence API for <span className="text-primary italic">Media Buying.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant w-full lg:w-1/2 leading-relaxed">
            Get brand safety, contextual taxonomy, mood, warnings, and audience-ready metadata from any film, series, or video input. Precision intelligence for DSPs, SSPs, and OTT platforms.
          </p>
          <div className="flex flex-wrap gap-stack-md mt-6">
            <button className="px-10 py-4 bg-on-surface text-white font-bold text-body-md rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-on-surface/10">Get API Key</button>
            <Link href="/use-cases" className="px-10 py-4 border border-outline-variant text-on-surface font-bold text-body-md rounded-xl hover:bg-surface-container transition-all inline-block text-center backdrop-blur-sm">Explore Use Cases</Link>
          </div>
        </div>
      </section>

      {/* Media Intelligence Section */}
      <section className="px-margin py-24 border-t border-outline-variant bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 font-bold leading-tight">Beyond just metadata. <br/><span className="text-primary">Content Intelligence.</span></h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              CineInsights doesn't just pull titles. We analyze the soul of the content—detecting mood, sentiment, and safety signals within the 100ms real-time bidding window.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-outline-variant bg-white shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2">gpp_good</span>
                <div className="font-bold text-on-surface">Brand Safety</div>
                <div className="text-body-sm text-on-surface-variant">GARM & IAB Aligned</div>
              </div>
              <div className="p-4 rounded-xl border border-outline-variant bg-white shadow-sm">
                <span className="material-symbols-outlined text-primary mb-2">psychology</span>
                <div className="font-bold text-on-surface">Mood & Sentiment</div>
                <div className="text-body-sm text-on-surface-variant">Emotional Context</div>
              </div>
            </div>
          </div>
          <div className="bg-on-surface rounded-2xl p-8 shadow-2xl border border-outline-variant/20 font-code relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-20">
               <span className="material-symbols-outlined text-white text-6xl">data_object</span>
            </div>
            <div className="mb-4 text-outline flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <span className="ml-2 text-xs uppercase tracking-widest font-bold">API Response</span>
            </div>
            <pre className="whitespace-pre-wrap text-code text-white/90"><span className="text-primary-fixed">{"{"}</span>
  <span className="text-primary-container">"imdb_id"</span>: <span className="text-tertiary-container">"tt0111161"</span>,
  <span className="text-primary-container">"brand_safety"</span>: <span className="text-primary-fixed">{"{"}</span>
    <span className="text-primary-container">"rating"</span>: <span className="text-tertiary-container">"Safe"</span>,
    <span className="text-primary-container">"warnings"</span>: []
  <span className="text-primary-fixed">{"}"}</span>,
  <span className="text-primary-container">"contextual"</span>: <span className="text-primary-fixed">{"{"}</span>
    <span className="text-primary-container">"taxonomy"</span>: <span className="text-tertiary-container">"IAB1-5 (Movies)"</span>,
    <span className="text-primary-container">"mood"</span>: <span className="text-tertiary-container">"Inspirational"</span>
  <span className="text-primary-fixed">{"}"}</span>,
  <span className="text-primary-container">"audience"</span>: <span className="text-tertiary-container">"Adults 18-45"</span>
<span className="text-primary-fixed">{"}"}</span></pre>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-margin py-32">
        <div className="text-center mb-20">
          <h2 className="text-h2 font-bold mb-4">Core Media Intelligence</h2>
          <p className="text-body-md text-on-surface-variant">Everything you need for contextual targeting and brand suitability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Brand Safety", desc: "Automated analysis for GARM standards and IAB suitability tiers.", icon: "verified_user" },
            { title: "Contextual Taxonomy", desc: "Deep categorization mapped to industry-standard taxonomies (IAB, GARM).", icon: "account_tree" },
            { title: "Audience Interests", desc: "Predict viewer demographics and interests based on content themes.", icon: "groups" },
            { title: "Mood & Sentiment", desc: "Identify emotional undertones to match ad creative with content vibes.", icon: "sentiment_satisfied" },
            { title: "Content Warnings", desc: "Real-time detection of violence, language, and sensitive topics.", icon: "warning" },
            { title: "Title-Level Intel", desc: "Rich metadata enrichment from IMDB ID, series title, or raw text.", icon: "movie" },
          ].map((feat, i) => (
            <div key={i} className="flex flex-col gap-4 p-8 rounded-2xl border border-outline-variant hover:border-primary transition-all hover:shadow-lg bg-white group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">{feat.icon}</span>
              </div>
              <h3 className="text-h3 font-semibold">{feat.title}</h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Buyers */}
      <section className="px-margin py-32 bg-on-surface text-white rounded-[40px] mb-20 overflow-hidden relative">
        <div className="absolute inset-0 grid-canvas opacity-5"></div>
        <div className="relative z-10">
          <h2 className="text-h2 font-bold mb-16 text-center">Built for the Media Ecosystem</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              "DSPs & SSPs",
              "OTT / CTV Platforms",
              "Agencies & Planning",
              "Contextual Vendors"
            ].map((buyer, i) => (
              <div key={i} className="text-center group">
                <div className="text-h3 font-bold mb-2 group-hover:text-primary transition-colors">{buyer}</div>
                <div className="h-1 w-12 bg-primary/30 mx-auto group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA */}
      <section className="px-margin py-32 text-center border-t border-outline-variant">
        <h2 className="text-h1 font-bold mb-6">Scale your media intelligence.</h2>
        <p className="text-body-lg text-on-surface-variant mb-12 max-w-[600px] mx-auto">
          Start enriching your bid stream today with the industry's most precise content API.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold text-body-md hover:brightness-110 shadow-xl shadow-primary/20 transition-all">Create Account</button>
          <button className="border border-outline-variant text-on-surface px-12 py-5 rounded-2xl font-bold text-body-md hover:bg-surface-container transition-all">Contact Sales</button>
        </div>
      </section>
    </div>
  );
}
