"use client"

import { useState } from "react"
import styles from "../styles/search.module.css"
import { FaSearch } from "react-icons/fa";

const Search = ({ search }) => {

    const [input, setInput] = useState("")


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        if (input) {
            search(input)
        }
    }

    return (
        <>
            <div className={styles.search_bar}>
                <input type="text" className={styles.search_box} value={input} placeholder="Search Anime" onChange={handleChange} />
                <button className={styles.btn} onClick={handleClick}> <FaSearch /> </button>
            </div>
        </>
    )
}

export default Search