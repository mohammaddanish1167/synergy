import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ================= LOGOS ================= */
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
  adobe: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg",
  ibm: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  uber: "https://upload.wikimedia.org/wikipedia/commons/6/66/Uber_logo_2018.svg",
  spotify: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  airbnb: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  twitter: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  linkedin: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  paypal: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  stripe: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Stripe_Logo%2C_revised_2016.svg",
  walmart: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
  flipkart: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flipkart_logo.svg",
  infosys: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  tcs: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Tata_Consultancy_Services_Logo.svg",
  wipro: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  accenture: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  deloitte: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Deloitte_Logo.svg",
  ey: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Ernst_%26_Young_Logo.svg",
  kpmg: "https://upload.wikimedia.org/wikipedia/commons/8/8d/KPMG_logo.svg",
  goldman: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
  jpmorgan: "https://upload.wikimedia.org/wikipedia/commons/3/30/JPMorgan_Chase_%282018%29.svg",
  mckinsey: "https://upload.wikimedia.org/wikipedia/commons/7/77/McKinsey_%26_Company_logo.svg",
};

/* ================= ROWS (ADD MORE ANYTIME) ================= */
const row1Companies = [
  { name: "Microsoft", logo: companyLogos.microsoft },
  { name: "Google", logo: companyLogos.google },
  { name: "Apple", logo: companyLogos.apple },
  { name: "Amazon", logo: companyLogos.amazon },
  { name: "Meta", logo: companyLogos.meta },
  { name: "Netflix", logo: companyLogos.netflix },
  { name: "Tesla", logo: companyLogos.tesla },
  { name: "NVIDIA", logo: companyLogos.nvidia },
  { name: "Intel", logo: companyLogos.intel },
  { name: "Samsung", logo: companyLogos.samsung },
  { name: "Oracle", logo: companyLogos.oracle },
  { name: "Cisco", logo: companyLogos.cisco },
];

const row2Companies = [
  { name: "Adobe", logo: companyLogos.adobe },
  { name: "IBM", logo: companyLogos.ibm },
  { name: "Uber", logo: companyLogos.uber },
  { name: "Spotify", logo: companyLogos.spotify },
  { name: "Airbnb", logo: companyLogos.airbnb },
  { name: "Twitter", logo: companyLogos.twitter },
  { name: "LinkedIn", logo: companyLogos.linkedin },
  { name: "PayPal", logo: companyLogos.paypal },
  { name: "Stripe", logo: companyLogos.stripe },
  { name: "Walmart", logo: companyLogos.walmart },
  { name: "Flipkart", logo: companyLogos.flipkart },
];

const row3Companies = [
  { name: "Infosys", logo: companyLogos.infosys },
  { name: "TCS", logo: companyLogos.tcs },
  { name: "Wipro", logo: companyLogos.wipro },
  { name: "Accenture", logo: companyLogos.accenture },
  { name: "Deloitte", logo: companyLogos.deloitte },
  { name: "EY", logo: companyLogos.ey },
  { name: "KPMG", logo: companyLogos.kpmg },
  { name: "Goldman Sachs", logo: companyLogos.goldman },
  { name: "JPMorgan", logo: companyLogos.jpmorgan },
  { name: "McKinsey", logo: companyLogos.mckinsey },
];

/* ================= COMPONENT ================= */
export default function HiringPartners() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!ready) return;

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
  }, [ready]);

  const Marquee = ({ companies, refProp }) => (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />

      <div ref={refProp} className="flex will-change-transform">
        {[...companies, ...companies].map((c, i) => (
          <div key={i} className="flex-shrink-0 px-6">
            <div className="w-36 h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:scale-105 transition">
              <img src={c.logo} alt={c.name} className="max-h-10 opacity-70 hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-gray-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Top Companies Worldwide
          </motion.h2>
        </div>

        <div className="space-y-10">
          <Marquee companies={row1Companies} refProp={row1Ref} />
          <Marquee companies={row2Companies} refProp={row2Ref} />
          <Marquee companies={row3Companies} refProp={row3Ref} />
        </div>
      </div>
    </section>
  );
}
