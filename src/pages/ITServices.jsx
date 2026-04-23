/**
 * ITServices.jsx
 * This page displays the comprehensive list of IT services offered by CRCCF.
 * It includes category filtering, service cards with intersection observer animations,
 * and a detailed modal view for each service.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Code2, Smartphone, Building2, Brain, Cloud, ShieldCheck, Search,
  Link2, Cpu, Workflow, Layers, MessageCircle, Fingerprint,
  ClipboardList, KeyRound, Bug, GitBranch, Palette, Wrench, Factory,
  X, CheckCircle2, ArrowRight, Sparkles, Shield, Lock, Server
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { services, categories } from '../data/servicesData';

/**
 * Maps icon names from servicesData to Lucide React components.
 */
const iconMap = {
  Code2, Smartphone, Building2, Brain, Cloud, ShieldCheck, Search,
  Link2, Cpu, Workflow, Layers, MessageCircle, Fingerprint,
  ClipboardList, KeyRound, Bug, GitBranch, Palette, Wrench, Factory
};

/**
 * ServiceCard Component
 * Displays a summary of a service in a card format with entrance animations.
 * 
 * @param {Object} props
 * @param {Object} props.service - The service data object.
 * @param {number} props.index - The index of the card (used for animation delay).
 * @param {Function} props.onLearnMore - Callback triggered when the 'Learn More' button is clicked.
 */
