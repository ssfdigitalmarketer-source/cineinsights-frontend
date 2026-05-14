import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 border-b border-outline-variant bg-white/80 backdrop-blur-md">
      <div className="flex justify-between items-center w-full px-margin h-20 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-h3 font-bold tracking-tight text-on-surface">CineInsights</Link>
          <div className="hidden lg:flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded border border-outline-variant">
            <span className="material-symbols-outlined text-outline text-sm">terminal</span>
            <span className="font-code text-xs text-on-surface-variant font-medium">Developer Portal</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-on-surface-variant font-medium hover:text-on-surface transition-colors text-body-sm" href="/features">Features</Link>
          <Link className="text-on-surface-variant font-medium hover:text-on-surface transition-colors text-body-sm" href="/pricing">Pricing</Link>
          <Link className="text-on-surface-variant font-medium hover:text-on-surface transition-colors text-body-sm" href="/use-cases">Use Cases</Link>
          <Link className="text-on-surface-variant font-medium hover:text-on-surface transition-colors text-body-sm" href="/docs">Docs</Link>
        </nav>
        <div className="flex items-center">
          <button className="bg-on-surface text-white text-label uppercase py-2.5 px-6 rounded-lg font-bold hover:bg-on-surface/90 transition-colors">Portal</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
