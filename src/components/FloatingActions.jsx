import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

function FloatingActionsSimple() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* WhatsApp button */}
        <motion.a
          href={`https://wa.me/19177304763?text=Hi%20QualifyLearn%2C%20I%20need%20guidance.`}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-3 bg-white border border-slate-200 rounded-full shadow-md hover:shadow-lg transition-all duration-200 pr-6 pl-4 py-2 group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3">
              <div className="absolute inset-0 bg-emerald-500 rounded-full" />
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-30" />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-900">Chat with us</span>
            <span className="text-xs text-slate-500">Average reply 2min</span>
          </div>
        </motion.a>

        {/* Phone tooltip/card */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900">Call us</h4>
                  <p className="text-xs text-slate-500">Speak directly with an advisor</p>
                </div>
              </div>
              
              <a
                href="tel:+19177304763"
                className="block w-full text-center py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                +1 (917) 730-4763
              </a>
              
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Mon-Fri, 9am-6pm EST
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default FloatingActionsSimple;