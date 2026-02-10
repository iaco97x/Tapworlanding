import { motion } from 'motion/react';
import { BarChart3, PieChart } from 'lucide-react';

// Per GitHub Pages: usa path relativi alla cartella public/
const activityScreen = '/tapworlanding/images/activity-screen.png';
const weekScreen = '/tapworlanding/images/week-screen.png';

export function Dashboard() {
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
            Vedi dove va davvero il tuo tempo.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Non più numeri sparsi o calcoli manuali. I grafici interattivi ti mostrano immediatamente quanto lavori, quando fai straordinari e dove prendi le tue pause. Finalmente chiarezza.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bar Chart Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[20px] bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#007AFF]/10 p-3">
                <BarChart3 className="h-6 w-6 text-[#007AFF]" />
              </div>
              <h3 className="text-2xl">Il tuo mese in un'immagine</h3>
            </div>
            <p className="mb-6 text-gray-600">
              Ogni giorno è una barra. Blu per il lavoro normale, rosa per gli straordinari, arancione per le pause. Niente di più semplice per capire se stai lavorando troppo.
            </p>
            <img 
              src={activityScreen} 
              alt="Activity Chart" 
              className="rounded-[20px] shadow-xl"
            />
          </motion.div>

          {/* Donut Rings Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[20px] bg-white p-8 shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-[#FF9500]/10 p-3">
                <PieChart className="h-6 w-6 text-[#FF9500]" />
              </div>
              <h3 className="text-2xl">I tuoi anelli di produttività</h3>
            </div>
            <p className="mb-6 text-gray-600">
              Come gli anelli di attività di Apple, ma per il lavoro. Raggiungi i tuoi obiettivi giornalieri senza bruciare te stesso. Equilibrio, non burnout.
            </p>
            <img 
              src={weekScreen} 
              alt="Week Donut Rings" 
              className="rounded-[20px] shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
