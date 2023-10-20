import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="text">
        <h3>ABOUT ME</h3>
      </div>
      <div className="detail-info">
        <div className="details">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            sequi mollitia itaque reiciendis repudiandae eius aperiam, officia
            natus suscipit, quidem qui modi quae porro! Similique unde est
            repellat quae quia magnam expedita maxime? Voluptatem sint
            necessitatibus eligendi, rem ut eveniet. Doloremque amet earum
            consequatur repellendus laudantium dolorem, magni nam molestiae?
          </p>
          <button>Download My CV</button>
        </div>
        <div className="info">
          <div className="eca">
            <FaEnvelope className="eca-icons" />
            <p>Email Me : support@example.com</p>
          </div>
          <div className="eca">
            <FaPhone className="eca-icons" />
            <p>Call Me : + 11 012345 6789</p>
          </div>
          <div className="eca">
            <FaLocationDot className="eca-icons" />
            <p>Address : 345, Green Road, New York,USA</p>
          </div>
          <p className="follow">Follow Me:</p>
          <div className="icon">
            <FaFacebookF className="ic-icons" />
            <FaTwitter className="ic-icons" />
            <FaLinkedinIn className="ic-icons" />
            <FaPinterestP className="ic-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
