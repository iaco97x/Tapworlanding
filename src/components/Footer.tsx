import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="px-6 py-16 bg-[#F2F2F7]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl mb-3">TapWork</h3>
            <p className="text-xl text-gray-600">
              Il tuo tempo merita rispetto. Inizia oggi.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 rounded-[20px] bg-[#007AFF] px-8 py-4 text-white shadow-lg transition-all hover:shadow-xl mb-8"
          >
            <span>Scarica su App Store</span>
          </motion.button>
          
          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              © 2026 TapWork. Tutti i diritti riservati.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
