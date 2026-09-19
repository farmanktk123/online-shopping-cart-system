import React, { useState } from "react";
import "./Contact.css";
import Navbar from '../Navbar'

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ==============================
  // HANDLE INPUT
  // ==============================

  function handleChange(e) {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  }


  // ==============================
  // HANDLE SUBMIT
  // ==============================

  function handleSubmit(e) {

    e.preventDefault();

    console.log("Contact Form Data:", formData);

    setSubmitted(true);

    // Form clear
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Message hide after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

  }


  return (

    <div className="contact-page">
      <Navbar />

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have a question or need help?
            We are here to help you.
          </p>

        </div>

      </section>


      {/* =================================
          SUCCESS MESSAGE
      ================================= */}

      {submitted && (

        <div className="contact-success">

          ✅ Your message has been sent successfully!

        </div>

      )}


      {/* =================================
          CONTACT MAIN SECTION
      ================================= */}

      <section className="contact-container">


        {/* =================================
            CONTACT INFORMATION
        ================================= */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            If you have any questions about our products,
            orders or services, feel free to contact us.
          </p>


          {/* Email */}

          <div className="contact-item">

            <div className="contact-icon">
              📧
            </div>

            <div>

              <h3>Email</h3>

              <p>
                support@shoppingsite.com
              </p>

            </div>

          </div>


          {/* Phone */}

          <div className="contact-item">

            <div className="contact-icon">
              📞
            </div>

            <div>

              <h3>Phone</h3>

              <p>
                +92 300 1234567
              </p>

            </div>

          </div>


          {/* Address */}

          <div className="contact-item">

            <div className="contact-icon">
              📍
            </div>

            <div>

              <h3>Address</h3>

              <p>
                Islamabad, Pakistan
              </p>

            </div>

          </div>


          {/* Working Hours */}

          <div className="contact-item">

            <div className="contact-icon">
              🕐
            </div>

            <div>

              <h3>Working Hours</h3>

              <p>
                Monday - Saturday
                <br />
                9:00 AM - 8:00 PM
              </p>

            </div>

          </div>

        </div>


        {/* =================================
            CONTACT FORM
        ================================= */}

        <div className="contact-form-container">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>


            {/* Name */}

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Subject */}

            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>


            {/* Message */}

            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* =================================
          FAQ / SUPPORT SECTION
      ================================= */}

      <section className="contact-support">

        <h2>
          Need More Help?
        </h2>

        <p>
          Our customer support team is always ready
          to help you with your shopping experience.
        </p>

        <button>
          Contact Support
        </button>

      </section>

    </div>

  );
}

export default Contact;