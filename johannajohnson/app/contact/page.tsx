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
          formRef.current?.reset(); 
          setTimeout(() => setSubmitStatus(null), 5000);
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
      img: <img src="/Instagram_icon.png"/>,
      link: "https://instagram.com/yellowyocat",
      external: true
    },
    {
      name: "LinkedIn",
      img: <img src="/linkedinlogo.png"/>,
      link: "https://www.linkedin.com/in/johanna-johnson/",
      external: true
    },
    {
      name: "GitHub",
      img: <img src="/github.png"/>,
      link: "https://github.com/YellowYoCat",
      external: true
    },
    {
      name: "Twitter",
      img: <img src="/twitter.png"/>,
      link: "https://x.com/catMeowsboi",
      external: true
    },
    {
      name: "Pinterest",
      img: <img src="/pinterest.png"/>,
      link: "https://www.pinterest.com/yellowyocat/_pins/",
      external: true
    }
  ];

  return (
    <main className="container-contact">
      <section className="contactSection">
        <h2 className="heading">Contact</h2>

        {/* Contact Info Section */}
        <div className="contactInfo">
          <div className="infoItem">
            <div>
              <p className="infoLabel">Email</p>
              <a href="mailto:joh.rose.johnson@gmail.com" className="infoValue">
                joh.rose.johnson@gmail.com
              </a>
            </div>
          </div>
          
          <div className="infoItem">
            <div>
              <p className="infoLabel">Phone</p>
              <a href="tel:+(605)-376-0984" className="infoValue">
                +1 (605)-376-0984
              </a>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="card">
          <label className="label">Name</label>
          <input 
            type="text" 
            name="name"
            className="input" 
            required
            disabled={isSubmitting}
          />

          <label className="label">Email</label>
          <input 
            type="email" 
            name="email"
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
                <span className="socialIcon">{social.img}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

//   return (
//     <main className="container-contact">
//       <section className="contactSection">
//         <h2 className="heading">Contact</h2>

//         <form ref={formRef} onSubmit={sendEmail} className="card">
//           <label className="label">Name</label>
//           <input 
//             type="text" 
//             name="name"
//             className="input" 
//             required
//             disabled={isSubmitting}
//           />

//           <label className="label">Email</label>
//           <input 
//             type="email" 
//             name="email"
//             className="input" 
//             required
//             disabled={isSubmitting}
//           />

//           <label className="label">Message</label>
//           <textarea 
//             name="message"
//             className="textarea" 
//             required
//             disabled={isSubmitting}
//           ></textarea>

//           <button 
//             type="submit" 
//             className="submitButton"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </button>

//           {submitStatus === "success" && (
//             <div className="successMessage">
//               ✓ Message sent successfully! I'll get back to you soon.
//             </div>
//           )}

//           {submitStatus === "error" && (
//             <div className="errorMessage">
//               ✗ Failed to send message. Please try again later.
//             </div>
//           )}
//         </form>
//       </section>

//       <section className="socialSection">
//         <h3 className="socialHeading">Socials</h3>

//         <div className="socialIcons">
//           {socialLinks.map((social, index) => (
//             <a
//               key={index}
//               href={social.link}
//               target={social.external ? "_blank" : "_self"}
//               rel={social.external ? "noopener noreferrer" : ""}
//               className="socialLink"
//               aria-label={social.name}
//             >
//               <div className="circle">
//                 <span className="socialIcon">{social.img}</span>
//               </div>
//             </a>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }