import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Shield, Search, FileText, Phone, Mail, MapPin, Users, Eye, AlertTriangle, Globe } from 'lucide-react';
import Header from './components/Header';
import PersonOfInterest from './components/PersonOfInterest';
import PersonModal from './components/PersonModal';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Map from './components/Map';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { usePersons } from './hooks/usePersons';
import { Person } from './types/Person';

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const { t, language, setLanguage } = useLanguage();
  const { persons, loading, error } = usePersons();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        {/* Navigation */}
        <nav className="bg-blue-900 dark:bg-gray-800 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8" />
                <span className="font-bold text-xl">{t('header.title')}</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="hover:text-blue-200 transition-colors">{t('nav.home')}</a>
                <a href="#cases" className="hover:text-blue-200 transition-colors">{t('nav.cases')}</a>
                <a href="#services" className="hover:text-blue-200 transition-colors">{t('nav.services')}</a>
                <a href="#contact" className="hover:text-blue-200 transition-colors">{t('nav.contact')}</a>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center space-x-1 p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center space-x-1 p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
                </button>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-700 transition-colors"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-blue-800 dark:bg-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 hover:bg-blue-700 dark:hover:bg-gray-600 rounded-md transition-colors">{t('nav.home')}</a>
                <a href="#cases" className="block px-3 py-2 hover:bg-blue-700 dark:hover:bg-gray-600 rounded-md transition-colors">{t('nav.cases')}</a>
                <a href="#services" className="block px-3 py-2 hover:bg-blue-700 dark:hover:bg-gray-600 rounded-md transition-colors">{t('nav.services')}</a>
                <a href="#contact" className="block px-3 py-2 hover:bg-blue-700 dark:hover:bg-gray-600 rounded-md transition-colors">{t('nav.contact')}</a>
              </div>
            </div>
          )}
        </nav>


        {/* Header */}
        <Header />



        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('services.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{t('services.cyberbullying')}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('services.cyberbullyingDesc')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Search className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{t('services.investigations')}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('services.investigationsDesc')}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold">{t('services.evidence')}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('services.evidenceDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Persons of Interest Section */}
        <section id="cases" className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('cases.title')}
              </h2>
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <p className="text-red-600 dark:text-red-400 font-semibold">
                  {t('cases.confidential')}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {t('cases.subtitle')}
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">{t('common.loading')}</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <p className="text-red-600 dark:text-red-400">{t('common.error')}: {error}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {persons.map((person) => (
                  <PersonOfInterest 
                    key={person.id} 
                    person={person} 
                    onClick={() => handlePersonClick(person)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                    {t('contact.emergency')}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold">{t('contact.hotline')}</p>
                        <p className="text-gray-600 dark:text-gray-300">1-800-CYBER-HELP</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold">{t('contact.investigation')}</p>
                        <p className="text-gray-600 dark:text-gray-300">investigations@fib.gov</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" />
                      <div>
                        <p className="font-semibold">{t('contact.headquarters')}</p>
                        <p className="text-gray-600 dark:text-gray-300">1000 Investigation Drive<br />Washington, DC 20001</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Important:</strong> {t('contact.important')} </p>< br/>
                      
                  </div>
                   {/* Widget embebido de Kaspersky Cybermap */}
                        <Map />
                </div>
              </div>
                

              <div>
                <ContactForm />
                
      
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
          <Footer />  
        </section>

        {/* Person Modal */}
        {selectedPerson && (
          <PersonModal
            person={selectedPerson}
            isOpen={modalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;