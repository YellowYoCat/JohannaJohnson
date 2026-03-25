"use client";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    
    const serviceId = "service_zrw7zw8";
    const templateId = "template_7st6o7w";
    const publicKey = "hNe--GLm98RLK8g_x";

    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then(
        (result: any) => {
          console.log("Email sent successfully:", result.text);
          setSubmitStatus("success");
          formRef.current?.reset(); // Clear the form
          setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
        },
        (error: any) => {
          console.log("Failed to send email:", error.text);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const socialLinks = [
    {
      name: "Instagram",
      
      link: "https://instagram.com/yourusername",
      external: true
    },
    {
      name: "LinkedIn",
      
      link: "https://linkedin.com/in/yourusername",
      external: true
    },
    {
      name: "GitHub",
      
      link: "https://github.com/yourusername",
      external: true
    },
    {
      name: "Twitter",
      
      link: "https://twitter.com/yourusername",
      external: true
    },
    {
      name: "Pinterest",
      
      link: "https://behance.net/yourusername",
      external: true
    }
  ];

  return (
    <main className="container-contact">
      <section className="contactSection">
        <h2 className="heading">Contact</h2>

        <form ref={formRef} onSubmit={sendEmail} className="card">
          <label className="label">Name</label>
          <input 
            type="text" 
            name="user_name"
            className="input" 
            required
            disabled={isSubmitting}
          />

          <label className="label">Email</label>
          <input 
            type="email" 
            name="user_email"
            className="input" 
            required
            disabled={isSubmitting}
          />

          <label className="label">Message</label>
          <textarea 
            name="message"
            className="textarea" 
            required
            disabled={isSubmitting}
          ></textarea>

          <button 
            type="submit" 
            className="submitButton"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="successMessage">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="errorMessage">
              ✗ Failed to send message. Please try again later.
            </div>
          )}
        </form>
      </section>

      <section className="socialSection">
        <h3 className="socialHeading">Socials</h3>

        <div className="socialIcons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target={social.external ? "_blank" : "_self"}
              rel={social.external ? "noopener noreferrer" : ""}
              className="socialLink"
              aria-label={social.name}
            >
              <div className="circle">
                {/* <span className="socialIcon">{social.icon}</span> */}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}