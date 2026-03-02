/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone, Calendar, MapPin, ChevronRight, Star, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-neutral-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              OTT DOG
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-orange-500 transition-colors uppercase tracking-wider">
              Privatisation
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-sm font-medium hover:text-orange-500 transition-colors uppercase tracking-wider">
              Le Menu
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(234,88,12,0.5)] transition-all transform hover:scale-105"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-neutral-900 border-t border-neutral-800 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-orange-500 font-medium">
              Privatisation
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-left py-2 hover:text-orange-500 font-medium">
              Le Menu
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-orange-500 font-bold">
              Contact
            </button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop"
            alt="Food Truck Atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
              Le Hot-Dog Gastronomique à Angers
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
              Privatisez le <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">1er Food Truck</span><br />
              de Hot-Dogs d'Angers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Campus, Entreprises, Communes : Marquez les esprits avec des recettes artisanales et une ambiance unique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Demander un devis rapide <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* B2B Section (Why Choose Us) */}
      <section id="services" className="py-24 bg-neutral-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Une Offre Sur-Mesure</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-neutral-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <GraduationCap className="text-orange-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Campus & BDE</h3>
              <p className="text-gray-400 leading-relaxed">
                Soirées d'intégration, galas ou pauses déjeuner. Offrez aux étudiants une alternative street-food de qualité, rapide et conviviale.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-neutral-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Briefcase className="text-orange-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Événements d'Entreprise</h3>
              <p className="text-gray-400 leading-relaxed">
                Team building, inaugurations ou repas de fin d'année. Une solution clé en main pour fédérer vos équipes autour d'un repas original.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-orange-500/50 transition-all group"
            >
              <div className="w-16 h-16 bg-neutral-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Users className="text-orange-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fêtes de Communes</h3>
              <p className="text-gray-400 leading-relaxed">
                Marchés, festivals ou événements publics. Nous gérons les gros volumes avec le sourire et une rapidité d'exécution exemplaire.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nos Best-Sellers</h2>
              <p className="text-gray-400 max-w-lg">Des produits frais, du pain boulanger et des recettes qui ont fait leurs preuves.</p>
            </div>
            <button className="text-orange-500 font-bold hover:text-orange-400 flex items-center gap-2 group">
              Voir toute la carte <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "L'Authentique",
                desc: "Saucisse artisanale fumée, pain brioché toasté, ketchup maison, moutarde au miel, oignons frits croustillants.",
                img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?q=80&w=2670&auto=format&fit=crop"
              },
              {
                title: "Le Cheesy King",
                desc: "Saucisse de volaille, pain brioché, double cheddar fondu, sauce fromagère onctueuse, éclats de bacon grillé.",
                img: "https://images.unsplash.com/photo-1541214113241-fb17f0d018aa?q=80&w=2670&auto=format&fit=crop"
              },
              {
                title: "Le Spicy Ott",
                desc: "Saucisse épicée, confit d'oignons rouges, jalapeños, sauce sriracha-mayo, coriandre fraîche.",
                img: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2680&auto=format&fit=crop"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors">{item.title}</h3>
                  <div className="flex text-orange-500">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-900/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Prêt à régaler <br />vos invités ?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ne laissez pas la faim gâcher la fête. Contactez-nous dès maintenant pour bloquer votre date.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Appelez Joël directement</p>
                    <p className="text-xl font-bold">06.44.89.08.12</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Zone d'intervention</p>
                    <p className="text-xl font-bold">Angers & alentours (49)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 p-8 md:p-10 rounded-3xl border border-neutral-700 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Votre Nom</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Entreprise / Campus</label>
                  <input
                    type="text"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                    placeholder="Nom de votre structure"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Date de l'événement</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all [color-scheme:dark]"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(234,88,12,0.4)] transition-all transform hover:scale-[1.02]"
                >
                  Envoyer ma demande
                </button>
                
                <p className="text-xs text-center text-gray-500">
                  Réponse sous 24h garantie.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-display font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            OTT DOG
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ott Dog Food Truck. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Mentions Légales</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

