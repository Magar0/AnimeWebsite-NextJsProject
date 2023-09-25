'use client'

import styles from "@/app/styles/moviecard.module.css"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MovieCard = (props) => {

  // Object destructuring..........
  const { _id, title, rank, genres, episodes, image, type, synopsis } = props

  return (
    <>
      <Link href={`/movie/${_id}`} className={styles.link} >
        <div className={styles.card}>

          <div className={styles.cardImage}>
            <Image src={image} alt="img" height={240} width={220} />
          </div>

          <h2>{title.substring(0, 20)} {title.length > 18 && "..."} </h2>
          <div className={styles.cardData}>

            <h5>{type}</h5>
            <p className={styles.genres}>{genres.join(", ")}</p>

            <p className={styles.synopsis}>{synopsis.substring(0, 70)} {synopsis.length > 70 && "..."} </p>
            <div>Read More</div>
            {/* <button className="btn">Read More</button> */}

          </div>
        </div>

      </Link >
    </>
  )
}

export default MovieCard;