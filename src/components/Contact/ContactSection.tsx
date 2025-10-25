import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Contact3D from './Contact3D';
import SectionTitle from '../shared/SectionTitle';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-20 px-4 bg-black overflow-hidden">
      {/* 3D Background */}
      <Contact3D />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      
      {/* Subtle overlay for form readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Fragen? Wir Sind Für Dich Da!"
          subtitle="Kontaktiere uns für eine kostenlose Beratung"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
