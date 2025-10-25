import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SectionTitle from '../shared/SectionTitle';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
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
