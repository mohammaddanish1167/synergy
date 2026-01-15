import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-[200]">
      {/* WhatsApp button */}
      <motion.a
        href={`https://wa.me/447457417703?text=Hi%20QualifyLearn%2C%20I%20need%20guidance.`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl flex items-center justify-center mb-3"
        style={{ boxShadow: '0 8px 20px rgba(34, 197, 94, 0.4)' }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Pulse effect for WhatsApp */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-60" />
        </div>
      </motion.a>
    </div>
  );
}

export default FloatingActions;