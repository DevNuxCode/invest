import React from 'react';
import { User, Globe, AlertCircle, CheckCircle, Clock, MapPin, Calendar } from 'lucide-react';
import { Person } from '../types/Person';
import { useLanguage } from '../contexts/LanguageContext';

interface PersonOfInterestProps {
  person: Person;
  onClick: () => void;
}

const PersonOfInterest: React.FC<PersonOfInterestProps> = ({ person, onClick }) => {
  const { t } = useLanguage();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Under Investigation':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'Active Case':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'Investigation Complete':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Investigation':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'Active Case':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'Investigation Complete':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

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

  return (
    <div 
      className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-16 h-16 mr-4 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center overflow-hidden">
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
              <User className="h-8 w-8 text-gray-500 dark:text-gray-400 hidden" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('person.id')}: {person.id}
              </p>
            </div>
          </div>
          {getStatusIcon(person.status)}
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-20">
              {t('person.nickname')}:
            </span>
            <span className="text-sm text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
              {person.nickname}
            </span>
          </div>

          <div className="flex items-center">
            <Globe className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-16">
              {t('person.platform')}:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {person.platform}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-20">
              {t('person.caseType')}:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {person.type}
            </span>
          </div>

          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-16">
              {t('person.location')}:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {person.location}
            </span>
          </div>

          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 w-16">
              {t('person.lastSeen')}:
            </span>
            <span className="text-sm text-gray-900 dark:text-white">
              {person.lastSeen}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {t('person.status')}:
            </span>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(person.status)}`}>
              {person.status}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {t('person.riskLevel')}:
            </span>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getRiskLevelColor(person.riskLevel)}`}>
              {person.riskLevel}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-300">
            {t('cases.viewDetails')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonOfInterest;