import "./Contact.css";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <section id="contact">
      <div className="creds">
        <b>
          {" "}
          <TfiEmail />
        </b>
        <a href="mailto:edward23sumague@gmail.com">edward23sumague@gmail.com</a>
      </div>

      <footer>made by an IT Engineer</footer>
    </section>
  );
}

export default Contact;
