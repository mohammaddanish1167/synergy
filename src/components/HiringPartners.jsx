import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Trophy,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Award,
  Globe,
  Star,
  Zap,
  Target,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

/* ================= REAL VECTOR LOGOS ================= */
const companyLogos = {
  microsoft: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  meta: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  netflix: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  tesla: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  nvidia: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  intel: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
  samsung: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  oracle: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  cisco: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  adobe: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
  ibm: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  uber: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
  spotify: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  airbnb: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  twitter: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  linkedin: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  paypal: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  stripe: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  walmart: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  flipkart: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Flipkart_logo.svg",
  infosys: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  tcs: "https://upload.wikimedia.org/wikipedia/en/b/b9/Tata_Consultancy_Services_Logo.svg",
  wipro: "https://upload.wikimedia.org/wikipedia/commons/4/42/Wipro_Logo_new.svg",
  accenture: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  deloitte: "https://upload.wikimedia.org/wikipedia/commons/1/12/Deloitte.svg",
  ey: "https://upload.wikimedia.org/wikipedia/commons/9/98/Ernst_%26_Young_Logo.svg",
  kpmg: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",
  goldman: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
  jpmorgan: "https://upload.wikimedia.org/wikipedia/commons/d/de/JPMorgan_Chase_Logo_2008.svg",
  mckinsey: "https://upload.wikimedia.org/wikipedia/commons/8/8c/McKinsey_%26_Company_Logo.svg",
  capgemini: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Capgemini_Logo_2022.svg",
  cognizant: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Cognizant_logo_2022.svg",
  hcl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/HCL_Technologies_logo.svg",
  byjus: "https://upload.wikimedia.org/wikipedia/en/d/dd/Byju%27s_logo.svg",
  zomato: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.svg",
  swiggy: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
};

/* ================= COMPANY DATA ================= */
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
  
 
}).map(([name, key]) => ({ name, logo: companyLogos[key] }));

const row3Companies = Object.entries({
}).map(([name, key]) => ({ name, logo: companyLogos[key] }));

/* ================= FALLBACK LOGOS (CDN) ================= */
const fallbackLogos = {
  microsoft: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  meta: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  netflix: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  tesla: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  nvidia: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  intel: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
  samsung: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  oracle: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  cisco: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
  adobe: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
  ibm: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  uber: "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
  spotify: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  airbnb: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  twitter: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
  linkedin: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  paypal: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  stripe: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  walmart: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  flipkart: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flipkart_Logo.svg",
  infosys: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  tcs: "https://upload.wikimedia.org/wikipedia/en/b/b9/Tata_Consultancy_Services_Logo.svg",
  wipro: "https://upload.wikimedia.org/wikipedia/commons/4/42/Wipro_Logo_new.svg",
  accenture: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  deloitte: "https://upload.wikimedia.org/wikipedia/commons/1/12/Deloitte.svg",
  ey: "https://upload.wikimedia.org/wikipedia/commons/9/98/Ernst_%26_Young_Logo.svg",
  kpmg: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg",
  goldman: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
  jpmorgan: "https://upload.wikimedia.org/wikipedia/commons/d/de/JPMorgan_Chase_Logo_2008.svg",
  mckinsey: "https://upload.wikimedia.org/wikipedia/commons/8/8c/McKinsey_%26_Company_Logo.svg",
  capgemini: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Capgemini_Logo_2022.svg",
  cognizant: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Cognizant_logo_2022.svg",
  hcl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/HCL_Technologies_logo.svg",
  byjus: "https://upload.wikimedia.org/wikipedia/en/d/dd/Byju%27s_logo.svg",
  zomato: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.svg",
  swiggy: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg",
};

