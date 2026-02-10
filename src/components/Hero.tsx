import { motion } from 'motion/react';
import { Download } from 'lucide-react';

// Path per dominio custom
const appIcon = '/images/app-icon.png';
const timerScreen = '/images/timer-screen.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-8 flex justify-center lg:justify-start">
              <img 
                src={appIcon} 
                alt="TapWork Icon" 
                className="h-24 w-24 rounded-[20px] shadow-2xl"
              />
            </div>
            
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Riprendi il controllo del tuo tempo.
            </h1>
            
            <p className="mb-10 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Smetti di perdere ore in fogli Excel. TapWork traccia automaticamente il tuo lavoro, gli straordinari e le pause. Tutto in un'app elegante che ti rispetta.
            </p>
            
            <motion.a
              href="https://testflight.apple.com/join/uahVF1EJ"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-[20px] bg-[#007AFF] px-10 py-5 text-lg text-white shadow-xl transition-all hover:shadow-2xl"
              style={{
                backdropFilter: 'blur(10px)',
                background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)',
              }}
            >
              <Download className="h-6 w-6" />
              <span>Prova la Beta su TestFlight</span>
            </motion.a>
          </motion.div>

          {/* Right Content - Device Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img 
                src={timerScreen} 
                alt="TapWork Timer" 
                className="h-auto w-full max-w-sm rounded-[40px] shadow-2xl"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 rounded-[50px] bg-[#007AFF]/20 blur-3xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
