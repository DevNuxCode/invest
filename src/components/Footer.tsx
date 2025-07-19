import React from 'react';
import { Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Agency Information */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <span className="text-2xl font-bold">Federal Investigation Bureau</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A specialized federal agency dedicated to protecting citizens from cybercrime, 
              digital harassment, and online threats through professional investigation services 
              and comprehensive victim protection programs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="Emergency Services"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Protection Services
                </a>
              </li>
              <li>
                <a href="#cases" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Active Cases
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Report Incident
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Victim Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-400">24/7 Hotline</p>
                  <p className="text-gray-300">1-800-CYBER-HELP</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-semibold">Investigation Dept.</p>
                  <p className="text-gray-300">investigations@fib.gov</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-semibold">Headquarters</p>
                  <p className="text-gray-300">1000 Investigation Drive<br />Washington, DC 20001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Federal Investigation Bureau. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                This is a demonstration website for educational purposes only.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                FOIA Requests
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-800 rounded-lg">
          <p className="text-yellow-200 text-xs leading-relaxed">
            <strong>LEGAL DISCLAIMER:</strong> This website is for demonstration purposes only and does not represent 
            an actual government agency. In real emergencies, contact local law enforcement (911) or relevant authorities. 
            All case information displayed is fictional and for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;