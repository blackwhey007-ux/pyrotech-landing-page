import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { contactFormSchema, ContactFormData } from '../../utils/validation';
import { EVENT_TYPES } from '../../utils/constants';
import { trackLead, trackContact } from '../../utils/facebookPixel';
import Button from '../shared/Button';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
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
      // Use hardcoded Formspree ID to ensure it always works
      const formId = 'mrbozbbz';
      
      console.log('🚀 Submitting form to Formspree:', `https://formspree.io/f/${formId}`);
      console.log('📝 Form data:', data);

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('✅ Form submitted successfully to Formspree!');
        setSubmitStatus('success');
        reset();
        
        // Track Facebook Pixel events
        trackLead(); // Track as Lead event
        trackContact(); // Track as Contact event
      } else {
        const errorData = await response.json();
        console.error('❌ Form submission failed:', errorData);
        console.error('Response status:', response.status);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Create WhatsApp message
    const message = `Hallo! Ich interessiere mich für ein Feuerwerk-Event:

👤 Name: ${data.name}
📞 Telefon: ${data.phone}
📧 E-Mail: ${data.email}
🎉 Eventtyp: ${data.eventType}
📅 Wunschdatum: ${data.preferredDate || 'Nicht angegeben'}
💬 Nachricht: ${data.message || 'Keine zusätzliche Nachricht'}

Ich freue mich auf Ihre Rückmeldung!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL with your actual phone number
    const whatsappUrl = `https://wa.me/491601203077?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
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
        {t('contact.title')}
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white font-medium mb-2">
            {t('contact.name')}
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300"
            placeholder={t('contact.placeholderName')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-primary-red">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-white font-medium mb-2">
            {t('contact.phone')}
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300"
            placeholder="+49 160 120 30 77"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-primary-red">{errors.phone.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white font-medium mb-2">
            {t('contact.email')}
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300"
            placeholder={t('contact.placeholderEmail')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-primary-red">{errors.email.message}</p>
          )}
        </div>

        {/* Event Type Field */}
        <div>
          <label htmlFor="eventType" className="block text-white font-medium mb-2">
            {t('contact.eventType')}
          </label>
          <select
            {...register('eventType')}
            id="eventType"
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-primary-yellow focus:outline-none transition-colors duration-300"
          >
            <option value="">{t('contact.selectEvent')}</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-black">
                {t(`contact.eventTypes.${type}`)}
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
            {t('contact.date')}
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
            {t('contact.message')}
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-text-secondary focus:border-primary-yellow focus:outline-none transition-colors duration-300 resize-none"
            placeholder={t('contact.placeholderMessage')}
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
            {t('contact.privacy')}
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
          {isSubmitting ? t('contact.loading') : t('contact.submit')}
        </Button>

        {/* WhatsApp Button */}
        <Button
          type="button"
          variant="secondary"
          size="lg"
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700"
        >
          {t('contact.whatsapp')}
        </Button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('contact.success')}
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('contact.error')}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
