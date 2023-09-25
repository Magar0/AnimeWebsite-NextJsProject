import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";


const Header = () => {

  const myStyle = {
    display: "flex",
    justifyContent: 'space-between',
    padding: "5px"

  }

  return (
    <>
      <header>
        <div style={myStyle}>
          <Link href="/" >
            <Image src="/logo.jpg" alt="logo" width={100} height={50} />
          </Link>
          <Nav />
        </div>
      </header>
    </>
  )
}


export default Header;
