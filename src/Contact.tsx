import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./Contact.css";


interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent! Thanks for getting in touch.");

   
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="form-container">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <textarea
              id="message"
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      <footer className="footer">
        <p>Built by an IT Engineer. © 2026 ImmUNIX. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;


