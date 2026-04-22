import { useState, useEffect, useRef } from 'react';
import { Star, X, Send, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import './Reviews.css';

function StarRating({ value, onChange, size = 28 }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="rv-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="rv-star-btn"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <Star
            size={size}
            className="rv-star"
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

function ReviewModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setRating(0); setName(''); setRole(''); setText('');
        setSubmitted(false); setErrors({});
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Name is required';
    if (rating === 0) e.rating = 'Please select a rating';
    if (!text.trim() || text.trim().length < 10) e.text = 'Review must be at least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="rv-modal-overlay rv-modal-overlay--active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="rv-modal rv-modal--active"
        role="dialog"
        aria-modal="true"
        aria-label="Write a Review"
      >
        <div className="rv-modal__bar"></div>

        <button className="rv-modal__close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        {!submitted ? (
          <>
            <div className="rv-modal__header">
              <div className="rv-modal__header-icon">
                <MessageSquarePlus size={32} />
              </div>
              <h2 className="rv-modal__title">Share Your Experience</h2>
              <p className="rv-modal__subtitle">Your feedback helps us provide better service.</p>
            </div>

            <form className="rv-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="rv-form-group">
                <label className="rv-label">Your Rating <span className="rv-required">*</span></label>
                <StarRating value={rating} onChange={setRating} />
                {errors.rating && <p className="rv-error">{errors.rating}</p>}
              </div>

              <div className="rv-form-group">
                <label className="rv-label" htmlFor="rv-name">Full Name <span className="rv-required">*</span></label>
                <input
                  type="text"
                  id="rv-name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className={`rv-input ${errors.name ? 'rv-input--error' : ''}`}
                />
                {errors.name && <p className="rv-error">{errors.name}</p>}
              </div>

              <div className="rv-form-group">
                <label className="rv-label" htmlFor="rv-role">Role / Organization (Optional)</label>
                <input
                  type="text"
                  id="rv-role"
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  placeholder="e.g. CEO, Tech Corp"
                  className="rv-input"
                />
              </div>

              <div className="rv-form-group">
                <label className="rv-label" htmlFor="rv-text">Your Review <span className="rv-required">*</span></label>
                <textarea
                  id="rv-text"
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Tell us what you think..."
                  rows={4}
                  className={`rv-input ${errors.text ? 'rv-input--error' : ''}`}
                />
                <p className="rv-char-count">{text.length} characters</p>
                {errors.text && <p className="rv-error">{errors.text}</p>}
              </div>

              <button type="submit" className="rv-submit-btn">
                <Send size={18} />
                Submit Feedback
              </button>
            </form>
          </>
        ) : (
          <div className="rv-success">
            <div className="rv-success__icon">
              <CheckCircle2 size={56} />
            </div>
            <h2 className="rv-success__title">Thank You!</h2>
            <p className="rv-success__text">Your feedback has been successfully submitted. We appreciate your time and support.</p>
            <button className="rv-success__btn" onClick={onClose}>Close Window</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Reviews() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="rv-page">
      {/* Background Decorations */}
      <div className="rv-bg-pattern" />
      <div className="rv-bg-orb rv-bg-orb--1" />
      <div className="rv-bg-orb rv-bg-orb--2" />

      <Navbar />

      <section className="rv-simple">
        <div className="rv-badge">
          <Star size={14} fill="currentColor" />
          Community Feedback
        </div>
        
        <h2 className="rv-title">Your Experience <br /> Defines Our Success</h2>
        
        <p className="rv-subtitle">
          Help others make informed decisions and help us improve our security standards with your honest review.
        </p>

        <button
          id="open-review-modal"
          className="rv-cta-btn"
          onClick={() => setModalOpen(true)}
        >
          Write a Review
          <span className="rv-cta-btn__arrow">→</span>
        </button>
      </section>

      <ReviewModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
