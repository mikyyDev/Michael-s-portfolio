import { Mail } from "lucide-react";
import { useState } from "react";
import SocialLinks from "../common/SocialLinks";

function Contact({ socials, contact }) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({
    isSubmitting: false,
    status: "idle",
    message: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!contact.formspreeEndpoint) {
      setSubmitState({
        isSubmitting: false,
        status: "error",
        message:
          "Formspree endpoint is not configured. Add VITE_FORMSPREE_ENDPOINT in your .env file.",
      });
      return;
    }

    setSubmitState({ isSubmitting: true, status: "idle", message: "" });

    try {
      const response = await fetch(contact.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      setSubmitState({
        isSubmitting: false,
        status: "success",
        message: "Message sent successfully. Thanks for reaching out!",
      });
      setFormValues({ name: "", email: "", message: "" });
    } catch {
      setSubmitState({
        isSubmitting: false,
        status: "error",
        message: "Unable to send right now. Please try again in a moment.",
      });
    }
  };

  return (
    <section
      className="contact-section section container reveal-section"
      id="contact"
    >
      <div className="section-heading">
        <h2>{contact.title}</h2>
        <p>{contact.subtitle}</p>
      </div>

      <div className="contact-layout">
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formValues.name}
            onChange={onInputChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formValues.email}
            onChange={onInputChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            value={formValues.message}
            onChange={onInputChange}
            required
          />

          <button type="submit" disabled={submitState.isSubmitting}>
            <Mail size={16} />
            {submitState.isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitState.message ? (
            <p
              className={`form-status ${submitState.status === "success" ? "success" : "error"}`}
              role="status"
            >
              {submitState.message}
            </p>
          ) : null}
        </form>

        <aside className="social-panel">
          <h3>Connect With Me</h3>
          <p>
            I&apos;m active on these platforms. Let&apos;s connect and
            collaborate.
          </p>
          <SocialLinks
            socials={socials}
            className="social-links"
            iconSize={18}
            showLabel
          />
        </aside>
      </div>
    </section>
  );
}

export default Contact;
