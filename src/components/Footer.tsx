import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto px-margin py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-h3 font-bold text-on-surface">CineInsights</span>
            <p className="text-body-sm text-on-surface-variant max-w-[280px]">
              The content intelligence platform for AdTech. Brand safety, contextual taxonomy, and audience-ready metadata at scale.
            </p>
            <p className="text-[10px] text-outline mt-4 font-bold uppercase tracking-wider">
              © 2024 CINEINSIGHTS MEDIA INTELLIGENCE.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-label text-primary font-bold uppercase">Resources</span>
            <ul className="flex flex-col gap-3">
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Documentation</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Changelog</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">API Status</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-label text-primary font-bold uppercase">Community</span>
            <ul className="flex flex-col gap-3">
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">GitHub</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Discord Server</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Stack Overflow</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-label text-primary font-bold uppercase">Legal</span>
            <ul className="flex flex-col gap-3">
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Security</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Privacy</a></li>
              <li><a className="text-body-sm text-on-surface-variant hover:text-primary transition-colors underline decoration-primary/20" href="#">Service Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
