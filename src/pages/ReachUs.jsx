import { useState } from 'react';
import { Shield, Lock, Server, Cpu, Globe2, MapPin } from 'lucide-react';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, 
  FaGlobe, FaTelegramPlane, FaWhatsapp, FaPhone, FaEnvelope 
} from 'react-icons/fa';
import Navbar from '../components/Navbar';

export default function ReachUs() {

  // ================= VALIDATION STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // ================= HANDLERS =================
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    setErrors(prev => ({
      ...prev,
      [id]: ""
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);

    // optional reset
    setFormData({ name: "", email: "", message: "" });
  };

  // ================= ORIGINAL CODE CONTINUES =================

  const socialButtons = [
    { icon: <FaFacebookF />, label: 'Facebook', link: '#', color: 'hover:text-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.8)]' },
    { icon: <FaTwitter />, label: 'Twitter', link: '#', color: 'hover:text-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.8)]' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', link: '#', color: 'hover:text-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.8)]' },
    { icon: <FaInstagram />, label: 'Instagram', link: '#', color: 'hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)]' },
    { icon: <FaYoutube />, label: 'YouTube', link: '#', color: 'hover:text-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.8)]' },
    { icon: <FaGlobe />, label: 'Website', link: '#', color: 'hover:text-teal-500 hover:shadow-[0_0_15px_rgba(20,184,166,0.8)]' },
    { icon: <FaTelegramPlane />, label: 'Telegram', link: '#', color: 'hover:text-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.8)]' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', link: '#', color: 'hover:text-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.8)]' },
    { icon: <FaPhone />, label: 'Phone', link: '#', color: 'hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]' },
    { icon: <FaEnvelope />, label: 'Email', link: '#', color: 'hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.8)]' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-bg-main">

      {/* BACKGROUND */}
      <div className="absolute top-40 left-20 text-primary/10 animate-float-slow"><Shield size={120} /></div>
      <div className="absolute bottom-20 right-20 text-primary/10 animate-float-slow" style={{ animationDelay: '2s' }}><Lock size={150} /></div>
      <div className="absolute top-1/3 right-1/3 text-primary/10 animate-float-slow" style={{ animationDelay: '4s' }}><Server size={80} /></div>
      <div className="absolute top-24 right-6 text-primary/10 animate-float-slow" style={{ animationDelay: '1s' }}><Cpu size={90} /></div>
      <div className="absolute bottom-32 right-1/4 text-primary/10 animate-float-slow" style={{ animationDelay: '3s' }}><Globe2 size={110} /></div>

      <div className="absolute top-32 right-10 w-64 h-64 bg-dots-pattern opacity-60 pointer-events-none animate-float"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-dots-pattern opacity-60 pointer-events-none animate-float"></div>

      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <Navbar />

      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 flex flex-col justify-center overflow-hidden">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start h-full mt-4">
          
          {/* LEFT */}
          <div className="flex-1 w-full max-w-xl text-left">

            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#0F172A] to-primary mb-4 sm:mb-6 uppercase tracking-tight leading-tight">
              CONNECT <br/>WITH US
            </h1>

            <p className="animate-fade-in-up delay-100 text-text-body text-base sm:text-lg mb-8 sm:mb-10 max-w-md">
              We're here to help. Reach out to CRCCF on any of our official platforms to stay informed, get support, or join our global mission to protect the digital world.
            </p>

            <div className="animate-fade-in-up delay-200 bg-white/40 backdrop-blur-xl border border-white/60 p-10 sm:p-12 min-h-55 sm:min-h-65 rounded-3xl sm:rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group mb-8 flex items-center">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
              <div className="flex flex-wrap gap-5 sm:gap-6 justify-start relative z-10">
                {socialButtons.map((btn, idx) => (
                  <a key={idx} href={btn.link} title={btn.label}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-text-heading flex items-center justify-center text-2xl sm:text-3xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 ${btn.color}`}>
                    {btn.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT FORM WITH VALIDATION */}
          <div className="animate-fade-in-up delay-400 w-full lg:w-115 xl:w-130 shrink-0">
            
            <div className="bg-bg-card rounded-4xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] p-6 sm:p-8 border border-white/50 backdrop-blur-xs relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-text-heading mb-6">Drop a Message</h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 relative z-10">

                {/* NAME */}
                <div className="relative group">
                  <input id="name" value={formData.name} onChange={handleChange}
                    className={`peer w-full px-4 pt-5 pb-2 bg-bg-main/50 rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200/60"} focus:ring-2 focus:ring-primary/40`}
                    placeholder="Jane Doe"/>
                  <label htmlFor="name" className="absolute left-4 top-1.5 text-[10px] uppercase font-bold">Name</label>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div className="relative group">
                  <input id="email" value={formData.email} onChange={handleChange}
                    className={`peer w-full px-4 pt-5 pb-2 bg-bg-main/50 rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200/60"} focus:ring-2 focus:ring-primary/40`}
                    placeholder="jane@example.com"/>
                  <label htmlFor="email" className="absolute left-4 top-1.5 text-[10px] uppercase font-bold">Email</label>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* MESSAGE */}
                <div className="relative group">
                  <textarea id="message" rows={4} value={formData.message} onChange={handleChange}
                    className={`peer w-full px-4 pt-6 pb-2 bg-bg-main/50 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-200/60"} focus:ring-2 focus:ring-primary/40`}
                    placeholder="Message"/>
                  <label htmlFor="message" className="absolute left-4 top-2 text-[10px] uppercase font-bold">Message</label>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button className="w-full py-4 mt-2 rounded-xl bg-gradient-primary text-white font-bold">
                  SEND MESSAGE
                </button>

              </form>

              <div className="mt-8 rounded-2xl overflow-hidden h-40">
                <iframe src="https://www.google.com/maps?q=20.349042,85.805161&z=15&output=embed"
                  className="w-full h-full border-0" loading="lazy"></iframe>
              </div>

            </div>
          </div>

        </div>

         {/* Global Branch Locations Section */}
        <div className="mt-16 sm:mt-24 w-full animate-fade-in-up delay-500">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-heading tracking-tight">Our Office Branches</h3>
            <div className="h-1 flex-1 bg-linear-to-r from-gray-200 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {/* Office Branch Card - New York */}
            <div className="bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-2xl p-5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[80px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={20} />
              </div>
              <h4 className="text-lg font-bold text-text-heading mb-1.5">New York, USA</h4>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                123 Cyber Avenue, Tech District<br />
                NY 10001, United States
              </p>
              <div className="flex items-center gap-2.5 text-xs font-bold text-text-secondary bg-gray-50 rounded-md p-2.5 group-hover:bg-blue-50/50 transition-colors">
                <FaPhone className="text-primary/70" /> +1 (555) 123-4567
              </div>
            </div>

            {/* Office Branch Card - London */}
            <div className="bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-2xl p-5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[80px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={20} />
              </div>
              <h4 className="text-lg font-bold text-text-heading mb-1.5">London, UK</h4>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                45 Security Square, Canary Wharf<br />
                E14 5AB, United Kingdom
              </p>
              <div className="flex items-center gap-2.5 text-xs font-bold text-text-secondary bg-gray-50 rounded-md p-2.5 group-hover:bg-blue-50/50 transition-colors">
                <FaPhone className="text-primary/70" /> +44 20 7123 4567
              </div>
            </div>

            {/* Office Branch Card - Singapore */}
            <div className="bg-white/60 backdrop-blur-md border border-gray-200/60 rounded-2xl p-5 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[80px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <MapPin size={20} />
              </div>
              <h4 className="text-lg font-bold text-text-heading mb-1.5">Singapore</h4>
              <p className="text-sm text-text-body mb-4 leading-relaxed">
                88 Innovation Drive, Marina Bay<br />
                018956, Singapore
              </p>
              <div className="flex items-center gap-2.5 text-xs font-bold text-text-secondary bg-gray-50 rounded-md p-2.5 group-hover:bg-blue-50/50 transition-colors">
                <FaPhone className="text-primary/70" /> +65 6789 0123
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
