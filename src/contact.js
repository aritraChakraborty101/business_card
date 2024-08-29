import React from "react";
import "./App.css";
import TwitterIcon from "./Twitter Icon.png";
import FacebookIcon from "./Facebook Icon.png";
import InstagramIcon from "./Instagram Icon.png";
import LinkedInIcon from "./Linkedin Icon.png";
import GitHubIcon from "./GitHub Icon.png";


function ContactSection() {
    return (
        <div className="Contact">
            <div className="Twitter-logo">
                <a href="https://twitter.com/">
                    <img src={TwitterIcon} alt="Twitter" />
                </a>
            </div>
            <div className="Facebook-logo">
                <a href="https://www.facebook.com/">
                    <img src={FacebookIcon} alt="Facebook" />
                </a>
            </div>
            <div className="Instagram-logo">
                <a href="https://www.instagram.com/">
                    <img src={InstagramIcon} alt="Instagram" />
                </a>
            </div>
            <div className="LinkedIn-logo">
                <a href="https://www.linkedin.com/">
                    <img src={LinkedInIcon} alt="LinkedIn" />
                </a>
            </div>
            <div className = "GitHub-logo">
                <a href="">
                    <img src={GitHubIcon} alt="GitHub" />
                </a>
            </div>
        </div>
    )
}

export default ContactSection;