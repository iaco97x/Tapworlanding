import { motion } from 'motion/react';
import { Clock, Timer, TrendingUp, Bell } from 'lucide-react';

const features = [
  {
    icon: Timer,
    title: 'Un tap per iniziare',
    description: 'Niente complicazioni. Apri l\'app, premi start e TapWork pensa a tutto. Il timer circolare ti mostra sempre dove sei nella tua giornata.',
    color: '#007AFF',
    bgColor: 'bg-[#007AFF]/10',
  },
  {
    icon: Clock,
    title: 'Pause che contano davvero',
    description: 'La pausa caffè? Registrata. Il pranzo? Tracciato. TapWork sa che le pause sono essenziali e ti aiuta a prenderle sul serio.',
    color: '#FF9500',
    bgColor: 'bg-[#FF9500]/10',
  },
  {
    icon: TrendingUp,
    title: 'Straordinari visibili (finalmente)',
    description: 'Lavori fino a tardi? TapWork lo documenta in modo cristallino. Perfetto per giustificare recuperi o chiedere compensi.',
    color: '#FF2D55',
    bgColor: 'bg-[#FF2D55]/10',
  },
  {
    icon: Bell,
    title: 'Protezione automatica dal burnout',
    description: 'Ti avvisa quando esageri. Se superi le ore previste, ricevi una notifica gentile che ti ricorda di staccare.',
    color: '#007AFF',
    bgColor: 'bg-[#007AFF]/10',
  },
];

export function Features() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
            Progettata per chi lavora davvero.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Non funzionalità inutili. Solo quello che serve per tracciare il tuo tempo senza impazzire.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-[20px] bg-[#F2F2F7] p-8 transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className={`mb-6 inline-flex rounded-full ${feature.bgColor} p-4`}>
                <feature.icon className="h-8 w-8" style={{ color: feature.color }} />
              </div>
              <h3 className="mb-4 text-2xl">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
