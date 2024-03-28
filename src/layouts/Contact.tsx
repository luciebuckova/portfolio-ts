import { Element } from 'react-scroll';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <Element name="contact" className="min-h-screen py-8 md:py-32">
      <h3>Kontakt</h3>
      <ContactForm />
    </Element>
  );
}
