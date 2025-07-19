import React from 'react';
import { X, User, MapPin, Calendar, AlertTriangle, Shield } from 'lucide-react';
import { Person } from '../types/Person';
import { useLanguage } from '../contexts/LanguageContext';

interface PersonModalProps {
  person: Person;
  isOpen: boolean;
  onClose: () => void;
}

const PersonModal: React.FC<PersonModalProps> = ({ person, isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'High':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-orange-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      case 'Low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {person.name} - {person.id}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <User className="h-16 w-16 text-gray-500 dark:text-gray-400 hidden" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-mono">
                    {person.nickname}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {t('person.age')}:
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white">
                      {person.age}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {t('person.platform')}:
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white">
                      {person.platform}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {t('person.location')}:
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {person.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {t('person.lastSeen')}:
                    </span>
                    <span className="text-sm text-gray-900 dark:text-white flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {person.lastSeen}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {t('person.riskLevel')}:
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskLevelColor(person.riskLevel)}`}>
                      {person.riskLevel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details and Crimes Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Case Details */}
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  {t('person.details')}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {person.details[language]}
                </p>
              </div>

              {/* Crimes Section */}
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {t('modal.crimeDetails')}
                </h4>
                
                <div className="space-y-4">
                  {person.crimes.map((crime) => (
                    <div key={crime.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          {crime.type} - {crime.id}
                        </h5>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getSeverityColor(crime.severity)}`}>
                          {crime.severity}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {crime.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-600 dark:text-gray-300">
                            {t('person.date')}:
                          </span>
                          <span className="ml-2 text-gray-900 dark:text-white">
                            {crime.date}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600 dark:text-gray-300">
                            {t('person.evidence')}:
                          </span>
                          <span className="ml-2 text-gray-900 dark:text-white">
                            {crime.evidence}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {t('modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonModal;