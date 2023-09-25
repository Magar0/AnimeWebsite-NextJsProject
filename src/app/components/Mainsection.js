import Image from "next/image";
import Link from "next/link";
import styles from '../styles/mainsection.module.css'
import { Mulish } from 'next/font/google'




const Mainsection = ({ title, des, imgurl }) => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.grid}>

            <div className={styles.content}>
              <h1 className={styles.head_text}>{title}</h1>
              <p className={styles.para}>{des}</p>

              <Link href='/movie'>
                <button className="btn" >Explore Anime</button>
              </Link>
            </div>

            <div className={styles.img}>
              <Image src={imgurl} alt="img" height={340} width={550} />
            </div>
          </div>

          {/* Shape divider code .......... */}
          <div className={styles['custom-shape-divider-bottom-1695494834']}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className={styles['shape-fill']}></path>
            </svg>
          </div>

        </div>

      </main>
    </>
  )
}

export default Mainsection;