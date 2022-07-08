import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./hireMe.css";
import { Helmet } from "react-helmet";

const HireMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ng0qnui",
                "template_6379qvg",
                form.current,
                "Bzac7xJTv5MEJ1FHB"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message Sent Successfully !");
                },
                (error) => {
                    alert(error);
                }
            );
    };

    return (
        <>
            <Helmet>
                <title>
                    Contact-Me
                </title>
            </Helmet>
            <div className="formCon">
                <h1 style={{ fontSize: "6vmin" }}>CONTACT</h1>
                <h2>
                    “What is the shortest word in the English language that contains the letters: abcdef? Answer: feedback. Don’t forget that feedback is one of the essential elements of good communication.”
                </h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input className="inp" placeholder="Name" type="text" name="user_name" />
                    <input className="inp" placeholder="Email" type="email" name="user_email" />
                    <input className="inp" placeholder="Contact" type="contact" name="user_contact" />
                    <textarea className="inp" placeholder="Message" name="message" />
                    <input className="b" type="submit" value="Send" />
                </form>
            </div>
        </>
    );
};

export default HireMe;