"use client"

import { createElement, useState } from "react";
import Link from "next/link";
import styles from "../contact/contactcard.module.css"
import { MdEmail } from "react-icons/md";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const ContactCard = () => {

    const [community, setCommunity] = useState(false) //using hooks to show error

    const recipientEmail = "rakeshmagar0@gmail.com"

    const error = (e) => {
        e.preventDefault();
        setCommunity(true);
        setTimeout(() => setCommunity(false), 3000);
    }

    //    Adding elements using DOM
    const chat = (e) => {
        e.preventDefault();
        const show = document.createElement('p');
        show.style.color = 'red';
        show.style.fontStyle = 'italic';
        show.innerText = "The admin is sleeping. Try again Later😜";
        setTimeout(() => show.innerText = "", 3000);
        document.getElementById('chat').appendChild(show);
    }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <i> <MdEmail /></i>
                    <h3>Email</h3>
                    <p>Available Mon to Fri</p>
                    <p className={styles.last_child}>Expected response with in 3 days</p>
                    <Link href={`mailto:${recipientEmail} `} > Send Email &gt; </Link>
                </div>

                <div className={styles.card} id="chat">
                    <i> <BsFillChatLeftDotsFill /></i>
                    <h3>Chat Now</h3>
                    <p>WeekDays 10pm - 4pm</p>
                    <p className={styles.last_child}>Weekend Close</p>
                    <Link href="/contact" onClick={(e) => chat(e)} > Chat Now &gt; </Link>
                </div>

                <div className={styles.card}>
                    <i><HiChatBubbleLeftRight /></i>
                    <h3>Community Form</h3>
                    <p className={styles.last_child}>Chat with Others</p>
                    <Link href="/" onClick={e => error(e)} > Ask The Community &gt; </Link>
                    {community && <p className={styles.error}> Page Under Construction 😵</p>}
                </div>
            </div>
        </>
    )
}

export default ContactCard;
