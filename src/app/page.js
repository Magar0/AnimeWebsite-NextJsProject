import Mainsection from "./components/Mainsection"

const Page = () => {

  const des = "Find all animation details.Now you can wacth any Anime Series, Movies, TV shows, etc. with us at free. We provide you anime at best quality. And please don't forget to share it with your friedns."

  return (
    <>
      <Mainsection title={"let's watch anime together"} des={des} imgurl={"/anime.avif"} />
    </>
  )
}

export default Page;