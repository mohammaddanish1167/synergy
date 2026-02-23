import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function FloatingGuidanceButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-guidance-modal'));
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="fixed left-4 bottom-16 sm:left-6 sm:bottom-6 z-[70] flex items-center gap-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400/40"
      aria-label="Get guidance"
    >
      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
      <span>Get Guidance</span>
    </motion.button>
  );
}

export default FloatingGuidanceButton;

