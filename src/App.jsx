import Footer from "./components/Footer"
import Button from "./components/Button"
import Section from "./components/Section"
import Carousel from "./components/Carousel"
import Card from "./components/Card"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Counter from "./components/Counter"
import Videos from './components/Video'
import SocialMedia from "./components/SocialMedia"
import Form from "./components/Form"
import pic5 from "./assets/Pic5.png"
import pic7 from "./assets/Pic7.png"
import pic8 from "./assets/Pic8.png"
import pic9 from "./assets/Pic9.png"
import pic10 from "./assets/Pic10.png"
import Content from "./components/Content"

function App() {
  const images = [
    pic7,
    pic8,
    pic9,
    pic10,
  ]

  return (
    <>  
      <SocialMedia />
      <Header />
      <Hero />
      <Counter />
      <Section />
      <Card />
      <Content/>
      <Videos />
      <Form />
      <Main />
      <Carousel images={images} />
      <Footer />
    </>
  )
}

export default App