function ServiceCard({ service, index, onLearnMore }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Use Intersection Observer to trigger visibility animation when card enters viewport
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
      onClick={() => onLearnMore(service)}  // ✅ whole card clickable
      className={`relative bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 md:p-7 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-100 group ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-7 scale-95'}`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = service.accent; e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.08), 0 0 0 1px ${service.accent}`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
    >
      <div className="absolute top-0 left-0 w-full h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: service.accent }} />
      <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-3" style={{ background: `${service.accent}15`, color: service.accent }}>
        <IconComp className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <h3 className="text-[1.05rem] font-bold text-slate-900 mb-2 leading-tight">{service.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.shortDesc}</p>
      <button className="inline-flex items-center gap-1.5 text-[0.85rem] font-bold cursor-pointer transition-all duration-300 hover:gap-2.5 bg-transparent border-none p-0" onClick={() => onLearnMore(service)} style={{ color: service.accent }}>
        Learn More <ArrowRight size={16} />
      </button>
      {/* Decorative blurred background blob on hover */}
      <div className="absolute -bottom-10 -right-10 w-30 h-30 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 pointer-events-none group-hover:opacity-15" style={{ background: service.accent }} />
    </div>
  );
}

/**
 * ServiceModal Component
 * Full-screen detailed view of a selected service.
 * 
 * @param {Object} props
 * @param {Object} props.service - The detailed service data object.
 * @param {Function} props.onClose - Callback to close the modal.
 */
function ServiceModal({ service, onClose }) {
  const [show, setShow] = useState(false);
  const IconComp = iconMap[service.icon] || Code2;

  // Trigger entry animation and handle body scroll locking
  useEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey); };
  }, []);

  /**
   * Closes the modal with a delay to allow for exit animations.
   */
  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(onClose, 350);
  }, [onClose]);

  return (
    <div className={`fixed inset-0 z-100 flex items-center justify-center transition-all duration-300 p-4 sm:p-5 ${show ? 'bg-slate-900/55 backdrop-blur-md' : 'bg-slate-900/0'}`} onClick={handleClose}>
      <div className={`relative w-full max-w-180 max-h-[80vh] md:max-h-[90vh] bg-white rounded-2xl md:rounded-3xl overflow-hidden flex flex-col shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header with Service Identity */}
        <div className="relative p-5 sm:p-8 md:p-10 text-white overflow-hidden shrink-0" style={{ background: `linear-gradient(135deg, ${service.accent}, ${service.accent}CC)` }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[24px_24px,32px_32px] pointer-events-none" />
          <button className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-white/20 border border-white/30 text-white cursor-pointer transition-all duration-300 z-10 hover:bg-white/35 hover:rotate-90" onClick={handleClose}>
            <X size={20} />
          </button>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-3 md:mb-4 backdrop-blur-md">
            <IconComp className="w-6 h-6 md:w-10 md:h-10" />
          </div>
          <h2 className="text-xl md:text-[1.6rem] font-extrabold mb-2 tracking-tight">{service.title}</h2>
          <p className="text-sm opacity-85 leading-relaxed">{service.shortDesc}</p>
        </div>

        {/* Modal Content - Scrollable area */}
        <div className="p-5 md:p-8 overflow-y-auto flex-1">
          {service.detail.paragraphs.map((p, i) => (
            <p key={i} className={`text-[0.85rem] md:text-[0.92rem] text-slate-600 leading-relaxed ${i === service.detail.paragraphs.length - 1 ? 'mb-6' : 'mb-3 md:mb-4'}`}>{p}</p>
          ))}

          {/* Key Offerings Section */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 mt-4 md:mt-6">
            <h4 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-4">
              <Sparkles size={18} style={{ color: service.accent }} /> Key Offerings
            </h4>
            <ul className="flex flex-col gap-2.5">
              {service.detail.keyOfferings.map((item, i) => (
                <li key={i} className={`flex items-start gap-2.5 text-[0.8rem] md:text-[0.88rem] text-slate-700 leading-relaxed transition-all duration-500 ease-out ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`} style={{ transitionDelay: `${400 + i * 100}ms` }}>
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

/**
 * ITServices Page Component
 * Renders the main view for exploring various IT services.
 */
export default function ITServices() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  // Trigger hero section entrance animation
  useEffect(() => {
    setHeroVisible(true);
  }, []);

  // Filter services based on selected category
  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden">
      
      {/* Floating Background Icons for visual flair */}
      <div className="absolute top-60 left-10 text-blue-600/10 animate-float-slow"><Shield size={100} /></div>
      <div className="absolute bottom-40 right-16 text-blue-600/10 animate-float-slow" style={{ animationDelay: '3s' }}><Lock size={120} /></div>
      <div className="absolute top-1/2 left-1/2 text-blue-600/5 animate-float-slow" style={{ animationDelay: '5s' }}><Server size={80} /></div>
      <div className="absolute top-32 right-10 w-64 h-64 bg-dots-pattern opacity-40 pointer-events-none animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-dots-pattern opacity-40 pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-100 h-100 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <Navbar />

      {/* Hero Section - Introduces the services page */}
      <section ref={heroRef} className="relative pt-8 md:pt-16 px-6 pb-12 text-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(37,99,235,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-1.5 py-1.5 px-4 bg-linear-to-br from-blue-600/10 to-blue-500/5 border border-blue-600/20 rounded-full text-[0.8rem] font-semibold text-blue-600 mb-6 tracking-wide">
            <Sparkles size={14} /> Professional IT Solutions
          </div>
          <h1 className="text-[clamp(2rem,6vw,3.8rem)] font-extrabold text-slate-900 leading-tight mb-5 tracking-tight">
            Our Software <span className="bg-linear-to-br from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-[clamp(0.95rem,2vw,1.15rem)] text-slate-600 max-w-150 mx-auto mb-8 leading-relaxed">
            Empowering businesses with cutting-edge technology solutions across 
            <strong className="text-blue-600 font-bold"> 20+ specialized domains</strong>
          </p>
          {/* Service Statistics Grid */}
          <div className="flex items-center gap-4 sm:gap-12 py-3 sm:py-5 px-6 sm:px-12 bg-white/70 backdrop-blur-xl border border-white/80 rounded-xl sm:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex-wrap justify-center sm:justify-around max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight">20+</span>
              <span className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-slate-500 uppercase tracking-widest">Services</span>
            </div>
            <div className="w-px h-9 bg-linear-to-b from-transparent via-slate-300 to-transparent hidden sm:block" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight">100%</span>
              <span className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-slate-500 uppercase tracking-widest">Custom Built</span>
            </div>
            <div className="w-px h-9 bg-linear-to-b from-transparent via-slate-300 to-transparent hidden sm:block" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight">24/7</span>
              <span className="text-[0.6rem] sm:text-[0.7rem] font-semibold text-slate-500 uppercase tracking-widest">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="px-0 sm:px-6 pb-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="flex gap-2 overflow-x-auto p-1 sm:p-2 scrollbar-none justify-start sm:justify-center flex-nowrap sm:flex-wrap px-4 sm:px-0">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`inline-flex items-center gap-1.5 py-2 px-4 border rounded-full text-[0.82rem] font-semibold whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md ${activeCategory === cat.id ? 'bg-linear-to-br from-blue-600 to-blue-700 text-white border-transparent shadow-[0_4px_15px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)]' : 'border-slate-200 text-slate-600 bg-white/80 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-600/5 hover:-translate-y-px'}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              {activeCategory === cat.id && <span className="inline-flex items-center justify-center min-w-5.5 h-5.5 px-1.5 rounded-full bg-white/25 text-[0.7rem] font-bold">{cat.id === 'all' ? services.length : services.filter(s => s.category === cat.id).length}</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-4 sm:px-6 pb-16 max-w-350 xl:max-w-375 mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,minmax(280px,1fr))] xl:grid-cols-[repeat(4,minmax(320px,1fr))] gap-5 md:gap-6">
          {filtered.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} onLearnMore={setSelectedService} />
          ))}
        </div>
        {/* Empty State */}
        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-16 text-lg">No services found in this category.</p>
        )}
      </section>

      {/* Detailed Service Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </div>
  );
}

