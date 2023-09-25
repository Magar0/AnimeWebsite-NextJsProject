'use client'

import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import styles from "../styles/moviesection.module.css"

const Movie = async () => {

  // for server rendering............  

  // const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=30&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc"

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.RAPID_KEY,
  //     'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  //   }
  // };

  // const res = await fetch(url, options)
  // const datas = await res.json()
  // const mainData = datas.data;
  // // console.log(mainData);



  // client side rendering for search box and used AXIOS................... 
  const [mainData, setMainData] = useState([])
  const [search, setSearch] = useState("")

  console.log(search);

  const getData = async () => {
    try {
      const query = search
      const res = await fetch(`/api/anime`);
      const datas = await res.json()
      const finalData = datas.result.data

      setMainData(finalData)
      // console.log(finalData);

    } catch (err) {
      console.log("Error1:", err);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <>
      <section className={styles.movieSection}>
        <h1 className="text_head text_center">Series & Movies</h1>
        <Search search={setSearch} />
        <div className={styles.container}>
          {
            mainData.map((curElem, ind) => {
              return <MovieCard key={curElem._id} {...curElem} />
            })
          }
        </div>
      </section >
    </>
  )
}



export default Movie;