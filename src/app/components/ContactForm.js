'use client'

import styles from "@/app/contact/contactform.module.css"
import { useState } from "react"

const ContactForm = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("success");
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(pre => ({ ...pre, [name]: value }))
  }

  return (
    <form className={styles.contact_form} onSubmit={(e) => handleSubmit(e)}>

      <div>
        <label htmlFor="username">
          Name:
          <input type="text" name="username" id="username" placeholder="Enter Your Name" value={user.username} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" placeholder="Enter Your Name" value={user.email} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label htmlFor="number">
          Phone No.:
          <input type="number" name="phone" id="phone" placeholder="Enter Your Phone Number" value={user.phone} onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label htmlFor="message">
          Message:
          <textarea type="text" name="message" id="message" rows="6" placeholder="Type what you want to say us" value={user.message} onChange={handleChange} required />
        </label>
      </div>

      <div style={{ textAlign: "end" }}>
        <button type="Submit" className="btn" >Submit</button>
      </div>

    </form>
  )
}

export default ContactForm;