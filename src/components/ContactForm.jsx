/**
 * NexusInterface Component - Quantum Communication Hub
 * Futuristic neural interface with bio-metric feedback
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Fingerprint,
  Scan,
  CircuitBoard,
  Cpu,
  Shield,
  Key,
  Waves,
  Radio,
  Eye,
  Lock,
  Unlock,
  Zap,
  Brain,
  Satellite,
  Fingerprint as BioIcon,
  Radiation,
  Sparkles as EnergySpark
} from 'lucide-react';

const NexusInterface = ({ zone = "alpha", modules = ['identity', 'neural', 'bio', 'quantum'], activationText = "Establish Neural Link" }) => {
  const [neuralData, setNeuralData] = useState({
    identity: '',
    neural: '',
    bio: '',
    quantum: ''
  });
  const [neuralFocus, setNeuralFocus] = useState({});
  const [neuralTouch, setNeuralTouch] = useState({});
  const [synapseActive, setSynapseActive] = useState(false);
  const [neuralStatus, setNeuralStatus] = useState(null);
  const [bioRhythm, setBioRhythm] = useState(0);
  const [neuralFrequency, setNeuralFrequency] = useState(0);
  const [securityLevel, setSecurityLevel] = useState(0);
  
  const neuralRef = useRef(null);
  const canvasRef = useRef(null);

  // Bio-rhythm simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBioRhythm(prev => (prev + Math.random() * 10) % 100);
      setNeuralFrequency(prev => (prev + Math.random() * 5) % 50);
      setSecurityLevel(prev => Math.min(100, prev + (Math.random() * 2 - 1)));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Neural wave visualization
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    
    const drawNeuralWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Neural wave patterns
      ctx.beginPath();
      ctx.strokeStyle = '#00f7ff';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.3;
      
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = canvas.height / 2 + 
            Math.sin(x * 0.02 + Date.now() * 0.005 + i) * 20 +
            Math.cos(x * 0.01 + Date.now() * 0.003) * 10;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = `hsl(${180 + i * 20}, 100%, 50%)`;
        ctx.stroke();
      }
      
      animationFrame = requestAnimationFrame(drawNeuralWaves);
    };
    
    drawNeuralWaves();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleNeuralInput = (e) => {
    const { name, value } = e.target;
    setNeuralData(prev => ({ ...prev, [name]: value }));
  };

  const handleNeuralFocus = (fieldName) => {
    setNeuralFocus(prev => ({ ...prev, [fieldName]: true }));
    setNeuralFrequency(prev => prev + 10);
  };

  const handleNeuralBlur = (fieldName) => {
    setNeuralFocus(prev => ({ ...prev, [fieldName]: false }));
    setNeuralTouch(prev => ({ ...prev, [fieldName]: true }));
  };

  const handleNeuralLink = async (e) => {
    e.preventDefault();
    setSynapseActive(true);
    setNeuralStatus(null);

    try {
      // Simulate quantum encryption
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setNeuralStatus({
        type: 'success',
        message: 'Neural Link Established',
        encryption: 'QUANTUM-SHIELD-256',
        timestamp: new Date().toISOString()
      });
      
      setSecurityLevel(100);
    } catch (error) {
      setNeuralStatus({
        type: 'error',
        message: 'Neural Interface Error',
        encryption: 'RE-ROUTING SIGNAL',
        timestamp: new Date().toISOString()
      });
    } finally {
      setSynapseActive(false);
    }
  };

  const getNeuralIcon = (moduleName) => {
    const iconClass = "w-5 h-5";
    switch (moduleName) {
      case 'identity': return <Fingerprint className={iconClass} />;
      case 'neural': return <Brain className={iconClass} />;
      case 'bio': return <BioIcon className={iconClass} />;
      case 'quantum': return <Satellite className={iconClass} />;
      default: return <CircuitBoard className={iconClass} />;
    }
  };

  const getNeuralLabel = (moduleName) => {
    switch (moduleName) {
      case 'identity': return 'Neural Identity';
      case 'neural': return 'Synaptic Pattern';
      case 'bio': return 'Bio-Rhythm Signature';
      case 'quantum': return 'Quantum Entanglement ID';
      default: return moduleName;
    }
  };

  const getNeuralPlaceholder = (moduleName) => {
    switch (moduleName) {
      case 'identity': return 'Enter neural signature...';
      case 'neural': return 'Pattern recognition in progress...';
      case 'bio': return 'Scanning biometric data...';
      case 'quantum': return 'Quantum state detection...';
      default: return `Initialize ${moduleName}...`;
    }
  };

  const isNeuralActive = (moduleName) => {
    return neuralFocus[moduleName] || (neuralData[moduleName] && neuralData[moduleName].length > 0);
  };

  const getNeuralSecurity = (moduleName, value) => {
    if (moduleName === 'quantum') return true;
    if (moduleName === 'bio') return value && value.length > 3;
    if (moduleName === 'neural') {
      return /^[A-Za-z0-9]{8,}$/.test(value);
    }
    return value && value.length > 2;
  };

  const showNeuralAlert = (moduleName) => {
    return neuralTouch[moduleName] && !getNeuralSecurity(moduleName, neuralData[moduleName]);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      
      {/* Quantum Field Background */}
      <div className="absolute inset-0">
        {/* Neural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff1a_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff1a_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        {/* Energy Pulses */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.1, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-fuchsia-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Neural Wave Canvas */}
      <canvas
        ref={canvasRef}
        width={800}
        height={200}
        className="absolute top-0 left-0 w-full opacity-20 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        
        {/* Quantum Status Bar */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-12 p-4 bg-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Radio className="w-6 h-6 text-cyan-400" />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 text-cyan-400"
                >
                  <Radio className="w-6 h-6" />
                </motion.div>
              </div>
              <div>
                <div className="text-sm text-cyan-400 font-mono">QUANTUM NEXUS ACTIVE</div>
                <div className="text-xs text-slate-500 font-mono">ENCRYPTION: POST-QUANTUM • ZONE: {zone.toUpperCase()}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400">LEVEL {Math.floor(securityLevel)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400">QUANTUM LOCKED</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Neural Interface Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl animate-pulse" />
              <div className="relative px-8 py-4 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-full">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    NEURAL INTERFACE v2.0
                  </span>
                  <Scan className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-black mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
              ESTABLISH
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400">
              QUANTUM LINK
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Initialize secure quantum entanglement protocol for encrypted neural communication
          </motion.p>
        </div>

        {/* Neural Interface Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Bio-Rhythm Scanner */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 border-2 border-dashed border-cyan-500/20 rounded-full"
          />
          
          {modules.map((moduleName, index) => {
            const isActive = isNeuralActive(moduleName);
            const hasAlert = showNeuralAlert(moduleName);
            const isSecure = getNeuralSecurity(moduleName, neuralData[moduleName]);
            
            return (
              <motion.div
                key={moduleName}
                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Quantum Field Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${moduleName === 'identity' ? 'cyan' : moduleName === 'neural' ? 'purple' : moduleName === 'bio' ? 'fuchsia' : 'blue'}-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Neural Interface Card */}
                <div className={`relative bg-slate-900/80 backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-300 ${
                  hasAlert 
                    ? 'border-rose-500/50 shadow-rose-500/20' 
                    : isActive 
                      ? 'border-cyan-500 shadow-[0_0_30px_rgba(0,247,255,0.3)]' 
                      : 'border-slate-800 hover:border-cyan-500/30'
                }`}>
                  
                  {/* Neural Activity Indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
                    <motion.div
                      animate={{ width: `${bioRhythm}%` }}
                      className={`h-full bg-gradient-to-r ${
                        moduleName === 'identity' ? 'from-cyan-500 to-blue-500' :
                        moduleName === 'neural' ? 'from-purple-500 to-fuchsia-500' :
                        moduleName === 'bio' ? 'from-fuchsia-500 to-pink-500' :
                        'from-blue-500 to-cyan-500'
                      }`}
                    />
                  </div>

                  <div className="p-8">
                    {/* Module Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${
                          moduleName === 'identity' ? 'from-cyan-500/20 to-blue-500/20' :
                          moduleName === 'neural' ? 'from-purple-500/20 to-fuchsia-500/20' :
                          moduleName === 'bio' ? 'from-fuchsia-500/20 to-pink-500/20' :
                          'from-blue-500/20 to-cyan-500/20'
                        }`}>
                          {getNeuralIcon(moduleName)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{getNeuralLabel(moduleName)}</h3>
                          <div className="flex items-center gap-2">
                            <Waves className="w-3 h-3 text-cyan-400" />
                            <span className="text-xs font-mono text-slate-500">FREQ: {Math.floor(neuralFrequency)} Hz</span>
                          </div>
                        </div>
                      </div>

                      {/* Security Badge */}
                      <div className={`px-3 py-1 rounded-full text-xs font-mono ${
                        isSecure ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {isSecure ? 'SECURE' : 'PENDING'}
                      </div>
                    </div>

                    {/* Neural Input Field */}
                    <div className="relative">
                      <div className={`relative bg-slate-950/50 rounded-2xl border transition-all duration-300 ${
                        hasAlert 
                          ? 'border-rose-500/50' 
                          : isActive 
                            ? 'border-cyan-500 shadow-[0_0_20px_rgba(0,247,255,0.2)]' 
                            : 'border-slate-700'
                      }`}>
                        
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <Key className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-600'}`} />
                        </div>
                        
                        <input
                          type={moduleName === 'bio' ? 'password' : 'text'}
                          name={moduleName}
                          value={neuralData[moduleName]}
                          onChange={handleNeuralInput}
                          onFocus={() => handleNeuralFocus(moduleName)}
                          onBlur={() => handleNeuralBlur(moduleName)}
                          className="w-full py-4 pl-12 pr-12 bg-transparent text-cyan-400 font-mono placeholder:text-slate-700 focus:outline-none"
                          placeholder={getNeuralPlaceholder(moduleName)}
                        />
                        
                        {isActive && isSecure && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                          >
                            <Unlock className="w-5 h-5 text-emerald-400" />
                          </motion.div>
                        )}
                      </div>

                      {hasAlert && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-xs text-rose-400 font-mono flex items-center gap-2"
                        >
                          <Radiation className="w-3 h-3" />
                          INVALID NEURAL SIGNATURE - REINITIALIZE SCAN
                        </motion.p>
                      )}
                    </div>

                    {/* Neural Sync Progress */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 space-y-3"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-mono">NEURAL SYNC</span>
                          <span className="text-cyan-400 font-mono">{Math.floor(bioRhythm)}%</span>
                        </div>
                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: `${bioRhythm}%` }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Module Footer */}
                  <div className="px-8 py-4 bg-slate-950/50 border-t border-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3 text-slate-600" />
                        <span className="text-xs text-slate-600 font-mono">QUANTUM OBSERVER</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CircuitBoard className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs font-mono text-cyan-400">{moduleName.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Neural Link Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={handleNeuralLink}
            disabled={synapseActive}
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(0,247,255,0.5)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-12 py-6 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-fuchsia-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            
            <span className="relative flex items-center gap-4 text-white font-bold text-xl">
              {synapseActive ? (
                <>
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>ESTABLISHING QUANTUM LINK...</span>
                </>
              ) : (
                <>
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>{activationText}</span>
                  <EnergySpark className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              )}
            </span>
          </motion.button>
        </motion.div>

        {/* Neural Status Display */}
        <AnimatePresence>
          {neuralStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className={`mt-8 p-6 rounded-2xl border ${
                neuralStatus.type === 'success' 
                  ? 'bg-emerald-950/50 border-emerald-500/30' 
                  : 'bg-rose-950/50 border-rose-500/30'
              } backdrop-blur-xl`}
            >
              <div className="flex items-start gap-4">
                {neuralStatus.type === 'success' ? (
                  <Shield className="w-8 h-8 text-emerald-400" />
                ) : (
                  <Lock className="w-8 h-8 text-rose-400" />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-lg font-bold text-white">{neuralStatus.message}</p>
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-cyan-400">
                      {neuralStatus.encryption}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 font-mono">
                    TIMESTAMP: {neuralStatus.timestamp}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quantum Encryption Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-8 text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <Lock className="w-3 h-3 text-cyan-400" />
            <span className="text-slate-600">QUANTUM ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-2">
            <Radio className="w-3 h-3 text-purple-400" />
            <span className="text-slate-600">NEURAL FINGERPRINT ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-fuchsia-400" />
            <span className="text-slate-600">POST-QUANTUM SECURE</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NexusInterface;