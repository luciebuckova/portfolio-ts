import { Element } from 'react-scroll';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <Element name="contact" className="py-16 md:py-32">
      <h3>Kontakt</h3>
      <ContactForm />
    </Element>
  );
}
