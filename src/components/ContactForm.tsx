import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

interface ContactFormProps {
  appName: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ appName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      setSubmitting(false);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl p-6">
      <div className="flex items-center mb-4">
        <Mail className="text-purple-500 mr-2" />
        <h3 className="text-xl font-semibold text-white">Contact the Developer</h3>
      </div>
      
      <p className="text-gray-300 mb-4">
        This app is currently in testing. Please contact the developer if you're interested in trying the beta version of {appName}.
      </p>
      
      {submitted ? (
        <div className="bg-green-900/20 border border-green-500/30 text-green-300 p-4 rounded-lg">
          Thank you for your message! The developer will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-900/20 border border-red-500/30 text-red-300 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="What would you like to know about this app?"
            />
          </div>
          
          <button
            type="submit"
            disabled={submitting}
            className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-colors ${
              submitting 
                ? 'bg-purple-700/50 text-purple-300 cursor-not-allowed' 
                : 'bg-purple-600 hover:bg-purple-700 text-white'
            }`}
          >
            {submitting ? (
              <>
                <div className="h-4 w-4 border-2 border-purple-300 border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;