import React from 'react';
import { Shield, Eye, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();

  return (
    <header id="home" className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Shield className="h-16 w-16" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('header.title')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-gray-300 max-w-4xl mx-auto">
            {t('header.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a href="#contact">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg">
              
              {t('header.reportEmergency')}

            </button></a>
            <a href="#services">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 border border-white/30">
              {t('header.viewServices')}
            </button></a>

          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Eye className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold mb-2">{t('header.monitoring')}</h3>
            <p className="text-blue-100 dark:text-gray-300">{t('header.monitoringDesc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Users className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold mb-2">{t('header.victimSupport')}</h3>
            <p className="text-blue-100 dark:text-gray-300">{t('header.victimSupportDesc')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Shield className="h-8 w-8 mx-auto mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold mb-2">{t('header.legalEvidence')}</h3>
            <p className="text-blue-100 dark:text-gray-300">{t('header.legalEvidenceDesc')}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;