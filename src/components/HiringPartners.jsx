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
      className="relative overflow-hidden py-6 group"
    >
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" />

      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-0 group-hover:opacity-100" />

      <div ref={refProp} className="flex will-change-transform gap-8 px-4">
        {[...companies, ...companies].map((c, i) => {
          const key = c.name.toLowerCase().replace(/ /g, '');
          const logoUrl = loadedLogos[key] || fallbackLogos[key];

          return (
            <div key={`${c.name}-${i}`} className="flex-shrink-0">
              <motion.div
                className="w-48 h-28 flex items-center justify-center bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group/item relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  borderColor: "#3b82f6",
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.01 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#3b82f6_1px,transparent_0)] bg-[length:20px_20px]" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />

                {/* Logo container */}
                <div className="relative z-10 p-6 flex items-center justify-center w-full h-full">
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={c.name}
                      crossOrigin="anonymous"
                      className="h-12 w-auto max-w-[160px] object-contain filter grayscale group-hover/item:grayscale-0 group-hover/item:contrast-110 transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const fallback = fallbackLogos[key];
                        if (fallback && e.target.src !== fallback) {
                          e.target.src = fallback;
                        } else {
                          e.target.style.display = 'none';
                          const parent = e.target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex flex-col items-center gap-3">
                                <Building2 class="w-10 h-10 text-blue-600" />
                                <span class="text-slate-800 text-sm font-semibold px-3 py-1.5 text-center bg-slate-100 rounded-lg">${c.name}</span>
                              </div>
                            `;
                          }
                        }
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse" />
                      <div className="h-3 w-24 bg-slate-200 rounded animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Company name badge */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/item:opacity-100 transition-all duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <span className="text-xs font-semibold text-slate-700 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
                    {c.name}
                  </span>
                </motion.div>

                {/* Verified badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-cyan-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADING */}
        <motion.div
          className="text-center mb-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-4">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide">TRUSTED BY INDUSTRY LEADERS</span>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Our Graduates Work At <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">World's Top Companies</span>
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            From Silicon Valley giants to Fortune 500 enterprises, our alumni are making significant impacts
            at the most innovative companies shaping the future of technology and business.
          </p>
        </motion.div>

        {/* MARQUEES */}
        <div className="space-y-8 mb-20">
          <Marquee companies={row1Companies} refProp={row1Ref} index={0} />
          <Marquee companies={row2Companies} refProp={row2Ref} index={1} />
          <Marquee companies={row3Companies} refProp={row3Ref} index={2} />
        </div>

        {/* STATS SECTION */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                value: "50+",
                label: "Global Companies",
                description: "Across 6 continents",
                gradient: "from-blue-500 to-cyan-500",
                delay: 0
              },
              {
                icon: <Users className="w-6 h-6" />,
                value: "10K+",
                label: "Placements",
                description: "Successful career transitions",
                gradient: "from-purple-500 to-pink-500",
                delay: 0.1
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                value: "95%",
                label: "Success Rate",
                description: "Employer satisfaction",
                gradient: "from-emerald-500 to-green-500",
                delay: 0.2
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                value: "4.9★",
                label: "Rating",
                description: "Average employer feedback",
                gradient: "from-amber-500 to-orange-500",
                delay: 0.3
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.gradient} text-white mb-6 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-slate-800 mb-3">{stat.label}</div>
                  <div className="text-slate-600">{stat.description}</div>

                  {/* Animated line */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 mt-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SUCCESS STORIES */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 mb-12 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold text-blue-700">SUCCESS STORIES</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Join Our Network of High-Achieving Professionals
              </h3>
              <p className="text-slate-700 mb-6 text-lg">
                Our graduates secure positions at top-tier companies with an average salary
                increase of 45% within 6 months of course completion.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-slate-700">Guaranteed interview opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-slate-700">1-on-1 career mentoring</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* TRUST BADGES */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 text-slate-600">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <span>Verified employment data</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2 text-slate-600">
            <Target className="w-5 h-5 text-emerald-500" />
            <span>Industry-aligned curriculum</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2 text-slate-600">
            <Zap className="w-5 h-5 text-amber-500" />
            <span>Fast-track career growth</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}