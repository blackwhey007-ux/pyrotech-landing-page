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
            {/* Company Information */}
            <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-800 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-yellow mb-3">
                  Angaben gemäß § 5 TMG
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Pyrotech Event<br />
                  Inhaber: Sami Marwani<br />
                  Arcadiastr.24<br />
                  40472 Düsseldorf<br />
                  Deutschland
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-yellow mb-3">
                  Kontakt:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Telefon: <a href="tel:01601203077" className="text-primary-yellow hover:underline">0160 1203077</a><br />
                  E-Mail: <a href="mailto:pyrotechevent@gmx.de" className="text-primary-yellow hover:underline">pyrotechevent@gmx.de</a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-yellow mb-3">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  5105 105 5105050893685
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-yellow mb-3">
                  Aufsichtsbehörde / Genehmigung nach SprengG:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Erlaubnis nach § 7 Sprengstoffgesetz (SprengG)<br />
                  erteilt durch die<br />
                  Bezirksregierung Düsseldorf<br />
                  Cecilienallee 2<br />
                  40474 Düsseldorf
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-yellow mb-3">
                  Berufshaftpflichtversicherung:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Gothaer Versicherung
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-yellow mb-3">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Sami Marwani<br />
                  Arcadiastr.24<br />
                  40472 Düsseldorf
                </p>
              </div>
            </div>

            {/* Disclaimer Section */}
            <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-800 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Haftungsausschluss (Disclaimer)
              </h3>

              <div>
                <h4 className="text-xl font-semibold text-primary-yellow mb-3">
                  Haftung für Inhalte
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden diese Inhalte umgehend entfernt.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary-yellow mb-3">
                  Haftung für Links
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary-yellow mb-3">
                  Urheberrecht
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary-yellow mb-3">
                  Abmahnungen ohne vorherigen Kontakt
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Sollte der Inhalt oder die Gestaltung dieser Website Rechte Dritter oder gesetzliche Bestimmungen verletzen, bitte ich gemäß § 8 Abs. 4 UWG um eine entsprechende Nachricht ohne Kostennote. Ich garantiere, dass zu Recht beanstandete Passagen unverzüglich entfernt oder angepasst werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Die Einschaltung eines Anwalts zur kostenpflichtigen Abmahnung entspricht nicht dem wirklichen oder mutmaßlichen Willen des Betreibers und würde daher einen Verstoß gegen § 13 Abs. 5 UWG (Verfolgung sachfremder Ziele, insbesondere Kostenerzielungsabsicht) sowie gegen die Schadensminderungspflicht darstellen. Ohne vorherige Kontaktaufnahme ausgelöste Kosten werden vollständig zurückgewiesen.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary-yellow mb-3">
                  Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36 VSBG
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:<br />
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-yellow hover:underline inline-flex items-center gap-1">
                    👉 https://ec.europa.eu/consumers/odr
                  </a><br />
                  <br />
                  Ich bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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

