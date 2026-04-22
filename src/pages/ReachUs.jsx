import { Shield, Lock, Server, AlertTriangle, PhoneCall, MapPin } from 'lucide-react';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, 
  FaGlobe, FaTelegramPlane, FaWhatsapp, FaPhone, FaEnvelope 
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import SecurityTicker from '../components/SecurityTicker';

export default function ReachUs() {
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
      
      {/* Background Cyber Particles */}
      <div className="absolute top-40 left-20 text-primary/10 animate-float-slow">
        <Shield size={120} />
      </div>
      <div className="absolute bottom-20 right-20 text-primary/10 animate-float-slow" style={{ animationDelay: '2s' }}>
        <Lock size={150} />
      </div>
      <div className="absolute top-1/3 right-1/3 text-primary/10 animate-float-slow" style={{ animationDelay: '4s' }}>
        <Server size={80} />
      </div>

      {/* Decorative Dots Pattern */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-dots-pattern opacity-60 pointer-events-none animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-dots-pattern opacity-60 pointer-events-none animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Live Security Ticker */}
      {/*<SecurityTicker />*/}

      {/* Main Content */}
      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 flex flex-col justify-center overflow-hidden">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start h-full mt-4">
          
          {/* Left Column */}
          <div className="flex-1 w-full max-w-xl text-left">
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#0F172A] to-primary mb-4 sm:mb-6 uppercase tracking-tight leading-tight">
              CONNECT <br/>WITH US
            </h1>
            <p className="animate-fade-in-up delay-100 text-text-body text-base sm:text-lg mb-8 sm:mb-10 max-w-md">
              We're here to help. Reach out to CRCCF on any of our official platforms to stay informed, get support, or join our global mission to protect the digital world.
            </p>

            {/* Glassmorphic Dock for Icons */}
            <div className="animate-fade-in-up delay-200 bg-white/40 backdrop-blur-xl border border-white/60 p-6 sm:p-8 rounded-3xl sm:rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group mb-8">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
              
              <div className="flex flex-wrap gap-4 sm:gap-5 justify-start relative z-10">
                {socialButtons.map((btn, idx) => (
                  <a 
                    key={idx} 
                    href={btn.link}
                    title={btn.label}
                    className={`
                      w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-text-heading flex items-center justify-center text-xl sm:text-2xl
                      shadow-md transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-110
                      ${btn.color}
                    `}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {btn.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Info Cards */}
            <div className="animate-fade-in-up delay-300 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:shadow-md transition-shadow">
                <div className="bg-red-100 p-2 sm:p-3 rounded-full text-red-600 shrink-0">
                  <AlertTriangle size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-red-900">Report Cyber Crime</h4>
                  <div className="mt-2">
                    <a 
                      href="https://crcybercrime.com/report-a-cyber-crime" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-xs transition-all hover:-translate-y-0.5"
                    >
                      Report Online
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 sm:p-3 rounded-full text-blue-600 shrink-0">
                  <PhoneCall size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">General Support</h4>
                  <p className="text-sm text-blue-700 mt-1">Available Mon-Sat, 24-Hrs</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="animate-fade-in-up delay-400 w-full lg:w-[460px] xl:w-[520px] shrink-0 transform transition-all duration-700 hover:scale-[1.01] sm:hover:scale-[1.02]">
            <div className="bg-bg-card rounded-4xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] p-6 sm:p-8 border border-white/50 backdrop-blur-xs relative overflow-hidden">
              
              {/* Decorative top gradient bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary"></div>

              <h3 className="text-xl sm:text-2xl font-bold text-text-heading mb-6">Drop a Message</h3>

              <form className="flex flex-col gap-5 sm:gap-6 relative z-10">
                {/* Floating Label Input for Name */}
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    className="peer w-full px-4 pt-5 pb-2 bg-bg-main/50 rounded-xl border border-gray-200/60 focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-text-body placeholder-transparent"
                    placeholder="Jane Doe"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-4 top-1.5 text-[10px] uppercase font-bold text-text-secondary transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-primary cursor-text"
                  >
                    Name
                  </label>
                </div>

                {/* Floating Label Input for Email */}
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    className="peer w-full px-4 pt-5 pb-2 bg-bg-main/50 rounded-xl border border-gray-200/60 focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-text-body placeholder-transparent"
                    placeholder="jane@example.com"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-4 top-1.5 text-[10px] uppercase font-bold text-text-secondary transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-medium peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-primary cursor-text"
                  >
                    Email
                  </label>
                </div>
                
                {/* Floating Label Textarea for Message */}
                <div className="relative group">
                  <textarea 
                    id="message"
                    rows={4}
                    className="peer w-full px-4 pt-6 pb-2 bg-bg-main/50 rounded-xl border border-gray-200/60 focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-text-body placeholder-transparent resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 top-2 text-[10px] uppercase font-bold text-text-secondary transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-primary cursor-text"
                  >
                    Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 rounded-xl bg-gradient-primary text-white font-bold tracking-wide shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_25px_rgba(37,99,235,0.5)] transform hover:-translate-y-1 transition-all overflow-hidden relative group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <FaTelegramPlane className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    SEND MESSAGE
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                </button>
              </form>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-inner border border-gray-200/60 h-40 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.8202669580455!2d85.80516117523825!3d20.349042381135575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e025984c55%3A0xee1fcd1f11e55141!2sDLF%20Cyber%20City!5e0!3m2!1sen!2sin!4v1776796765022!5m2!1sen!2sin" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CRCCF Office Location"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

        {/* Global Branch Locations */}
        <div className="mt-16 sm:mt-24 w-full animate-fade-in-up delay-500">
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-heading tracking-tight">Our Office Branches</h3>
            <div className="h-1 flex-1 bg-linear-to-r from-gray-200 to-transparent rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {/* Branch 1 */}
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

            {/* Branch 2 */}
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

            {/* Branch 3 */}
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
