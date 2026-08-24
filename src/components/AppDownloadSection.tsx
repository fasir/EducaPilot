import React from 'react';
import { Apple, ArrowUpRight, Download, Smartphone } from 'lucide-react';

export const AppDownloadSection: React.FC = () => (
  <section className="app-download">
    <div className="app-download__inner mx-auto max-w-7xl px-5 sm:px-8">
      <div className="app-download__copy">
        <span className="app-download__eyebrow"><Smartphone className="h-4 w-4" /> EducaPilot on the go</span>
        <h2>Keep learning close.</h2>
        <p>Lessons, live classes, assignments, and progress updates wherever your day takes you.</p>
        <div className="app-download__stores">
          <a href="https://play.google.com/" target="_blank" rel="noreferrer" className="app-store-badge" aria-label="Download EducaPilot from Google Play">
            <Download className="h-5 w-5" />
            <span><small>GET IT ON</small><strong>Google Play</strong></span>
            <ArrowUpRight className="app-store-badge__arrow h-4 w-4" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="app-store-badge" aria-label="Download EducaPilot from the App Store">
            <Apple className="h-5 w-5" />
            <span><small>DOWNLOAD ON THE</small><strong>App Store</strong></span>
            <ArrowUpRight className="app-store-badge__arrow h-4 w-4" />
          </a>
        </div>
        <div className="app-download__meta"><span>Free to download</span><i /> <span>iOS &amp; Android</span><i /> <span>Built for families</span></div>
      </div>
      <div className="app-download__visual">
        <div className="app-download__halo" aria-hidden="true" />
        <div className="app-phone" aria-label="EducaPilot mobile app preview">
          <div className="app-phone__notch" />
          <div className="app-phone__top"><span>9:41</span><span>● ●</span></div>
          <div className="app-phone__greeting"><small>Good morning, Ananya</small><strong>Ready to grow?</strong></div>
          <div className="app-phone__progress"><span>Weekly progress</span><strong>82%</strong><div><i /></div></div>
          <div className="app-phone__lesson"><div className="app-phone__lesson-image"><img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&auto=format&fit=crop&q=85" alt="Open learning book" referrerPolicy="no-referrer" /></div><span>Continue learning<strong>Biology: Cell structure</strong></span></div>
          <div className="app-phone__nav"><span className="is-active">⌂<small>Home</small></span><span>▣<small>Classes</small></span><span>◌<small>Progress</small></span><span>◎<small>Profile</small></span></div>
        </div>
        <span className="app-download__sticker">Learn anywhere<br /><strong>your way.</strong></span>
      </div>
    </div>
  </section>
);