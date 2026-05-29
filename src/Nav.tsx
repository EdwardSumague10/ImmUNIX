import "./Nav.css";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";


function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="#hero">
          <img src="/images/ImmUnixWhite.png" alt="logo" />
        </a>
      </div>
      <ul className="navlinks">
        <li>
          <a href="#hero">
            Hero 
          </a>
        </li>

        <li>
          <a href="#blog">
            Blog 
          </a>
        </li>

        <li>
          <a href="#services">
            Services 
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact 
          </a>
        </li>
      </ul>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/edward-joseph-sumague-197956188/"
          target="_blank"
        >
          <FaLinkedin size={30} color="#00a6ff" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577554997390"
          target="_blank"
        >
          <FaFacebookMessenger color="#00a6ff" size={30} />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
