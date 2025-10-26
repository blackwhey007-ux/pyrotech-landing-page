import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/shared/SectionTitle';

const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Impressum"
            subtitle="Angaben gemäß § 5 TMG"
          />

          <motion.div
            className="mt-12 space-y-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Placeholder Section */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Firmeninformationen</h3>
              <p className="text-gray-400 italic">
                Bitte fügen Sie hier Ihre Firmenangaben, Kontaktdaten und rechtlichen Informationen hinzu.
              </p>
            </div>

            {/* Standard German Legal Sections - Update with your info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Vertreten durch:
                </h3>
                <p className="text-gray-300">
                  [Geschäftsführer Name einfügen]
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Kontakt:
                </h3>
                <p className="text-gray-300">
                  Telefon: [Telefonnummer]<br />
                  E-Mail: [E-Mail-Adresse]
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Registereintrag:
                </h3>
                <p className="text-gray-300">
                  Registergericht: [Register]<br />
                  Registernummer: [Nummer]
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                </h3>
                <p className="text-gray-300">
                  [Name und Adresse]
                </p>
              </div>

              <div className="pt-8 border-t border-gray-800">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                  Haftungsausschluss
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpressumPage;

