import { motion } from "framer-motion";
import { Globe, Users, Target, Briefcase, Shield, Check, Award, TrendingUp, ChevronRight } from "lucide-react";

export default function WhyChooseUsCards() {
  const features = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Recognition",
      description: "Programs aligned with international standards and valued by employers worldwide.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Industry Experts",
      description: "Learn directly from professionals with real-world industry experience.",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Career Advancement",
      description: "Focused learning paths designed for faster career growth.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Practical Learning",
      description: "Hands-on projects, case studies, and job-ready skills.",
    },
  ];

  const stats = [
    { icon: <Award className="w-4 h-4" />, value: "98%", label: "Success Rate" },
    { icon: <Globe className="w-4 h-4" />, value: "15K+", label: "Global Learners" },
    { icon: <TrendingUp className="w-4 h-4" />, value: "5K+", label: "Advancements" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl font-light text-slate-900 mb-3">
            Trusted by professionals worldwide
          </h2>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Join an elite community of accomplished professionals who transformed their careers through our world-class programs.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-medium text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-slate-50 rounded-lg p-6 mb-12">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-1 text-slate-600 mb-1">
                  {stat.icon}
                  <span className="text-xs font-medium">{stat.label}</span>
                </div>
                <div className="text-xl font-light text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <h3 className="text-sm font-medium text-slate-900 mb-4">Exclusive Benefits</h3>
          <div className="space-y-2">
            {[
              "Industry-leading curriculum aligned with cutting-edge trends",
              "Elite 1:1 Mentorship from distinguished industry leaders",
              "Flexible learning schedule designed for ambitious professionals",
              "Career-accelerating programs with executive placement support",
              "Globally recognized credentials from prestigious institutions",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}