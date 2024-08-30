import React from "react";
import "./App.css";
import EmailIcon from "./Mail.png";


function Details() {
    return (
        <div className="Details">
            <div className="Name">
                Aritra Chakraborty
            </div>
            <div className="Role">
                Software Developer
            </div>
            <div className="Website">
                <a href="https://developers.google.com/profile/u/101336596149610896677">aritrachakraborty.com</a>
            </div>
            <div className="EmailBox">
                <div className="Email-logo">
                <a href="mailto:caritra838@gmail.com">
                    <img src={EmailIcon} alt="Email" />
                </a>
                </div>
                <div className="Email">
                    Email
                </div>
                </div>

            <div className="About">
                <div className="About-title">
                    About Me
                </div>
                <div className="About-content">
                    I am an aspiring Software Engineer.
                    In my carrer I want to work on projects that
                    can impact the world. I am very much interested
                    in learing and working on cloud technologies and DevOps.
                </div>
            </div>
            <div className="Interest">
                <div className="Interest-title">
                    Interests
                </div>
                <div className="Interest-content">
                    Besides coding, I love to play guitar and read books.
                    I am also a big fan of cricket, football and all kinds
                    of video games.
                    I also like plyaing chess and solving puzzles.
                </div>
            </div>
        </div>
    )
}

export default Details;