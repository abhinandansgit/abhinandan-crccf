import { useState } from "react";
import {
  FileText, ShieldCheck, Users, Scale, Briefcase,
  GraduationCap, Award, CheckCircle, Search,
  MessageSquare, ClipboardCheck, Cpu, Activity,
  CreditCard, Lock, AlertTriangle
} from "lucide-react";
import ReactMarkdown from "react-markdown"; // for rendering markdown content
import Navbar from "../components/Navbar";
import { policySections } from '../data/policyData';

/**
 * Maps icon names to Lucide icon components.
 */
const iconMap = {
  FileText, ShieldCheck, Users, Scale, Briefcase,
  GraduationCap, Award, CheckCircle, Search,
  MessageSquare, ClipboardCheck, Cpu, Activity,
  CreditCard, Lock, AlertTriangle
};

/**
 * RecruitmentPolicies Page
 * Displays the official recruitment policies of CRCCF in a clean, modern grid.
 */
export default function RecruitmentPolicies() {
  const [active, setActive] = useState(null); // Track which policy is currently active for modal display   

  return (
    <div className="min-h-screen bg-bg-main relative overflow-hidden font-sans">
      <Navbar />
    <div className="pointer-events-none fixed inset-0 opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      {/* Floating Background Icons */}
<div className="absolute top-32 left-20 text-primary/10 animate-float-slow">
  <ShieldCheck size={120} />
</div>

<div className="absolute bottom-20 right-20 text-primary/10 animate-float-slow" style={{ animationDelay: '2s' }}>
  <Lock size={150} />
</div>

<div className="absolute top-1/3 right-1/3 text-primary/10 animate-float-slow" style={{ animationDelay: '4s' }}>
  <Cpu size={90} />
</div>

{/* Floating Dots */}
<div className="absolute top-20 right-10 w-64 h-64 bg-dots-pattern opacity-40 animate-float"></div>

<div className="absolute bottom-10 left-10 w-48 h-48 bg-dots-pattern opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>

    {/* Glowing Gradient Orbs */}
<div className="absolute top-1/4 left-1/3 w-125 h-125 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>

<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

      {/* Modern Background Accents */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      

      <main className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        

        {/* HERO SECTION */}
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            CRCCF Official Guidelines
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Recruitment <span className="text-primary">Rules & Policies</span>
          </h1>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our comprehensive guidelines and policies that govern our recruitment
            process, ensuring fairness, transparency, and professional excellence across
            all roles in our organization.
          </p>
        </div>

        {/* GRID CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {policySections.map((item, index) => {
            const IconComp = iconMap[item.iconName] || FileText; // Fallback to FileText if icon name is not found
            return (
              <div
                key={item.id}
                onClick={() => setActive(item)} // Set active policy for modal display
                className="group relative cursor-pointer bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-500 flex flex-col animate-fade-in-up overflow-hidden hover:scale-[1.03] hover:rotate-[0.3deg]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                
                <div className="absolute top-4 right-4 text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-bold opacity-0 group-hover:opacity-100 transition">
                POLICY
                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-all duration-500"></div>

                {/* Light Sweep Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-white/30 skew-x-12 blur-md group-hover:animate-shine"></div>
                </div>
                
                <div className="mb-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-50 text-slate-700 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                    <IconComp size={24} />
                  </div>
                </div>

                <h3 className="font-bold text-slate-800 text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                  {item.summary}
                </p>

                <div className="mt-auto pt-4 flex items-center text-primary font-semibold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Policy Details →
                </div>
              </div>
            );
          })}
        </div>

        {/* POLICY DETAIL MODAL */}
        {active && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
              onClick={() => setActive(null)}
            ></div>

            {/* Modal Body */}
            <div className="bg-white rounded-3xl w-full max-w-3xl lg:max-w-5xl max-h-[85vh] overflow-hidden shadow-2xl relative z-10 animate-modal-enter flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary text-white rounded-2xl shadow-lg shadow-primary/30">
                    {(() => {
                      const IconComp = iconMap[active.iconName] || FileText;
                      return <IconComp size={24} />;
                    })()}
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-tight leading-none">
                      Official Policy
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-medium italic">Document Ref: CRCCF/POL/2026</p>
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)} // Close modal on click
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 lg:p-10 overflow-y-auto">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-primary pl-4">
                  {active.title}
                </h3>

                <div className="prose prose-slate max-w-none">
                  <div className="prose prose-slate max-w-none">
                    <ReactMarkdown>
                        {active.content}
                    </ReactMarkdown>
                  </div>
                </div>

                <div className="mt-10 p-5 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4 items-start">
                  <div className="text-blue-500 shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <p className="text-sm text-blue-700 italic">
                    This document is legally binding under the Information Technology Act 2000 and CRCCF's internal compliance framework.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-slate-100 bg-white flex justify-end">
                <button
                  onClick={() => setActive(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg hover:shadow-primary/20"
                >
                  Acknowledge & Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Animations Style */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.6s ease-out forwards; }
        .animate-modal-enter { animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes float {
            50% { transform: translateY(-20px); }
            0% { transform: translateY(0px); }
  100% { transform: translateY(0px); }
}

@keyframes floatSlow {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

@keyframes pulseSlow {
  0% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
  100% { opacity: 0.4; transform: scale(1); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 10s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 8s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -75%; }
  100% { left: 125%; }
}

.group-hover\:animate-shine {
  animation: shine 1s ease-in-out;
}

@keyframes gradientX {
  0%, 100% { background-position: left; }
  50% { background-position: right; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradientX 6s ease infinite;
}

@keyframes modalEnter {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-enter {
  animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

      `}</style>
    </div>
  );
}