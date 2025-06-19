import Reveal from './Reveal'; // Import

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Reveal> {/* Replace */}
        <h2 className="section-title">Ready to Build Something Amazing?</h2>
        <p className="section-subtitle">Let's discuss your project and create innovative software solutions together. Contact our experts for a personalized consultation.</p>
      </Reveal>
      
      <Reveal> {/* Replace */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Company" />
          <textarea placeholder="Tell us about your project requirements..."></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;