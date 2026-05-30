import "./Hero.css";
import { SiLinux } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="text-content">
          <div className="tagg">Powering Modern Systems</div>
          <div className="tagline">
            <h1>
              We do <span className="highlight">IT</span> right.
            </h1>
          </div>
        </div>
        <div className="net">
          <SiPython />
          <SiGnubash />
          <SiLinux />
        </div>
        <div className="ten">
          <FaAws />
          <FaFlutter />
          <FaReact />
        </div>
      </div>
      <div className="more">
          <a href="#blog">Discover the Core</a>
        </div>
    </section>
  );
}

export default Hero;
