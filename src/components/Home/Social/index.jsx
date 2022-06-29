import React from "react";
import "./styles.css";
import {
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "../../icons";

const Social = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="social-wrap">
    <div class="social-container">
      <ul class="social-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/mertcanft/"
            className="social-square"
            target={"_blank"}
          >
            <span className="social">
              <InstagramIcon />
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="social-square">
            <span className="social">
              <GithubIcon />
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="social-square">
            <span className="social">
              <LinkedinIcon />
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="social-square">
            <span className="social">
              <YoutubeIcon />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Social;
