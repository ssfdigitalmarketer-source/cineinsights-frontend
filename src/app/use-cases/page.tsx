import React from 'react';

const UseCasesPage = () => {
  return (
    <div className="w-full grid-canvas min-h-screen">
      <div className="max-w-[1200px] mx-auto px-margin py-10">
        {/* Hero Section */}
        <section className="mb-24 mt-12 grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-label text-primary mb-2 block uppercase tracking-widest font-bold">Contextual Targeting Excellence</span>
            <h1 className="text-h1 mb-6 text-on-surface max-w-[672px] leading-tight font-bold">
              Precision Intelligence for the <span className="text-primary italic">Media Ecosystem.</span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-[600px]">
              Leverage content intelligence to power AdTech programmatic decisions, brand safety filters, and audience enrichment at petabyte scale.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 relative hidden lg:block">
            <div className="relative bg-on-surface rounded-2xl p-6 shadow-2xl border border-outline-variant/20 overflow-hidden">
              <pre className="font-code text-body-sm text-white/90">
                <span className="text-primary-fixed">{"{"}</span>{'\n'}
                {'  '}<span className="text-primary-container">"context"</span>: <span className="text-tertiary-container">"Action Movie"</span>,{'\n'}
                {'  '}<span className="text-primary-container">"safety"</span>: <span className="text-tertiary-container">"Safe"</span>,{'\n'}
                {'  '}<span className="text-primary-container">"mood"</span>: <span className="text-tertiary-container">"High-Energy"</span>,{'\n'}
                {'  '}<span className="text-primary-container">"taxonomy"</span>: [<span className="text-tertiary-container">"IAB1-5"</span>]{'\n'}
                <span className="text-primary-fixed">{"}"}</span>
              </pre>
            </div>
          </div>
        </section>

        {/* AdTech Section */}
        <section className="mb-32">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-4xl">ads_click</span>
            <h2 className="text-h2 font-bold">AdTech: DSP & SSP Enrichment</h2>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-[32px] border border-outline-variant h-[500px] shadow-sm bg-white">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-primary/10">dashboard</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-outline-variant shadow-lg">
                <div className="flex flex-wrap gap-8">
                  <div className="flex-1">
                    <h3 className="text-h3 text-primary mb-2 font-semibold">Bid Stream Enrichment</h3>
                    <p className="text-body-md text-on-surface-variant">Inject deep content signals into the bid stream. Provide context that standard VAST tags miss, enabling higher CPMs and better performance.</p>
                  </div>
                  <div className="w-full md:w-auto flex flex-col justify-center">
                    <div className="bg-primary/5 border border-primary/20 px-8 py-4 rounded-xl text-center">
                      <span className="text-label text-primary block mb-1 font-bold">SIGNAL SPEED</span>
                      <span className="text-h2 text-primary font-bold">&lt; 100ms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
              <div className="flex-1 bg-white p-8 rounded-[32px] border border-outline-variant group hover:border-primary transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">gpp_good</span>
                  <h4 className="text-h3 text-xl font-semibold">Brand Suitability</h4>
                </div>
                <p className="text-body-md text-on-surface-variant mb-8">Automated detection of prohibited content (violence, language) at the title level to protect brand integrity.</p>
                <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                  <span className="text-label text-on-surface-variant uppercase font-bold">Target: GARM / IAB Standards</span>
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 rounded-[32px] border border-outline-variant group hover:border-primary transition-colors shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">target</span>
                  <h4 className="text-h3 text-xl font-semibold">Contextual IQ</h4>
                </div>
                <p className="text-body-md text-on-surface-variant mb-8">Match ads to the visual and emotional context of the scene. Detect mood and taxonomy in real-time.</p>
                <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                  <span className="text-label text-on-surface-variant uppercase font-bold">Target: Contextual Vendors</span>
                  <span className="material-symbols-outlined text-primary">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OTT Section */}
        <section className="mb-32">
          <div className="flex items-baseline gap-4 mb-8 flex-row-reverse">
            <span className="material-symbols-outlined text-primary text-4xl">live_tv</span>
            <h2 className="text-h2 font-bold">OTT & CTV Platforms</h2>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 flex flex-col gap-8">
              <div className="flex-1 bg-on-surface text-white p-8 rounded-[32px] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary-fixed">auto_awesome</span>
                  <h4 className="text-h3 text-xl font-semibold">Automated Metadata</h4>
                </div>
                <p className="text-body-md text-white/60 mb-4">Eliminate manual data entry. CineInsights automatically generates genre, keyword, and mood metadata.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-body-sm">
                    <span className="material-symbols-outlined text-primary-fixed text-sm">check_circle</span> 
                    High-Fidelity Signal Extraction
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-white p-8 rounded-[32px] border border-outline-variant shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">inventory_2</span>
                  <h4 className="text-h3 text-xl font-semibold">Audience Interests</h4>
                </div>
                <p className="text-body-md text-on-surface-variant mb-4">Normalize disparate metadata sources into a single, audience-ready intelligence layer.</p>
                <div className="pt-2 border-t border-outline-variant">
                  <span className="text-label text-on-surface-variant uppercase font-bold">Use Case: Personalization</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2 group relative overflow-hidden rounded-[32px] border border-outline-variant h-[500px] shadow-sm bg-white">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-primary/10">movie</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-outline-variant shadow-lg">
                <div className="flex flex-wrap gap-8">
                  <div className="flex-1">
                    <h3 className="text-h3 text-primary mb-2 font-semibold">Catalog Enrichment</h3>
                    <p className="text-body-md text-on-surface-variant">Power recommendation engines with semantic understanding of what's actually happening in the video.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden rounded-[40px] bg-on-surface text-white text-center mb-20">
          <div className="relative z-10 max-w-[672px] mx-auto px-6">
            <h2 className="text-h1 mb-6 font-bold">Ready to enrich your bid stream?</h2>
            <p className="text-body-lg text-white/60 mb-10">Join the leading DSPs and OTT platforms leveraging CineInsights for media intelligence.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-10 py-4 text-label rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm shadow-primary/20">Start Integrating</button>
              <button className="border border-white/20 text-white px-10 py-4 text-label rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">Request Technical Demo</button>
            </div>
          </div>
          <div className="absolute inset-0 grid-canvas opacity-5 pointer-events-none"></div>
        </section>
      </div>
    </div>
  );
};

export default UseCasesPage;
