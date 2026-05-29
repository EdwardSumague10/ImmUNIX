import "./Contact.css";
import Button from './components/Button';
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
        <Button text="Submit" onClick={() => console.log('Submit clicked')} />
      </div>

      <footer>made by an IT Engineer</footer>
    </section>
  );
}

export default Contact;
