import styles from "@/app/styles/animepage.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const { id } = params;

  const url = `https://anime-db.p.rapidapi.com/anime/by-id/${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data;

  const {
    title,
    alternativeTitles,
    image,
    ranking,
    genres,
    episodes,
    status,
    synopsis,
    type,
  } = main_data;

  return (
    <>
      <section className={styles.page}>
        <h3 className="text_head">
          {" "}
          Anime \ <span className={styles.type}> {type} </span>
        </h3>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.container}>
          <div className={styles.image}>
            <Image src={image} height={400} width={300} alt="img" />
            <p className={styles.flex}>
              <i> {episodes} episode </i>
              <i>{status} </i>
            </p>
          </div>
          <div className={styles.details}>
            <ul>
              <li>
                <p>Rank: {ranking}</p>
              </li>
              <li>
                <p>Genres: {genres.join(", ")}</p>
              </li>
              <li>
                <p>Episodes: {episodes}</p>
              </li>
              <li>
                <p>Status: {status}</p>
              </li>
              <li>
                <p>Alternative Name: "{alternativeTitles.join('", "')}"</p>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.description}>
          <span>Description: </span> {synopsis}
        </p>
      </section>
    </>
  );
};

export default Page;
