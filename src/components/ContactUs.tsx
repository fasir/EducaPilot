import React, { FormEvent, useState } from 'react';
import { ArrowRight, Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactUs: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__grid" aria-hidden="true" />
        <div className="contact-hero__inner mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <span className="contact-eyebrow"><MessageCircle className="h-4 w-4" /> Contact EducaPilot</span>
            <h1>Let’s make the next school day <span>better.</span></h1>
            <p>Have a question, a big idea, or a campus ready for a smarter rhythm? Our team is here to listen.</p>
          </motion.div>
          <div className="contact-hero__marker"><span>01</span><strong>Start a conversation</strong><small>We usually reply within one business day.</small></div>
        </div>
      </section>

      <section className="contact-main mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="contact-form-wrap">
          <div className="contact-form-wrap__heading"><span className="contact-eyebrow">Tell us what’s on your mind</span><h2>We’ll take it from here.</h2></div>
          {submitted ? (
            <div className="contact-success"><strong>Thanks for reaching out.</strong><p>Your message is with our team. We’ll be in touch shortly.</p><button type="button" onClick={() => setSubmitted(false)}>Send another message <ArrowRight className="h-4 w-4" /></button></div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label><span>Your name</span><input required name="name" placeholder="Priya Mehta" /></label>
              <label><span>Work email</span><input required type="email" name="email" placeholder="priya@school.edu" /></label>
              <label><span>How can we help?</span><select name="topic" defaultValue=""><option value="" disabled>Select a topic</option><option>Book a campus demo</option><option>Product question</option><option>Partnership enquiry</option><option>Support</option></select></label>
              <label><span>Your message</span><textarea required name="message" rows={4} placeholder="Tell us a little about your school or idea..." /></label>
              <button type="submit" className="contact-submit">Send message <ArrowRight className="h-4 w-4" /></button>
            </form>
          )}
        </div>

        <aside className="contact-details">
          <div className="contact-details__card"><span className="contact-eyebrow">Reach the team</span><h2>Good conversations start here.</h2><div className="contact-detail"><Mail /><span><small>Email us</small><strong>hello@educapilot.com</strong></span></div><div className="contact-detail"><Phone /><span><small>Call our advisory desk</small><strong>+91 (800) 420-EDUCA</strong></span></div><div className="contact-detail"><Clock3 /><span><small>Office hours</small><strong>Mon–Fri, 9:00 AM–6:00 PM IST</strong></span></div></div>
          <div className="contact-social"><span>Follow along</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="EducaPilot on LinkedIn"><Linkedin /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="EducaPilot on Instagram"><Instagram /></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="EducaPilot on Facebook"><Facebook /></a></div></div>
        </aside>
      </section>

      <section className="contact-location px-5 pb-20 sm:px-8 lg:pb-28"><div className="mx-auto max-w-7xl"><div className="contact-location__heading"><div><span className="contact-eyebrow"><MapPin className="h-4 w-4" /> Come say hello</span><h2>Find us in Bengaluru.</h2></div><p>Our global team works across Bengaluru and Singapore, building a more connected future for education.</p></div><div className="contact-map"><iframe title="EducaPilot Bengaluru office location" src="https://www.google.com/maps?q=Bengaluru%2C%20India&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="contact-map__label"><MapPin className="h-4 w-4" /><span><strong>EducaPilot HQ</strong><small>Bengaluru, Karnataka, India</small></span></div></div></div></section>
    </main>
  );
};