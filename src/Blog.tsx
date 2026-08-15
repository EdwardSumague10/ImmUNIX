import "./Blog.css";
import { FaServer } from "react-icons/fa";
import { BsFillRouterFill } from "react-icons/bs";
import { GiFirewall } from "react-icons/gi";
import { TiFlowSwitch } from "react-icons/ti";
import Pyramid from "./components/Pyramid";


function Blog() {
  return (
    <section id="blog">
      <div className="box-container">
        <div className="head">
          <h1>The Anatomy Of Modern Networks</h1>
          <p>
            This section explores how modern digital systems are built through
            the connection of network infrastructure and software technologies,
            working together to create scalable, efficient, and reliable
            environments that power everyday digital experiences, while
            reflecting a personal interest in how everything in technology is
            interconnected.
          </p>
        </div>
        <div className="box">
          <FaServer size={100} color="00a6ff" />
          <p>Server</p>

          <div className="hoverInfo">
            <p>
              A <span className="span">Server</span> is a dedicated system that
              stores, processes, and delivers data or services to other
              computers over a network.
            </p>
          </div>
        </div>

        <div className="box">
          <BsFillRouterFill size={100} color="00a6ff" />
          <p>Router</p>

          <div className="hoverInfo">
            <p>
              {" "}
              A <span className="span">Router</span> is a networking device that
              directs data between networks, ensuring information reaches
              correct destinations efficiently across connected systems.
            </p>
          </div>
        </div>

        <div className="box">
          <GiFirewall size={100} color="00a6ff" />
          <p>Firewall</p>

          <div className="hoverInfo">
            <p>
              {" "}
              A <span className="span">Firewall</span> is a security system that
              monitors and filters network traffic, blocking threats while
              allowing safe communication through networks.
            </p>
          </div>
        </div>

        <div className="box">
          <TiFlowSwitch size={100} color="00a6ff" />

          <p>Switch</p>

          <div className="hoverInfo">
            <p>
              {" "}
              A <span className="span">Switch</span> is a network device that
              connects multiple devices within a local network, efficiently
              forwarding data to the correct destination.
            </p>
          </div>
        </div>
        <div className="osi">
          <p>
            Let’s take a look at the 7 layers of the OSI model, which explains
            how data travels across a network step by step.
          </p>
        </div>
        <div className="comp">
          <Pyramid />
        </div>
      </div>
    </section>
  );
}

export default Blog;
