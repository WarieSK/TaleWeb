import React from 'react';
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Kontakt</h2>
      <div className="contact-container">
        <div className="contact-column">
          <h3>Email</h3>
          <p>info@dts.sk</p>
          <p>dts@info.eu</p>
        </div>
        <div className="contact-column">
          <h3>Telefón</h3>
          <p>+421 123 456 789</p>
          <p>+421 987 654 321</p>
        </div>
        <div className="contact-column">
          <h3>Adresa</h3>
          <p>Divadlo Teatrálnej Skratky</p>
          <p>Hlavná 123, 010 01 Bratislava</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
