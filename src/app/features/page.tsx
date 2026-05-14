
const FeaturesPage = () => {
  return (
    <div className="w-full grid-canvas min-h-screen">
      <div className="max-w-[1200px] mx-auto px-margin py-20">
        {/* Hero Section */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-label text-primary uppercase font-bold tracking-wider">INTELLIGENCE : V2.4.0</span>
            </div>
            <h1 className="font-h1 text-h1 text-on-surface leading-tight">
              The Engine for <span className="text-primary italic">Media Suitability.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-[600px]">
              Engineered for AdTech. CineInsights provides the contextual backbone for brand-safe media buying with millisecond latency and deep content taxonomy.
            </p>
            <div className="flex gap-10 pt-4">
              <div className="flex flex-col border-l-2 border-primary pl-4">
                <span className="font-code text-primary text-2xl font-bold">&lt; 100ms</span>
                <span className="text-label text-on-surface-variant uppercase font-semibold">BID RESPONSE</span>
              </div>
              <div className="flex flex-col border-l-2 border-primary pl-4">
                <span className="font-code text-primary text-2xl font-bold">99.99%</span>
                <span className="text-label text-on-surface-variant uppercase font-semibold">ACCURACY SLA</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative bg-on-surface border border-outline-variant/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="px-4 py-2 border-b border-outline-variant/20 bg-white/5 flex justify-between items-center">
                <span className="font-code text-primary-fixed text-sm font-medium">brand_safety.json</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40"></span>
                </div>
              </div>
              <pre className="p-6 font-code text-body-sm overflow-x-auto text-white/90">
                <span className="text-primary-fixed">{"{"}</span>{'\n'}
                {'  '}<span className="text-primary-container">"safety_tier"</span>: <span className="text-tertiary-container">"GARM Low Risk"</span>,{'\n'}
                {'  '}<span className="text-primary-container">"warnings"</span>: <span className="text-on-surface-variant">[]</span>,{'\n'}
                {'  '}<span className="text-primary-container">"suitability"</span>: <span className="text-tertiary-container">"Safe for All"</span>,{'\n'}
                {'  '}<span className="text-primary-container">"signals"</span>: <span className="text-on-surface-variant">[</span>{'\n'}
                {'    '}<span className="text-tertiary-container">"inspirational"</span>,{'\n'}
                {'    '}<span className="text-tertiary-container">"educational"</span>,{'\n'}
                {'    '}<span className="text-tertiary-container">"brand_safe"</span>{'\n'}
                {'  '}<span className="text-on-surface-variant">]</span>{'\n'}
                <span className="text-primary-fixed">{"}"}</span>
              </pre>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {/* Brand Safety */}
          <div className="md:col-span-2 lg:col-span-2 bg-white border border-outline-variant rounded-2xl p-8 shadow-sm hover:border-primary transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-label text-primary uppercase text-[10px] font-bold tracking-[0.2em]">BRAND_SAFETY</span>
                <h3 className="text-h3 text-on-surface mt-1 font-semibold">GARM Alignment</h3>
              </div>
              <span className="material-symbols-outlined text-primary p-3 bg-primary/5 rounded-xl">verified_user</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between font-code text-body-sm">
                <span className="text-on-surface-variant">Brand Safety Score</span>
                <span className="text-primary font-bold">99.8%</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[99.8%]"></div>
              </div>
            </div>
            <p className="text-body-sm text-on-surface-variant">Automated analysis mapping every frame to GARM brand safety and suitability tiers at scale.</p>
          </div>

          {/* Contextual Taxonomy */}
          <div className="bg-white border border-outline-variant rounded-2xl p-8 shadow-sm hover:border-primary transition-all">
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-label text-on-surface-variant uppercase text-[10px] font-bold">TAXONOMY</span>
                <h3 className="text-h3 text-on-surface mt-1 font-semibold">IAB Contextual</h3>
              </div>
              <div className="py-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-code text-3xl text-primary font-bold">Tier 3</span>
                </div>
                <p className="text-body-sm text-on-surface-variant mt-2">Granular categorization for precise ad placement.</p>
              </div>
              <div className="flex gap-1 h-12 items-end">
                <div className="bg-primary/10 w-full h-[30%] rounded-t-sm"></div>
                <div className="bg-primary/20 w-full h-[50%] rounded-t-sm"></div>
                <div className="bg-primary/40 w-full h-[70%] rounded-t-sm"></div>
                <div className="bg-primary w-full h-[90%] rounded-t-sm"></div>
              </div>
            </div>
          </div>

          {/* Mood & Sentiment */}
          <div className="bg-on-surface text-white border border-outline-variant/10 rounded-2xl p-8 shadow-xl hover:shadow-primary/5 transition-all relative group overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <span className="text-label text-primary-fixed uppercase text-[10px] font-bold">SENTIMENT</span>
              <h3 className="text-h3 mt-1 font-semibold">Mood Signals</h3>
              <div className="mt-12 h-20 flex items-center justify-center pt-4">
                <span className="material-symbols-outlined text-primary-fixed text-4xl animate-bounce">sentiment_satisfied</span>
              </div>
              <p className="text-body-sm text-white/60 mt-4">Identify emotional undertones to match ad creative with content vibes.</p>
            </div>
          </div>

          {/* Content Warnings */}
          <div className="bg-white border border-outline-variant rounded-2xl p-8 shadow-sm hover:border-error transition-all">
            <div className="flex justify-between items-start mb-6">
              <span className="text-label text-error uppercase text-[10px] font-bold">RISK_DETECT</span>
              <span className="material-symbols-outlined text-error">warning</span>
            </div>
            <h3 className="text-h3 text-on-surface mb-2 font-semibold">Content Warnings</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-0.5 bg-error/5 border border-error/10 font-code text-[11px] text-error rounded">VIOLENCE: 0%</span>
              <span className="px-2 py-0.5 bg-error/5 border border-error/10 font-code text-[11px] text-error rounded">LANGUAGE: 0%</span>
            </div>
            <p className="text-body-sm text-on-surface-variant">Real-time detection of sensitive topics and prohibited content.</p>
          </div>

          {/* Audience Interests */}
          <div className="md:col-span-2 lg:col-span-3 bg-white border border-outline-variant rounded-2xl p-8 shadow-sm hover:border-primary transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="text-label text-on-surface-variant uppercase text-[10px] font-bold">AUDIENCE_IQ</span>
                <h3 className="text-h3 text-on-surface mt-1 font-semibold">Audience Interests</h3>
                <p className="text-body-sm text-on-surface-variant mt-4">Predict demographics and interests based on content themes.</p>
              </div>
              <div className="md:col-span-2 grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="text-label text-on-surface-variant block mb-1 text-[10px] font-bold">TOP_INTEREST</span>
                  <span className="font-code text-primary font-bold">Tech Enthusiasts</span>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="text-label text-on-surface-variant block mb-1 text-[10px] font-bold">AGE_DEMO</span>
                  <span className="font-code text-primary font-bold">18-34 (72%)</span>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="text-label text-on-surface-variant block mb-1 text-[10px] font-bold">ENGAGEMENT</span>
                  <span className="font-code text-primary font-bold">High (Contextual)</span>
                </div>
                <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl">
                  <span className="text-label text-on-surface-variant block mb-1 text-[10px] font-bold">BRAND_READY</span>
                  <span className="font-code text-primary font-bold">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlight Rows */}
        <section className="space-y-8 mb-24">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white border border-outline-variant rounded-2xl p-10 shadow-sm hover:border-primary transition-all relative group overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'wght' 100" }}>speed</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  <span className="text-label text-primary uppercase text-[11px] font-bold">BID_STREAM_PERF</span>
                </div>
                <h2 className="text-h2 text-on-surface mb-4">Millisecond Response</h2>
                <p className="text-body-md text-on-surface-variant max-w-[480px]">Our global edge network ensures content intelligence is delivered within the RTB window, enabling real-time ad enrichment.</p>
              </div>
            </div>
            <div className="flex-1 bg-white border border-outline-variant rounded-2xl p-10 shadow-sm hover:border-primary transition-all relative group overflow-hidden">
              <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'wght' 100" }}>hub</span>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-sm">hub</span>
                  <span className="text-label text-on-surface-variant uppercase text-[11px] font-bold">ECOSYSTEM_CONNECT</span>
                </div>
                <h2 className="text-h2 text-on-surface mb-4">Universal ID Support</h2>
                <p className="text-body-md text-on-surface-variant max-w-[480px]">Deep metadata enrichment from IMDB ID, series titles, or raw text input. Seamlessly integrate with any media player or SSP.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA section */}
        <section className="py-24 border-t border-outline-variant text-center">
          <div className="max-w-[672px] mx-auto">
            <h2 className="text-h2 text-on-surface mb-6">Ready to enrich your data?</h2>
            <div className="p-5 bg-surface-container-low border border-outline-variant rounded-2xl flex items-center justify-between mb-10 group">
              <code className="font-code text-primary text-left text-sm">curl -X GET "https://api.cineinsights.com/v1/enrich?id=tt0111161"</code>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">content_copy</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="px-10 py-5 bg-primary text-white text-label rounded-xl font-bold hover:shadow-xl shadow-primary/20 transition-all active:scale-95">GET API KEY</button>
              <button className="px-10 py-5 border-2 border-on-surface text-on-surface text-label rounded-xl font-bold hover:bg-on-surface hover:text-white transition-all active:scale-95">CONTACT SALES</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;
