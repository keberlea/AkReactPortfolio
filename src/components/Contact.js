import React from 'react';
import { Slide } from "react-awesome-reveal";

//contact email, linkedIn, github

function Contact() {
    return(
        <section id="contact">
            <h2 className="page-title">Contact</h2>
            <section className="contact">
                <Slide left><h3>By E-mail: <a href='mailto:alicia.keberle@gmail.com'> alicia.keberle@gmail.com</a></h3></Slide>
                <Slide right delay='100'><h3>LinkedIn: <a href="https://www.linkedin.com/in/keberlea/">linkedin.com/in/keberlea</a></h3></Slide>
                <Slide left delay='200'><h3>GitHub: <a href="https://github.com/keberlea">Github.com/keberlea</a></h3></Slide>
            
            </section>
        </section>
    )
}

export default Contact;