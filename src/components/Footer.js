import React from "react";
import "./styles/Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="row">
            <a
              href="https://www.linkedin.com/in/truongduong/"
              target="_blank"
              className="col-4" rel="noreferrer"
            >
              <FaLinkedin size={50} />
            </a>

            <a
              href="https://github.com/Truong-Duong"
              target="_blank"
              className="col-4" rel="noreferrer"
            >
              <FaGithub size={50} />
            </a>

            <a
              href="mailto: truong.duong1908@gmail.com"
              target="_blank"
              className="col-4" rel="noreferrer"
            >
              <HiOutlineMailOpen size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