/* ================= COMPONENT ================= */
export default function HiringPartners() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedLogos, setLoadedLogos] = useState({});

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const allCompanies = [...row1Companies, ...row2Companies, ...row3Companies];
      const loaded = {};

      const imagePromises = allCompanies.map(async (company) => {
        const key = company.name.toLowerCase().replace(/ /g, '');
        const urls = [
          companyLogos[key],
          fallbackLogos[key]
        ].filter(Boolean);

        for (const url of urls) {
          try {
            await new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = () => {
                loaded[key] = url;
                resolve();
              };
              img.onerror = reject;
            });
            break; // Success, break the loop
          } catch (error) {
            continue; // Try next URL
          }
        }
      });

      await Promise.allSettled(imagePromises);
      setLoadedLogos(loaded);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const rows = [
      { ref: row1Ref, speed: 30, dir: -1 },
      { ref: row2Ref, speed: 35, dir: 1 },
      { ref: row3Ref, speed: 40, dir: -1 },
    ];

    const cleanups = rows.map(({ ref, speed, dir }) => {
      let raf, last = performance.now(), x = 0;
      let isHovered = false;
      let isPaused = false;

      const animate = (now) => {
        if (!ref.current || isHovered || isPaused) {
          raf = requestAnimationFrame(animate);
          return;
        }

        const dt = now - last;
        last = now;

        x += (speed * dt / 1000) * dir;
        const loop = ref.current.scrollWidth / 2;

        if (dir === -1 && x <= -loop) x = 0;
        if (dir === 1 && x >= 0) x = -loop;

        ref.current.style.transform = `translateX(${x}px)`;
        raf = requestAnimationFrame(animate);
      };

      const element = ref.current;
      if (element) {
        element.addEventListener('mouseenter', () => isHovered = true);
        element.addEventListener('mouseleave', () => isHovered = false);
      }

      // Pause animation when window loses focus
      const handleVisibilityChange = () => {
        isPaused = document.hidden;
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      raf = requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(raf);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (element) {
          element.removeEventListener('mouseenter', () => isHovered = true);
          element.removeEventListener('mouseleave', () => isHovered = false);
        }
      };
    });

    return () => cleanups.forEach(fn => fn());
  }, [imagesLoaded]);

  const Marquee = ({ companies, refProp, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden py-4 group"
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

      <div ref={refProp} className="flex will-change-transform gap-6 px-4">
        {[...companies, ...companies].map((c, i) => {
          const key = c.name.toLowerCase().replace(/ /g, '');
          const logoUrl = loadedLogos[key] || fallbackLogos[key];

          return (
            <div key={`${c.name}-${i}`} className="flex-shrink-0">
              <div className="w-44 h-24 flex items-center justify-center bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors duration-200">
                <div className="p-4 flex items-center justify-center w-full h-full">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={c.name}
                      crossOrigin="anonymous"
                      className="h-8 w-auto max-w-[120px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                      loading="lazy"
                      onError={(e) => {
                        const fallback = fallbackLogos[key];
                        if (fallback && e.target.src !== fallback) {
                          e.target.src = fallback;
                        }
                      }}
                    />
                  ) : (
                    <div className="text-sm text-slate-400">{c.name}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  const stats = [
    { icon: Globe, value: "50+", label: "Global Companies" },
    { icon: Users, value: "10K+", label: "Placements" },
    { icon: Trophy, value: "95%", label: "Success Rate" },
    { icon: TrendingUp, value: "4.9★", label: "Rating" },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-6"
          >
            Our Graduates Work At
            <span className="block font-medium mt-2 text-slate-700">
              World's Top Companies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 leading-relaxed"
          >
            From Silicon Valley giants to Fortune 500 enterprises, our alumni are making significant impacts
            at the most innovative companies.
          </motion.p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-6 mb-20">
          <Marquee companies={row1Companies} refProp={row1Ref} index={0} />
          <Marquee companies={row2Companies} refProp={row2Ref} index={1} />
          <Marquee companies={row3Companies} refProp={row3Ref} index={2} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-4 h-4 text-slate-600" />
                </div>
                <div className="text-2xl font-semibold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-50 rounded-2xl p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Success Stories
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                Join Our Network of High-Achieving Professionals
              </h3>
              <p className="text-slate-500 mb-4">
                Our graduates secure positions at top-tier companies with an average salary
                increase of 45% within 6 months.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-slate-600">Guaranteed interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-slate-600">1-on-1 career mentoring</span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 items-center text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified employment data</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span>Industry-aligned curriculum</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Fast-track career growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}