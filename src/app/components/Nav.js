'use client'

import Link from 'next/link'
import { useState } from 'react';
import styles from "../styles/nav.module.css"
import { CgMenuBoxed, CgCloseR } from "react-icons/cg";
import { usePathname } from 'next/navigation'

const Nav = () => {

  const [expand, setExpand] = useState(false)
  const pathname = usePathname();

  return (
    <>
      <div className={styles.navbar}>

        <div className={expand ? `${styles.active}` : ""}>
          <ul className={styles.navbar_list}>

            <li> <Link href="/" className={pathname === '/' ? `${styles.active}` : ''} onClick={() => setExpand(false)}> Home </Link> </li>

            <li> <Link href="/about" className={pathname === '/about' ? `${styles.active}` : ''} onClick={() => setExpand(false)}> About </Link> </li>

            <li> <Link href="/movie" className={pathname === '/movie' ? `${styles.active}` : ''} onClick={() => setExpand(false)}> Anime </Link> </li>

            <li> <Link href="/contact" className={pathname === '/contact' ? `${styles.active}` : ''} onClick={() => setExpand(false)}> Contact Us </Link> </li>

          </ul>
        </div>

        <div className={styles['mobile-nav-btn']} onClick={() => setExpand(!expand)}  >
          {
            // ternary operator used..............
            expand ? <CgCloseR /> : <CgMenuBoxed />
          }
        </div>
      </div>

    </>
  )
}


export default Nav;