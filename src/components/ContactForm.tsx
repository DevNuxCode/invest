import React, { useState } from 'react';
import { Send, AlertTriangle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    incidentType: '',
    urgency: '',
    description: '',
    evidence: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a secure government server
    console.log('Form submitted:', formData);
    alert('Report submitted successfully. An agent will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      incidentType: '',
      urgency: '',
      description: '',
      evidence: ''
    });
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Incident Report Form
        </h3>
      </div>

      <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-sm text-red-800 dark:text-red-200">
          <strong>Secure Submission:</strong> This form uses encrypted transmission to protect your privacy and safety.
          All reports are handled by trained investigators with the highest level of confidentiality.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Incident Type *
            </label>
            <select
              id="incidentType"
              name="incidentType"
              required
              value={formData.incidentType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select incident type</option>
              <option value="cyberbullying">Cyberbullying</option>
              <option value="harassment">Online Harassment</option>
              <option value="stalking">Digital Stalking</option>
              <option value="fraud">Online Fraud</option>
              <option value="identity-theft">Identity Theft</option>
              <option value="threats">Online Threats</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Urgency Level *
            </label>
            <select
              id="urgency"
              name="urgency"
              required
              value={formData.urgency}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            >
              <option value="">Select urgency</option>
              <option value="critical">Critical - Immediate threat</option>
              <option value="high">High - Ongoing harassment</option>
              <option value="medium">Medium - Regular monitoring</option>
              <option value="low">Low - General inquiry</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Incident Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            placeholder="Provide detailed information about the incident, including dates, platforms, and specific threats or harassment..."
          />
        </div>

        <div>
          <label htmlFor="evidence" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Evidence Information
          </label>
          <textarea
            id="evidence"
            name="evidence"
            rows={3}
            value={formData.evidence}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
            placeholder="Describe any evidence you have (screenshots, messages, usernames, URLs, etc.). Do not include actual evidence in this form - our agents will contact you for secure evidence transfer."
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="consent"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:border-gray-600"
          />
          <label htmlFor="consent" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            I consent to investigation and understand this report may be used in legal proceedings *
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
        >
          <Send className="h-5 w-5 mr-2" />
          Submit Secure Report
        </button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Next Steps:</strong> After submission, you'll receive a case number within 2 hours. 
          A specialized agent will contact you within 24 hours to discuss your case and evidence collection.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;