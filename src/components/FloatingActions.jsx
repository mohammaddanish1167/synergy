import { motion } from 'framer-motion';

const PHONE_NUMBER_DISPLAY = '+1 (234) 567-890';
const PHONE_NUMBER_E164 = '+1234567890';
const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_TEXT = 'Hi%20QualifyLearn%2C%20I%20need%20guidance.';

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-[200] flex flex-col gap-3">
      {/* WhatsApp Button - Premium */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-full text-white shadow-xl
                   bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700
                   ring-1 ring-white/10 backdrop-blur-sm"
      >
        {/* pulse indicator */}
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-300 shadow-md">
          <span className="absolute inset-0 rounded-full bg-emerald-300 animate-ping opacity-60" />
        </span>
        {/* icon */}
        <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15 ring-1 ring-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.855 0-3.6-.452-5.139-1.249L.5 23.5l1.28-6.135A11.45 11.45 0 0 1 .5 12Zm11.5-9C6.202 3 3 6.202 3 12c0 1.82.46 3.523 1.319 5.024l.2.346-.64 3.072 3.09-.635.338.193A8.932 8.932 0 0 0 12 21c5.798 0 9-3.202 9-9s-3.202-9-9-9Zm4.558 12.79c-.249.694-1.248 1.21-1.723 1.29-.46.074-1.056.106-1.709-.105-.395-.127-.905-.294-1.557-.572-2.734-1.18-4.52-3.943-4.66-4.127-.142-.185-1.113-1.48-1.113-2.822 0-1.342.705-1.992.954-2.27.249-.279.547-.35.73-.35.185 0 .368.001.53.01.17.008.399-.064.625.479.249.596.85 2.068.924 2.218.074.148.124.322.023.517-.099.195-.149.318-.293.491-.142.173-.308.388-.439.523-.142.147-.29.309-.125.602.166.294.734 1.208 1.575 1.955 1.083.948 1.994 1.242 2.287 1.387.293.148.466.124.64-.074.17-.198.735-.858.932-1.154.198-.294.396-.245.662-.148.266.099 1.676.79 1.962.934.293.149.486.222.556.346.074.124.074.719-.175 1.413Z"/>
          </svg>
        </span>
        {/* label */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide">WhatsApp</span>
          <span className="text-[11px] opacity-90">Typically replies in minutes</span>
        </div>
      </motion.a>

      {/* Call Button - Premium */}
      <motion.a
        href={`tel:${PHONE_NUMBER_E164}`}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Call us"
        title={PHONE_NUMBER_DISPLAY}
        className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-full text-white shadow-xl
                   bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                   ring-1 ring-white/10 backdrop-blur-sm"
      >
        {/* icon */}
        <span className="grid place-items-center w-8 h-8 rounded-full bg-white/15 ring-1 ring-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M2.01 3.8c-.2-1.05.68-1.98 1.74-1.77l3.06.6c.7.14 1.23.68 1.37 1.38l.36 1.78c.11.53-.05 1.09-.43 1.48L6.9 8.78a14.6 14.6 0 0 0 8.32 8.32l.5-1.21c.2-.49.63-.85 1.15-.97l1.78-.36c.7-.14 1.24.16 1.58.72l1.6 2.66c.55.91.02 2.08-1 2.29l-2.43.49c-1.33.27-2.73-.03-3.84-.82-2.21-1.56-4.25-3.6-5.82-5.81-.79-1.12-1.09-2.52-.82-3.85l.5-2.45c.2-1.02 1.39-1.55 2.29-1l2.66 1.6c.56.34.86.88.72 1.58l-.36 1.78c-.12.53-.48.95-.96 1.15l-1.21.5a16.57 16.57 0 0 1-9.44-9.44l.5-1.21c.2-.49.62-.85 1.15-.96l1.78-.36Z"/>
          </svg>
        </span>
        {/* label */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide">Call</span>
          <span className="text-[11px] opacity-90">{PHONE_NUMBER_DISPLAY}</span>
        </div>
      </motion.a>
    </div>
  );
}

export default FloatingActions;
