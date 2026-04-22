export default function SecurityTicker() {
  return (
    <div className="bg-red-600 text-white text-xs sm:text-sm font-bold py-2 overflow-hidden relative z-40 shadow-xs flex whitespace-nowrap">
      <div className="animate-[marquee_30s_linear_infinite] flex shrink-0 items-center">
        <span className="mx-6 sm:mx-12">🛑 Data is Currency: The less you post, the less they can steal.</span>
        <span className="text-red-300">|</span>
        <span className="mx-6 sm:mx-12">⚠️ ALERT: Stay vigilant against phishing attacks claiming to be from official banks.</span>
        <span className="text-red-300">|</span>
        <span className="mx-6 sm:mx-12">🔒 Always verify sender emails before clicking links.</span>
        <span className="text-red-300">|</span>
        <span className="mx-6 sm:mx-12">🤫 Keep OTPs Secret: No legitimate official will ever ask for your code.</span>
        <span className="text-red-300">|</span>
      </div>
      <div className="animate-[marquee_30s_linear_infinite] flex shrink-0 items-center" aria-hidden="true">
        <span className="mx-6 sm:mx-12">🛑 Data is Currency: The less you post, the less they can steal.</span>
        <span className="text-red-300">|</span>
        <span className="mx-6 sm:mx-12">⚠️ ALERT: Stay vigilant against phishing attacks claiming to be from official banks.</span>
        <span className="text-red-300">|</span>
        <span className="mx-6 sm:mx-12">🔒 Always verify sender emails before clicking links.</span>
        <span className="text-red-300">|</span>
        <span className="mx-6 sm:mx-12">🤫 Keep OTPs Secret: No legitimate official will ever ask for your code.</span>
        <span className="text-red-300">|</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
