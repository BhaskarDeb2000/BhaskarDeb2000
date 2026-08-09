import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../ui/SectionHeader';
import { fadeUp, staggerContainer } from '../../lib/motion';

export default function Education() {
  const { t } = useLanguage();
  const [certsOpen, setCertsOpen] = useState(false);
  const { certs, showCerts, hideCerts, items, title, subtitle } = t.education;

  return (
    <section className="py-32 border-t border-border/50">
      <div className="section-container">
        <SectionHeader
          id="education"
          index={5}
          label={t.nav.education}
          title={title}
          lead={subtitle}
        />

        <motion.div
          className="mt-4 grid gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="panel-hover p-6 sm:p-7"
              variants={fadeUp}
              custom={i}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{item.degree}</h3>
                  <p className="text-sm text-accent mt-1">{item.school}</p>
                  {item.location && (
                    <p className="text-xs text-fg-muted mt-1.5">{item.location}</p>
                  )}
                </div>
                <p className="font-mono text-xs text-fg-muted">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {certs.length > 0 && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setCertsOpen(!certsOpen)}
              className="flex items-center gap-2 font-mono text-xs text-fg-muted hover:text-accent transition-colors"
            >
              <ChevronDown size={14} className={`transition-transform duration-300 ${certsOpen ? 'rotate-180' : ''}`} />
              {certsOpen ? hideCerts : showCerts} ({certs.length})
            </button>
            <AnimatePresence>
              {certsOpen && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-2"
                >
                  {certs.map((cert, i) => (
                    <motion.li
                      key={cert.file}
                      className="text-xs text-fg-muted py-2 border-b border-border/40"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 hover:text-accent transition-colors"
                      >
                        <span>{cert.name}</span>
                        <ArrowUpRight
                          size={12}
                          className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0"
                        />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
