import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <>
    
    <div className="contact">
      <div className="contact__title">
        <h1>Əlaqə</h1>
      </div>
      <div className="contact__adress">
        <h2>Ünvan</h2>
        <ul>
          <li>
            8 noyabr prospekti, Azure Biznes Mərkəzi, 18-ci mərtəbə. Bakı, AZ
            1025, Azərbaycan
          </li>
        </ul>
      </div>
      <div className="contact__location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1519.6874705882547!2d49.875107!3d40.378382!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIyJzQyLjgiTiA0OcKwNTInMjguMSJF!5e0!3m2!1sen!2sus!4v1702473011036!5m2!1sen!2sus"
          style={{width:"560.8px", height:"264.6px", border:"0" }}
          
          
          
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact__item">
        <h2>Telefon</h2>
        <ul>
          <li>
            <a href="tel:994 12 434 50 30">+994 12 434 50 30</a>
          </li>
          <li>
            <a href="tel:994 12 488 64 91">+994 12 488 64 91</a>
          </li>
          <li>
            <a href="tel:994 12 488 64 92">994 12 488 64 92</a>
          </li>
        </ul>
      </div>
      <div className="contact__item">
        <h2>Mobil</h2>
        <ul>
          <li>
            <a href="tel:994 50 205 66 20">+994 50 205 66 20</a>
          </li>
          <li>
            <a href="tel:994 50 208 90 25">+994 50 208 90 25</a>
          </li>
        </ul>
      </div>
      <div className="contact__item">
        <h2>E-mail</h2>
        <ul>
          <li>
            <a href="mailto:info@jobsearch.az">info@jobsearch.az</a>
          </li>
        </ul>
      </div>
    </div>

    </>
  );
}

export default Contact;
