import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <h1 className="text_head text_center">Contact Us</h1>
      <ContactCard />

      <section className="contact_section">
        <h3>We would love to hear from you</h3>
        <ContactForm />
      </section>

    </>
  )
}

export default Contact;