import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '../../utils/validation';
import { EVENT_TYPES } from '../../utils/constants';
import Button from '../shared/Button';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formId = (import.meta as any).env?.VITE_FORMSPREE_FORM_ID;
      
      // Check if Formspree ID is configured
      if (!formId || formId === 'your_form_id_here') {
        console.warn('Formspree form ID not configured. Please set VITE_FORMSPREE_FORM_ID in your .env file');
        // Simulate successful submission for development
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        reset();
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        const errorData = await response.json();
        console.error('Form submission failed:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">
        Beratung Anfragen
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300"
            placeholder="Ihr vollständiger Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-primary-red">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-white font-medium mb-2">
            Telefon *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300"
            placeholder="+49 (0) 123 456 789"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-primary-red">{errors.phone.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            E-Mail *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300"
            placeholder="ihre@email.de"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-primary-red">{errors.email.message}</p>
          )}
        </div>

        {/* Event Type Field */}
        <div>
          <label htmlFor="eventType" className="block text-white font-medium mb-2">
            Eventtyp *
          </label>
          <select
            {...register('eventType')}
            id="eventType"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-primary-yellow focus:outline-none transition-colors duration-300"
          >
            <option value="">Bitte wählen...</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-black">
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className="mt-1 text-sm text-primary-red">{errors.eventType.message}</p>
          )}
        </div>

        {/* Preferred Date Field */}
        <div>
          <label htmlFor="preferredDate" className="block text-white font-medium mb-2">
            Wunschdatum
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-primary-yellow focus:outline-none transition-colors duration-300"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white font-medium mb-2">
            Nachricht
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300 resize-none"
            placeholder="Erzählen Sie uns mehr über Ihr Event..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-primary-red">{errors.message.message}</p>
          )}
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            {...register('privacyAccepted')}
            type="checkbox"
            id="privacyAccepted"
            className="mt-1 w-4 h-4 text-primary-yellow bg-black/50 border-white/20 rounded focus:ring-primary-yellow focus:ring-2"
          />
          <label htmlFor="privacyAccepted" className="text-text-secondary text-sm leading-relaxed">
            Ich akzeptiere die{' '}
            <a href="#" className="text-primary-yellow hover:underline">
              Datenschutzbedingungen
            </a>{' '}
            und stimme der Verarbeitung meiner Daten zu. *
          </label>
        </div>
        {errors.privacyAccepted && (
          <p className="text-sm text-primary-red">{errors.privacyAccepted.message}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Beratung Anfragen 🚀'}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
