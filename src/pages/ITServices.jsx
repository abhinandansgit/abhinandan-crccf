import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Code2, Smartphone, Building2, Brain, Cloud, ShieldCheck, Search,
  Link2, Cpu, Workflow, Layers, MessageCircle, Fingerprint,
  ClipboardList, KeyRound, Bug, GitBranch, Palette, Wrench, Factory,
  X, CheckCircle2, ArrowRight, Sparkles, Shield, Lock, Server
} from 'lucide-react';
import Navbar from '../components/Navbar';
import SecurityTicker from '../components/SecurityTicker';
import { services, categories } from '../data/servicesData';
import './ITServices.css';

const iconMap = {
  Code2, Smartphone, Building2, Brain, Cloud, ShieldCheck, Search,
  Link2, Cpu, Workflow, Layers, MessageCircle, Fingerprint,
  ClipboardList, KeyRound, Bug, GitBranch, Palette, Wrench, Factory
};

function ServiceCard({ service, index, onLearnMore }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const IconComp = iconMap[service.icon] || Code2;

  return (
    <div
      ref={ref}
      className={`its-card ${visible ? 'its-card--visible' : ''}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms`, '--accent': service.accent }}
    >
      <div className="its-card__accent" />
      <div className="its-card__icon" style={{ background: `${service.accent}15`, color: service.accent }}>
        <IconComp size={26} />
      </div>
      <h3 className="its-card__title">{service.title}</h3>
      <p className="its-card__desc">{service.shortDesc}</p>
      <button className="its-card__link" onClick={() => onLearnMore(service)} style={{ color: service.accent }}>
        Learn More <ArrowRight size={16} />
      </button>
      <div className="its-card__glow" style={{ background: service.accent }} />
    </div>
  );
}

function ServiceModal({ service, onClose }) {
  const [show, setShow] = useState(false);
  const IconComp = iconMap[service.icon] || Code2;

  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey); };
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(onClose, 350);
  }, [onClose]);

  return (
    <div className={`its-modal-overlay ${show ? 'its-modal-overlay--active' : ''}`} onClick={handleClose}>
      <div className={`its-modal ${show ? 'its-modal--active' : ''}`} onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="its-modal__header" style={{ background: `linear-gradient(135deg, ${service.accent}, ${service.accent}CC)` }}>
          <div className="its-modal__header-pattern" />
          <button className="its-modal__close" onClick={handleClose}><X size={20} /></button>
          <div className="its-modal__header-icon">
            <IconComp size={40} />
          </div>
          <h2 className="its-modal__header-title">{service.title}</h2>
          <p className="its-modal__header-badge">{service.shortDesc}</p>
        </div>

        {/* Modal Content */}
        <div className="its-modal__body">
          {service.detail.paragraphs.map((p, i) => (
            <p key={i} className="its-modal__paragraph">{p}</p>
          ))}

          <div className="its-modal__offerings">
            <h4 className="its-modal__offerings-title">
              <Sparkles size={18} style={{ color: service.accent }} /> Key Offerings
            </h4>
            <ul className="its-modal__offerings-list">
              {service.detail.keyOfferings.map((item, i) => (
                <li key={i} className="its-modal__offering-item" style={{ animationDelay: `${400 + i * 100}ms` }}>
                  <CheckCircle2 size={18} style={{ color: service.accent, flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ITServices() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-bg-main relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute top-60 left-10 text-primary/10 animate-float-slow"><Shield size={100} /></div>
      <div className="absolute bottom-40 right-16 text-primary/10 animate-float-slow" style={{ animationDelay: '3s' }}><Lock size={120} /></div>
      <div className="absolute top-1/2 left-1/2 text-primary/5 animate-float-slow" style={{ animationDelay: '5s' }}><Server size={80} /></div>
      <div className="absolute top-32 right-10 w-64 h-64 bg-dots-pattern opacity-40 pointer-events-none animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-dots-pattern opacity-40 pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Navbar />
      {/*<SecurityTicker />*/}

      {/* Hero Section */}
      <section ref={heroRef} className="its-hero relative z-10">
        <div className="its-hero__bg" />
        <div className={`its-hero__content ${heroVisible ? 'its-hero__content--visible' : ''}`}>
          <div className="its-hero__badge">
            <Sparkles size={14} /> Professional IT Solutions
          </div>
          <h1 className="its-hero__title">
            Our Software <span className="its-hero__title-accent">Services</span>
          </h1>
          <p className="its-hero__subtitle">
            Empowering businesses with cutting-edge technology solutions across 
            <strong className="text-primary"> 20+ specialized domains</strong>
          </p>
          <div className="its-hero__stats">
            <div className="its-hero__stat">
              <span className="its-hero__stat-number">20+</span>
              <span className="its-hero__stat-label">Services</span>
            </div>
            <div className="its-hero__stat-divider" />
            <div className="its-hero__stat">
              <span className="its-hero__stat-number">100%</span>
              <span className="its-hero__stat-label">Custom Built</span>
            </div>
            <div className="its-hero__stat-divider" />
            <div className="its-hero__stat">
              <span className="its-hero__stat-number">24/7</span>
              <span className="its-hero__stat-label">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="its-filter relative z-10">
        <div className="its-filter__track">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`its-filter__btn ${activeCategory === cat.id ? 'its-filter__btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {activeCategory === cat.id && <span className="its-filter__count">{cat.id === 'all' ? services.length : services.filter(s => s.category === cat.id).length}</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="its-grid relative z-10">
        <div className="its-grid__container">
          {filtered.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} onLearnMore={setSelectedService} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-text-secondary py-16 text-lg">No services found in this category.</p>
        )}
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
}
