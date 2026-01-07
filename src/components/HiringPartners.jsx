import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ================= LOGOS (REAL WORKING LOGOS) ================= */
const companyLogos = {
  microsoft: "https://img.icons8.com/color/96/microsoft.png",
  google: "https://img.icons8.com/color/96/google-logo.png",
  apple: "https://img.icons8.com/color/96/mac-os.png",
  amazon: "https://img.icons8.com/color/96/amazon.png",
  meta: "https://img.icons8.com/color/96/facebook-new.png",
  netflix: "https://img.icons8.com/color/96/netflix-desktop-app.png",
  tesla: "https://img.icons8.com/color/96/tesla-logo.png",
  nvidia: "https://img.icons8.com/color/96/nvidia.png",
  intel: "https://img.icons8.com/color/96/intel.png",
  samsung: "https://img.icons8.com/color/96/samsung.png",
  oracle: "https://img.icons8.com/color/96/oracle-logo.png",
  cisco: "https://img.icons8.com/color/96/cisco.png",
  adobe: "https://img.icons8.com/color/96/adobe-logo.png",
  ibm: "https://img.icons8.com/color/96/ibm.png",
  uber: "https://img.icons8.com/color/96/uber.png",
  spotify: "https://img.icons8.com/color/96/spotify--v1.png",
  airbnb: "https://img.icons8.com/color/96/airbnb.png",
  twitter: "https://img.icons8.com/color/96/twitter--v1.png",
  linkedin: "https://img.icons8.com/color/96/linkedin-circled--v1.png",
  paypal: "https://img.icons8.com/color/96/paypal.png",
  stripe: "https://img.icons8.com/color/96/stripe.png",
  walmart: "https://img.icons8.com/color/96/walmart.png",
  flipkart: "https://img.icons8.com/color/96/flipkart.png",
  infosys: "https://img.icons8.com/color/96/infosys.png",
  tcs: "https://img.icons8.com/color/96/tata-consultancy-services.png",
  wipro: "https://img.icons8.com/color/96/wipro.png",
  accenture: "https://img.icons8.com/color/96/accenture.png",
  deloitte: "https://img.icons8.com/color/96/deloitte.png",
  ey: "https://img.icons8.com/color/96/ernst-and-young.png",
  kpmg: "https://img.icons8.com/color/96/kpmg.png",
  goldman: "https://img.icons8.com/color/96/goldman-sachs.png",
  jpmorgan: "https://img.icons8.com/color/96/jpmorgan-chase.png",
  mckinsey: "https://img.icons8.com/color/96/mckinsey-company.png",
  capgemini: "https://img.icons8.com/color/96/capgemini.png",
  cognizant: "https://img.icons8.com/color/96/cognizant.png",
  hcl: "https://img.icons8.com/color/96/hcl-technologies.png",
  byjus: "https://img.icons8.com/color/96/byjus.png",
  zomato: "https://img.icons8.com/color/96/zomato.png",
  swiggy: "https://img.icons8.com/color/96/swiggy.png",
};

/* ================= ROWS ================= */
const row1Companies = Object.entries({
  Microsoft: "microsoft",
  Google: "google",
  Apple: "apple",
  Amazon: "amazon",
  Meta: "meta",
  Netflix: "netflix",
  Tesla: "tesla",
  NVIDIA: "nvidia",
  Intel: "intel",
  Samsung: "samsung",
  Oracle: "oracle",
  Cisco: "cisco",
}).map(([name, key]) => ({ name, logo: companyLogos[key] }));

const row2Companies = Object.entries({
  Adobe: "adobe",
  IBM: "ibm",
  Uber: "uber",
  Spotify: "spotify",
  Airbnb: "airbnb",
  Twitter: "twitter",
  LinkedIn: "linkedin",
  PayPal: "paypal",
  Stripe: "stripe",
  Walmart: "walmart",
  Flipkart: "flipkart",
  Zomato: "zomato",
  Swiggy: "swiggy",
}).map(([name, key]) => ({ name, logo: companyLogos[key] }));

const row3Companies = Object.entries({
  Infosys: "infosys",
  TCS: "tcs",
  Wipro: "wipro",
  Accenture: "accenture",
  Deloitte: "deloitte",
  EY: "ey",
  KPMG: "kpmg",
  Goldman: "goldman",
  JPMorgan: "jpmorgan",
  McKinsey: "mckinsey",
  Capgemini: "capgemini",
  Cognizant: "cognizant",
  HCL: "hcl",
  BYJUS: "byjus",
}).map(([name, key]) => ({ name, logo: companyLogos[key] }));

/* ================= COMPONENT ================= */
export default function HiringPartners() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Set ready immediately
    setReady(true);
    
    // Start animation after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready || !imagesLoaded) return;

    const rows = [
      { ref: row1Ref, speed: 40, dir: -1 },
      { ref: row2Ref, speed: 40, dir: 1 },
      { ref: row3Ref, speed: 40, dir: -1 },
    ];

    const cleanups = rows.map(({ ref, speed, dir }) => {
      let raf, last = performance.now(), x = 0;

      const animate = (now) => {
        if (!ref.current) return;
        const dt = now - last;
        last = now;

        x += (speed * dt / 1000) * dir;
        const loop = ref.current.scrollWidth / 2;

        if (dir === -1 && x <= -loop) x = 0;
        if (dir === 1 && x >= 0) x = -loop;

        ref.current.style.transform = `translateX(${x}px)`;
        raf = requestAnimationFrame(animate);
      };

      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    });

    return () => cleanups.forEach(fn => fn());
  }, [ready, imagesLoaded]);

  const Marquee = ({ companies, refProp }) => (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />

      <div ref={refProp} className="flex will-change-transform">
        {[...companies, ...companies].map((c, i) => (
          <div key={i} className="flex-shrink-0 px-6">
            <div className="w-36 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition hover:bg-white/10">
              <img
                src={c.logo}
                alt={c.name}
                className="h-12 w-auto max-w-[130px] object-contain hover:scale-110 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  // Fallback: show company name if image fails to load
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white text-sm font-medium px-4 text-center">${c.name}</span>`;
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-gray-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Learners Work At World's Leading Companies
          </motion.h2>

          <motion.p 
            className="text-gray-400 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From global tech giants to top consulting firms and fast-growing startups,
            our learners are trusted by organizations worldwide.
          </motion.p>
        </div>

        {/* MARQUEES */}
        <div className="space-y-10">
          <Marquee companies={row1Companies} refProp={row1Ref} />
          <Marquee companies={row2Companies} refProp={row2Ref} />
          <Marquee companies={row3Companies} refProp={row3Ref} />
        </div>

        {/* STATS */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Global Companies</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Placements</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-400">Hiring Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}