import { Header } from "../Global/Header"
import { Hero } from "./Hero"
import { Footer } from "../Global/Footer"
import { useEffect, useState } from "react"

export  const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/admin/')
       .then((response) => response.json())
       .then((data) => {
        console.log(data)
        setPosts(data)
      })
      .catch((err) => console.log(err))
 }, []);
  return (
    <main>
        <Header />
        <Hero />
        <Footer />
    </main>
  )
}
