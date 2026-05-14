import React from 'react';

const DocsPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full flex min-h-screen">
      {/* Left Sidebar Navigation */}
      <aside className="hidden md:block w-64 shrink-0 border-r border-outline-variant px-6 py-10 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto bg-surface-container-lowest">
        <div className="space-y-10">
          <section>
            <h3 className="text-label text-outline uppercase mb-4 font-semibold">Core Documentation</h3>
            <ul className="space-y-1">
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded bg-primary-container/10 text-primary font-bold text-body-sm" href="#">
                  <span className="material-symbols-outlined text-sm">rocket_launch</span>
                  Getting Started
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all text-body-sm" href="#">
                  <span className="material-symbols-outlined text-sm">key</span>
                  Authentication
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all text-body-sm" href="#">
                  <span className="material-symbols-outlined text-sm">list_alt</span>
                  API Architecture
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-label text-outline uppercase mb-4 font-semibold">Media Endpoints</h3>
            <ul className="space-y-1">
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">
                  <span className="font-code text-xs text-primary font-bold">GET</span>
                  /show
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">
                  <span className="font-code text-xs text-primary font-bold">GET</span>
                  /credits
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">
                  <span className="font-code text-xs text-primary font-bold">GET</span>
                  /safety
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 px-3 py-2 rounded text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">
                  <span className="font-code text-xs text-tertiary font-bold">POST</span>
                  /analyze
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-label text-outline uppercase mb-4 font-semibold">SDKs & Libraries</h3>
            <ul className="space-y-1">
              <li><a className="px-3 py-1.5 block text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">Python Client</a></li>
              <li><a className="px-3 py-1.5 block text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">Node.js / TS</a></li>
              <li><a className="px-3 py-1.5 block text-on-surface-variant hover:text-primary transition-colors text-body-sm" href="#">Go Engine</a></li>
            </ul>
          </section>
        </div>
      </aside>

      {/* Center Content */}
      <article className="flex-1 min-w-0 px-6 py-10 lg:px-12 overflow-hidden bg-white">
        <nav className="flex items-center gap-1 mb-6 font-code text-body-sm text-outline">
          <span>docs</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface-variant">getting-started</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-h1 mb-4 text-on-surface">Getting Started with <span className="text-primary">METAPI</span></h1>
          <p className="text-body-lg text-on-surface-variant">
            Integrate high-fidelity media metadata into your applications in minutes. METAPI provides structured, verified data for cinema, music, and digital assets via a globally distributed edge network.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border border-outline-variant p-6 rounded-lg hover:shadow-sm transition-shadow bg-white">
            <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary">api</span>
            </div>
            <h3 className="text-h3 mb-2 font-semibold">Request an API Key</h3>
            <p className="text-body-sm text-on-surface-variant mb-4">Register your application to receive a production-ready OAuth client ID and secret.</p>
            <a className="text-primary font-bold text-body-sm flex items-center gap-1 hover:underline" href="#">
              Portal Dashboard <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="border border-outline-variant p-6 rounded-lg hover:shadow-sm transition-shadow bg-white">
            <div className="w-10 h-10 rounded bg-tertiary-container flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-tertiary">terminal</span>
            </div>
            <h3 className="text-h3 mb-2 font-semibold">First Request</h3>
            <p className="text-body-sm text-on-surface-variant mb-4">Run your first cURL command to see how our metadata engine processes asset IDs.</p>
            <a className="text-tertiary font-bold text-body-sm flex items-center gap-1 hover:underline" href="#">
              Interactive Playground <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>

        <section className="space-y-6 mb-12">
          <h2 className="text-h2 border-b border-outline-variant pb-2">Installation</h2>
          <p className="text-body-md text-on-surface-variant">
            Choose your preferred environment to begin integration. Our SDKs are optimized for low-latency asynchronous processing.
          </p>

          {/* Code Block Section */}
          <div className="border border-outline-variant rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-2 bg-surface-container-low border-b border-outline-variant">
              <div className="flex gap-4">
                <button className="text-primary font-bold text-label border-b-2 border-primary pb-1">PYTHON</button>
                <button className="text-outline font-medium text-label hover:text-on-surface transition-colors">NODE.JS</button>
                <button className="text-outline font-medium text-label hover:text-on-surface transition-colors">CURL</button>
              </div>
              <button className="text-outline hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
            <div className="p-6 bg-white font-code text-code leading-relaxed overflow-x-auto">
              <pre>
                <code>
                  <span className="text-[#d73a49]">import</span> metapi{'\n\n'}
                  <span className="text-[#6a737d]"># Initialize the client with your credentials</span>{'\n'}
                  client = metapi.<span className="text-[#6f42c1]">Client</span>(api_key=<span className="text-[#032f62]">"YOUR_API_KEY"</span>){'\n\n'}
                  <span className="text-[#6a737d]"># Fetch metadata for a specific media asset</span>{'\n'}
                  response = client.media.<span className="text-[#6f42c1]">get_metadata</span>({'\n'}
                  {'    '}asset_id=<span className="text-[#032f62]">"mv_84912"</span>,{'\n'}
                  {'    '}include=[<span className="text-[#032f62]">"credits"</span>, <span className="text-[#032f62]">"technical_specs"</span>]{'\n'}
                  ){'\n\n'}
                  <span className="text-[#d73a49]">print</span>(response.<span className="text-[#6f42c1]">json</span>())
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="space-y-6 mb-12">
          <h2 className="text-h2 border-b border-outline-variant pb-2">Core Endpoints</h2>
          <div className="space-y-4">
            <div className="flex flex-col gap-2 p-6 border border-outline-variant rounded hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-4">
                <span className="px-2 py-0.5 bg-primary-container text-primary font-code text-xs rounded border border-primary/20">GET</span>
                <span className="font-code text-body-md font-bold">/v1/assets/{"{id}"}/show</span>
                <span className="ml-auto flex items-center gap-1 text-[#006970] bg-[#7df4ff]/30 px-2 py-0.5 rounded-full text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 bg-[#006970] rounded-full"></span> 200 OK
                </span>
              </div>
              <p className="text-body-sm text-on-surface-variant">Retrieve primary display information, including high-res poster art and synopsis.</p>
            </div>
            <div className="flex flex-col gap-2 p-6 border border-outline-variant rounded hover:bg-surface-container-lowest transition-colors">
              <div className="flex items-center gap-4">
                <span className="px-2 py-0.5 bg-primary-container text-primary font-code text-xs rounded border border-primary/20">GET</span>
                <span className="font-code text-body-md font-bold">/v1/assets/{"{id}"}/credits</span>
              </div>
              <p className="text-body-sm text-on-surface-variant">Access granular cast and crew data with verified role mapping and agent IDs.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="bg-primary/5 border border-primary/20 rounded-xl overflow-hidden p-8 relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-9xl">info</span>
            </div>
            <h3 className="text-h3 mb-2 font-semibold">Need deep media analysis?</h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              Explore our advanced /safety and /bitrate endpoints to get deep-frame analysis and compliance metadata for broadcast standards.
            </p>
            <button className="bg-primary text-on-primary px-6 py-2 rounded font-bold hover:brightness-110 active:scale-95 transition-all shadow-sm">
              Upgrade to Enterprise
            </button>
          </div>
        </section>
      </article>

      {/* Right TOC Sidebar */}
      <aside className="hidden xl:block w-64 shrink-0 border-l border-outline-variant px-6 py-10 sticky top-20 h-[calc(100vh-80px)] bg-surface-container-lowest">
        <h3 className="text-label text-outline uppercase mb-4 font-semibold">On this page</h3>
        <ul className="space-y-1 text-body-sm">
          <li><a className="block text-primary font-bold py-1 border-l-2 border-primary pl-3 -ml-[2px]" href="#">Introduction</a></li>
          <li><a className="block text-on-surface-variant hover:text-on-surface py-1 pl-3 border-l-2 border-transparent transition-colors" href="#">Installation</a></li>
          <li><a className="block text-on-surface-variant hover:text-on-surface py-1 pl-3 border-l-2 border-transparent transition-colors" href="#">Client SDKs</a></li>
          <li><a className="block text-on-surface-variant hover:text-on-surface py-1 pl-3 border-l-2 border-transparent transition-colors" href="#">Core Endpoints</a></li>
          <li><a className="block text-on-surface-variant hover:text-on-surface py-1 pl-3 border-l-2 border-transparent transition-colors" href="#">Next Steps</a></li>
        </ul>
        
        <div className="mt-12 p-6 border border-outline-variant rounded bg-surface-container-low">
          <h4 className="text-[10px] text-outline uppercase mb-2 font-bold tracking-wider">API Health</h4>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-body-sm font-bold">All Systems Operational</span>
          </div>
          <div className="w-full bg-outline-variant/30 h-1 rounded overflow-hidden">
            <div className="bg-primary w-[99.8%] h-full"></div>
          </div>
          <span className="text-[10px] text-outline mt-1 block">99.98% Uptime Last 30 Days</span>
        </div>
      </aside>
    </div>
  );
};

export default DocsPage;
