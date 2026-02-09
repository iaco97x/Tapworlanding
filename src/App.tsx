import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { SmartFeatures } from './components/SmartFeatures';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Dashboard />
      <Features />
      <SmartFeatures />
      <Footer />
    </div>
  );
}
