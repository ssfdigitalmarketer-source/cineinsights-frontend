import React from 'react';

const PricingPage = () => {
  return (
    <div className="w-full grid-canvas min-h-screen">
      <div className="max-w-[1200px] mx-auto px-margin py-20">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-h1 mb-6 tracking-tight text-on-surface">
            Predictable Pricing for <br/><span className="text-primary italic">Media Intelligence</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-[672px] mx-auto">
            Scalable infrastructure for DSPs, SSPs, and OTT platforms. 
            Get the content signals you need at the scale your bid stream demands.
          </p>
        </section>

        {/* Pricing Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {/* Starter Plan */}
          <div className="bg-white border border-outline-variant p-8 rounded-3xl flex flex-col group hover:border-primary transition-all card-shadow">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-label text-primary uppercase mb-2 block tracking-widest font-bold">Developer</span>
                <h3 className="text-h3 text-on-surface font-semibold">Sandbox</h3>
              </div>
              <div className="text-right">
                <span className="text-h3 text-on-surface font-bold">$0</span>
                <span className="text-on-surface-variant block text-body-sm">Free Forever</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md mb-8">Perfect for testing integrations and small-scale media planning.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm">5,000 API Requests / mo</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm">Basic Taxonomy (IAB)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm">Standard Community Support</span>
              </li>
            </ul>
            <button className="w-full py-4 border border-outline-variant hover:bg-surface-container-low text-label uppercase rounded-xl font-bold transition-all">Start Testing</button>
          </div>

          {/* Scale Plan (Featured) */}
          <div className="bg-white border-2 border-primary p-8 rounded-3xl flex flex-col relative overflow-hidden card-shadow shadow-primary/10">
            <div className="absolute top-0 right-0 bg-primary text-white font-label text-[10px] px-4 py-1.5 rounded-bl-xl font-bold tracking-widest">MOST POPULAR</div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-label text-primary uppercase mb-2 block tracking-widest font-bold">Growth</span>
                <h3 className="text-h3 text-on-surface font-semibold">Professional</h3>
              </div>
              <div className="text-right">
                <span className="text-h3 text-on-surface font-bold">$999</span>
                <span className="text-on-surface-variant block text-body-sm">Per Month</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-md mb-8">Built for production AdTech workloads with full safety signals.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm font-bold">500,000 API Requests / mo</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm">Full Brand Safety Suite</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm">Mood & Sentiment Signals</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="text-body-sm">Priority SLA (99.9%)</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-primary text-white text-label uppercase rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20">Upgrade Now</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-on-surface text-white p-8 rounded-3xl flex flex-col group transition-all card-shadow">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-label text-primary-fixed uppercase mb-2 block tracking-widest font-bold">Platform Scale</span>
                <h3 className="text-h3 font-semibold">Enterprise</h3>
              </div>
              <div className="text-right">
                <span className="text-h3 font-bold">Custom</span>
                <span className="text-white/60 block text-body-sm">Contact Sales</span>
              </div>
            </div>
            <p className="text-white/60 text-body-md mb-8">Unlimited throughput for global DSPs and high-volume OTT networks.</p>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">check_circle</span>
                <span className="text-body-sm font-bold">Unlimited Throughput</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">check_circle</span>
                <span className="text-body-sm">Custom Taxonomy Mapping</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">check_circle</span>
                <span className="text-body-sm">Dedicated TAM & 24/7 Support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed text-[20px]">check_circle</span>
                <span className="text-body-sm">White-glove Integration</span>
              </li>
            </ul>
            <button className="w-full py-4 bg-white text-on-surface text-label uppercase rounded-xl font-bold hover:bg-white/90 transition-all">Talk to Sales</button>
          </div>
        </div>

        {/* Feature Comparison Section */}
        <section className="mb-32">
          <h2 className="text-h2 text-on-surface mb-12 text-center">Intelligence Capabilities</h2>
          <div className="overflow-x-auto rounded-3xl border border-outline-variant">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="text-left py-6 px-8 text-label text-on-surface-variant uppercase tracking-widest w-1/3 font-bold">Signal Type</th>
                  <th className="text-left py-6 text-label text-on-surface-variant uppercase tracking-widest font-bold">Sandbox</th>
                  <th className="text-left py-6 text-label text-primary uppercase tracking-widest font-bold">Professional</th>
                  <th className="text-left py-6 text-label text-on-surface-variant uppercase tracking-widest font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                <tr>
                  <td className="py-6 px-8 text-body-md text-on-surface font-semibold">IAB Contextual Taxonomy</td>
                  <td className="py-6 text-body-sm text-on-surface-variant">Tier 1 Only</td>
                  <td className="py-6 text-body-sm text-on-surface">Full Taxonomy</td>
                  <td className="py-6 text-body-sm text-on-surface">Custom Mapping</td>
                </tr>
                <tr>
                  <td className="py-6 px-8 text-body-md text-on-surface font-semibold">GARM Brand Safety</td>
                  <td className="py-6"><span className="material-symbols-outlined text-outline-variant">close</span></td>
                  <td className="py-6 text-body-sm text-on-surface">Full Detection</td>
                  <td className="py-6 text-body-sm text-on-surface">Custom Thresholds</td>
                </tr>
                <tr>
                  <td className="py-6 px-8 text-body-md text-on-surface font-semibold">Sentiment & Mood</td>
                  <td className="py-6"><span className="material-symbols-outlined text-outline-variant">close</span></td>
                  <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
                  <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
                </tr>
                <tr>
                  <td className="py-6 px-8 text-body-md text-on-surface font-semibold">Real-time Latency</td>
                  <td className="py-6 text-body-sm text-on-surface-variant">&lt; 200ms</td>
                  <td className="py-6 text-body-sm text-primary font-bold">&lt; 50ms</td>
                  <td className="py-6 text-body-sm text-on-surface">&lt; 20ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
