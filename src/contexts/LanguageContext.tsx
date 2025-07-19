import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.cases': 'Active Cases',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Header
    'header.title': 'Federal Investigation Bureau',
    'header.subtitle': 'Protecting citizens from cybercrime, harassment, and digital threats through professional investigation services and victim protection programs.',
    'header.reportEmergency': 'Report Emergency',
    'header.viewServices': 'View Services',
    'header.monitoring': '24/7 Monitoring',
    'header.monitoringDesc': 'Continuous surveillance of digital threats',
    'header.victimSupport': 'Victim Support',
    'header.victimSupportDesc': 'Comprehensive protection for cyberbullying victims',
    'header.legalEvidence': 'Legal Evidence',
    'header.legalEvidenceDesc': 'Court-admissible digital evidence collection',
    
    // Services
    'services.title': 'Protection & Investigation Services',
    'services.subtitle': 'We specialize in protecting victims of cyberbullying and conducting thorough investigations to ensure digital safety and justice.',
    'services.cyberbullying': 'Cyberbullying Protection',
    'services.cyberbullyingDesc': 'Comprehensive protection services for victims of online harassment and cyberbullying.',
    'services.investigations': 'Digital Investigations',
    'services.investigationsDesc': 'Professional investigation services for online fraud, identity theft, and digital crimes.',
    'services.evidence': 'Evidence Collection',
    'services.evidenceDesc': 'Systematic collection and preservation of digital evidence for legal proceedings.',
    
    // Cases
    'cases.title': 'Active Investigation Cases',
    'cases.confidential': 'CONFIDENTIAL - For Authorized Personnel Only',
    'cases.subtitle': 'Current persons of interest in ongoing cybercrime and harassment investigations.',
    'cases.viewDetails': 'View Case Details',
    
    // Person Details
    'person.id': 'ID',
    'person.nickname': 'Nickname',
    'person.platform': 'Platform',
    'person.caseType': 'Case Type',
    'person.status': 'Status',
    'person.age': 'Age',
    'person.location': 'Location',
    'person.lastSeen': 'Last Seen',
    'person.riskLevel': 'Risk Level',
    'person.crimes': 'Crimes',
    'person.details': 'Details',
    'person.evidence': 'Evidence',
    'person.severity': 'Severity',
    'person.date': 'Date',
    
    // Contact
    'contact.title': 'Report an Incident',
    'contact.subtitle': 'If you\'re experiencing cyberbullying or need our investigation services, contact us immediately.',
    'contact.emergency': 'Emergency Contact Information',
    'contact.hotline': '24/7 Emergency Hotline',
    'contact.investigation': 'Investigation Department',
    'contact.headquarters': 'Headquarters',
    
    // Modal
    'modal.close': 'Close',
    'modal.crimeDetails': 'Crime Details',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error loading data',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.cases': 'Casos Activos',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Header
    'header.title': 'Oficina Federal de Investigación',
    'header.subtitle': 'Protegiendo a los ciudadanos del cibercrimen, acoso y amenazas digitales a través de servicios profesionales de investigación y programas de protección a víctimas.',
    'header.reportEmergency': 'Reportar Emergencia',
    'header.viewServices': 'Ver Servicios',
    'header.monitoring': 'Monitoreo 24/7',
    'header.monitoringDesc': 'Vigilancia continua de amenazas digitales',
    'header.victimSupport': 'Apoyo a Víctimas',
    'header.victimSupportDesc': 'Protección integral para víctimas de ciberacoso',
    'header.legalEvidence': 'Evidencia Legal',
    'header.legalEvidenceDesc': 'Recolección de evidencia digital admisible en tribunales',
    
    // Services
    'services.title': 'Servicios de Protección e Investigación',
    'services.subtitle': 'Nos especializamos en proteger a las víctimas de ciberacoso y realizar investigaciones exhaustivas para garantizar la seguridad digital y la justicia.',
    'services.cyberbullying': 'Protección contra Ciberacoso',
    'services.cyberbullyingDesc': 'Servicios integrales de protección para víctimas de acoso en línea y ciberacoso.',
    'services.investigations': 'Investigaciones Digitales',
    'services.investigationsDesc': 'Servicios profesionales de investigación para fraude en línea, robo de identidad y delitos digitales.',
    'services.evidence': 'Recolección de Evidencia',
    'services.evidenceDesc': 'Recolección y preservación sistemática de evidencia digital para procedimientos legales.',
    
    // Cases
    'cases.title': 'Casos de Investigación Activos',
    'cases.confidential': 'CONFIDENCIAL - Solo para Personal Autorizado',
    'cases.subtitle': 'Personas de interés actuales en investigaciones en curso de cibercrimen y acoso.',
    'cases.viewDetails': 'Ver Detalles del Caso',
    
    // Person Details
    'person.id': 'ID',
    'person.nickname': 'Apodo',
    'person.platform': 'Plataforma',
    'person.caseType': 'Tipo de Caso',
    'person.status': 'Estado',
    'person.age': 'Edad',
    'person.location': 'Ubicación',
    'person.lastSeen': 'Visto por Última Vez',
    'person.riskLevel': 'Nivel de Riesgo',
    'person.crimes': 'Delitos',
    'person.details': 'Detalles',
    'person.evidence': 'Evidencia',
    'person.severity': 'Severidad',
    'person.date': 'Fecha',
    
    // Contact
    'contact.title': 'Reportar un Incidente',
    'contact.subtitle': 'Si estás experimentando ciberacoso o necesitas nuestros servicios de investigación, contáctanos inmediatamente.',
    'contact.emergency': 'Información de Contacto de Emergencia',
    'contact.hotline': 'Línea Directa de Emergencia 24/7',
    'contact.investigation': 'Departamento de Investigación',
    'contact.headquarters': 'Sede Central',
    
    // Modal
    'modal.close': 'Cerrar',
    'modal.crimeDetails': 'Detalles del Delito',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error al cargar datos',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};