import { motion } from 'framer-motion';
import { Contact } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '@/services';
import Button from '../Reusables/Button';
import '../../assets/sass/sections-common-style.scss';
import './ContactSection.scss';

export default function ContactSection() {
  const { data: contacts = [] } = useQuery<Contact[]>({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="contact-section"
    >
      <div className="content contact-content">
        <div className="contact-text">
          <div className="contact-head">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Une idée de site web, d&apos;application ou de SaaS ?
            </motion.p>
          </div>
          <h1>
            Travaillons <span>ensemble </span>sur une solution innovante
          </h1>
          <p>
            N&apos;hésitez pas à me contacter par mail ou via mes réseaux
            sociaux.
          </p>
        </div>
        <div className="contact-buttons-container">
          {contacts.map((contact, index) => (
            <Button
              key={contact.name}
              name={contact.name}
              icon={contact.icon}
              link={contact.link}
              target={contact.target}
              rel={contact.rel}
              className={index === 2 ? 'button cta-button' : 'button'}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
