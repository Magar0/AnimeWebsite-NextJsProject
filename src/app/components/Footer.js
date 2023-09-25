import styles from "@/app/styles/footer.module.css"
import Link from "next/link"
import { FaXTwitter, FaGithub, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <section className={styles.footer}>

                <div className={styles.footer_top}>

                    <h2>Anime World</h2>
                    <div className={styles.icon}>
                        <Link href="https://github.com/Magar0"><i><FaGithub /></i></Link>
                        <Link href="https://twitter.com/Rakeshthapa0"><i><FaXTwitter /></i></Link>
                        <Link href="https://www.linkedin.com/in/magar0/"><i><FaLinkedin /></i></Link>
                        <Link href="https://www.instagram.com/rakeshthapa0/"><i><FaSquareInstagram /></i></Link>
                    </div>

                </div>


                <div className={styles.footer_link}>

                    <div className={styles.box}>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Get Started</a></li>
                        </ul>
                    </div>

                    <div className={styles.box}>
                        <h3>Services</h3>
                        <ul>
                            <li><a href="">App Design</a></li>
                            <li><a href="">Web Design</a></li>
                            <li><a href="">Logo Design</a></li>
                            <li><a href="">Banner Design</a></li>
                        </ul>
                    </div>

                    <div className={styles.box}>
                        <h3>Company</h3>

                        <div className={styles.input}>
                            <input type="email" placeholder="Type your email" />
                            <button>Submit</button>
                        </div>
                    </div>

                </div>

                <div className={styles.footer_bottom}>
                    <p>Copyright &copy;2023 Rakesh Magar. All rights reserved</p>
                    <ul className={styles.policy}>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Condition</a></li>
                    </ul>
                </div>

            </section>
        </>
    )
}

export default Footer