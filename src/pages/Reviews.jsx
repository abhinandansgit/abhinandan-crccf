/**
 * Reviews.jsx
 * This page allows users to provide feedback and reviews for CRCCF.
 * It includes an interactive star rating component and a professional submission modal.
 */

import { useState, useEffect } from 'react';
import { Star, X, Send, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';

/**
 * StarRating Component
 * An interactive star picker for selecting a rating value.
 * 
 * @param {Object} props
 * @param {number} props.value - The current rating value.
 * @param {Function} props.onChange - Callback triggered when a star is clicked.
 * @param {number} [props.size=28] - The size of the stars.
 */
function StarRating({ value, onChange, size = 28 }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="bg-transparent border-none p-1 cursor-pointer transition-transform duration-200 hover:scale-125"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <Star
            size={size}
            style={{
              fill: star <= (hovered || value) ? '#F59E0B' : 'transparent',
              stroke: star <= (hovered || value) ? '#F59E0B' : '#94a3b8',
              transition: 'all 0.2s ease',
            }}
          />
        </button>
      ))}
    </div>
  );
}

/**
 * ReviewModal Component
 * A modal dialog for submitting a user review.
 * Includes validation and a success state.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is currently visible.
 * @param {Function} props.onClose - Callback to close the modal.
 */
function ReviewModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset form state after modal close animation
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setRating(0); setName(''); setRole(''); setText('');
        setSubmitted(false); setErrors({});
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  /**
   * Validates the form fields.
   * @returns {boolean} True if the form is valid.
   */
  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Name is required';
    if (rating === 0) e.rating = 'Please select a rating';
    if (!text.trim() || text.trim().length < 10) e.text = 'Review must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /**
   * Handles the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (!isOpen && !submitted) return null;

  return (
    <div
      className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-1000 p-4 transition-all duration-400 ease-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`bg-white w-full max-w-110 max-h-[95vh] overflow-y-auto rounded-2xl sm:rounded-3xl relative border border-white p-5 sm:p-7 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-5'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Write a Review"
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 to-blue-400"></div>

        <button className="absolute top-2 right-2 bg-slate-50 border border-slate-100 text-slate-500 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:bg-blue-100 hover:text-blue-600 hover:rotate-90" onClick={onClose} aria-label="Close">
          <X size={16} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-4 text-center">
              <div className="text-blue-600 mb-2 flex justify-center">
                <MessageSquarePlus size={28} />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Share Your Experience</h2>
              <p className="text-slate-500 text-xs sm:text-sm">Your feedback helps us improve.</p>
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Your Rating <span className="text-red-500">*</span></label>
                <StarRating value={rating} onChange={setRating} size={24} />
                {errors.rating && <p className="text-[10px] text-red-500 mt-0.5">{errors.rating}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700" htmlFor="rv-name">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="rv-name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_3px_#dbeafe] ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-0.5">{errors.name}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700" htmlFor="rv-role">Role / Organization (Optional)</label>
                <input
                  type="text"
                  id="rv-role"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  placeholder="e.g. CEO, Tech Corp"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_3px_#dbeafe]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700" htmlFor="rv-text">Your Review <span className="text-red-500">*</span></label>
                <textarea
                  id="rv-text"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Tell us what you think..."
                  rows={2}
                  className={`w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 text-sm transition-all focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-[0_0_0_3px_#dbeafe] resize-none ${errors.text ? 'border-red-500' : ''}`}
                />
                <div className="flex justify-between items-center mt-0.5">
                  {errors.text ? <p className="text-[10px] text-red-500">{errors.text}</p> : <span></span>}
                  <p className="text-[10px] text-slate-500">{text.length} characters</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-linear-to-r from-blue-600 to-blue-500 text-white p-3 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer transition-all mt-2 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
                <Send size={16} />
                Submit Feedback
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-green-500 mb-4 flex justify-center">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">Your feedback has been successfully submitted.</p>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-6 rounded-xl transition-colors text-sm" onClick={onClose}>Close Window</button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Reviews Page Component
 * Renders the main view for community feedback and review submission.
 */
export default function Reviews() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans flex flex-col relative overflow-hidden p-4 sm:p-6">
      {/* Background Decorations - Subtle grid and glowing orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#CBD5E1_1px,transparent_1px)] bg-size-[24px_24px] opacity-15 pointer-events-none z-0" />
      <div className="absolute w-125 h-125 bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] rounded-full blur-[50px] z-0 pointer-events-none top-[-10%] right-[-5%] animate-[pulse-glow_8s_ease-in-out_infinite_alternate]" />
      <div className="absolute w-125 h-125 bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] rounded-full blur-[50px] z-0 pointer-events-none bottom-[-10%] left-[-5%] animate-[pulse-glow_8s_ease-in-out_infinite_alternate]" style={{ animationDelay: '-4s' }} />

      <Navbar />

      {/* Main Review Section - Call to action for community feedback */}
      <section className="flex-1 flex flex-col items-center justify-center text-center z-10 max-w-145 mx-auto w-full bg-white/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 rounded-4xl sm:rounded-[40px] p-8 sm:p-12 md:p-16 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_20px_40px_-10px_rgba(0,0,0,0.08),inset_0_0_20px_rgba(255,255,255,0.5)] animate-fade-in-up mt-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
          <Star size={14} fill="currentColor" />
          Community Feedback
        </div>
        
        <h2 className="text-[clamp(1.75rem,8vw,2.25rem)] md:text-[clamp(2rem,6vw,3rem)] font-black mb-4 sm:mb-6 bg-linear-to-br from-slate-900 to-blue-600 bg-clip-text text-transparent tracking-tight leading-tight">Your Experience <br /> Defines Our Success</h2>
        
        <p className="text-base sm:text-lg text-slate-500 mb-8 sm:mb-10 max-w-100 leading-relaxed">
          Help others make informed decisions and help us improve our security standards with your honest review.
        </p>

        <button
          id="open-review-modal"
          className="bg-linear-to-br from-blue-600 to-blue-700 text-white py-3 px-8 sm:py-4 sm:px-10 rounded-2xl font-bold text-base sm:text-lg flex items-center gap-3 transition-all duration-300 border-none shadow-[0_12px_24px_-6px_rgba(37,99,235,0.4)] cursor-pointer relative z-10 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_20px_30px_-10px_rgba(37,99,235,0.5)] group overflow-hidden"
          onClick={() => setModalOpen(true)}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-[-1] rounded-2xl"></div>
          Write a Review
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </section>

      {/* Review Submission Modal */}
      <ReviewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}


