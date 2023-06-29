import React from "react";
import githubMark from '../assests/github-mark.png';
import LIinBug from '../assests/LI-In-Bug.png';
import mailTo from '../assests/mailIcon.png';

function Footer() {
    return (
        <footer>
            
            <div className="footer">
            <section className="contact-links">
            <p><a href="https://github.com/keberlea">
                <img src={githubMark} alt="Github logo" className="footer-logo"/>
            </a></p>
            <p><a href="https://www.linkedin.com/in/keberlea/">
                <img src={LIinBug} alt="linkedinbug" className="footer-logo"/>
            </a></p>
            <p><a href="mailto:alicia.keberle@gmail.com">
                <img src={mailTo} alt="mailicon" className="footer-logo"/>
            </a></p>
            </section>
            <section>
                <p>© 2021 Alicia Keberle</p>
            </section>
            </div>
        </footer>
    )
}

export default Footer;