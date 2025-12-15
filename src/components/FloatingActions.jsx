import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const PHONE_NUMBER_E164 = '+1234567890';
const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_TEXT = 'Hi%20QualifyLearn%2C%20I%20need%20guidance.';

function FloatingActions() {
  const [expanded, setExpanded] = useState(false);
  const [activeType, setActiveType] = useState(null);

  return (
    <div className="fixed bottom-4 right-4 z-[200]">
      {/* WhatsApp button - always visible but smaller */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-14 right-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.a>

      {/* Phone button */}
      <motion.a
        href={`tel:${PHONE_NUMBER_E164}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-28 right-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg flex items-center justify-center"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* Main action button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setExpanded(!expanded)}
        className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl flex items-center justify-center"
        style={{ boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)' }}
      >
        <motion.div
          animate={{ rotate: expanded ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {expanded ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
        </motion.div>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 rounded-full border border-blue-400"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </div>
  );
}

export default FloatingActions;