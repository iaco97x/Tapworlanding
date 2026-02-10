import { motion } from 'motion/react';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

const smartFeatures = [
  {
    icon: MapPin,
    title: 'Si accorge quando arrivi',
    description: 'Geofencing automatico',
    detail: 'Configuralo una volta: quando arrivi in ufficio, TapWork ti manda una notifica per avviare il timer. Mai più dimenticanze.',
    color: '#007AFF',
  },
  {
    icon: Calendar,
    title: 'Si adatta al tuo ritmo',
    description: 'Orari diversi ogni giorno',
    detail: 'Lunedì 8 ore, martedì 6, venerdì part-time? Nessun problema. Imposti gli obiettivi per ogni giorno e TapWork calcola tutto automaticamente.',
    color: '#FF9500',
  },
  {
    icon: Sparkles,
    title: 'Ti fa sorridere (o piangere)',
    description: 'Fun facts che fanno riflettere',
    detail: '"Con questi straordinari avresti potuto guardare Avengers: Endgame 3 volte." Statistiche che mettono in prospettiva il tempo perso.',
    color: '#FF2D55',
  },
];

export function SmartFeatures() {
  return (
    <section className="px-6 py-20 md:py-32 bg-[#F2F2F7]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            Intelligenza che ti semplifica la vita.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TapWork non è un semplice cronometro. Impara le tue abitudini, si adatta al tuo lavoro e ti protegge dallo stress.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {smartFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[20px] bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex rounded-full p-4"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon className="h-10 w-10" style={{ color: feature.color }} />
              </motion.div>
              
              <h3 className="mb-3 text-2xl">{feature.title}</h3>
              <p className="mb-4 text-lg" style={{ color: feature.color }}>
                {feature.description}
              </p>
              <p className="text-gray-600 leading-relaxed">{feature.detail}</p>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                className="mt-6 h-1 rounded-full origin-left"
                style={{ backgroundColor: feature.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
