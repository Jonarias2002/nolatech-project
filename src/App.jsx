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
      <section className="min-h-screen h-screen bg-green-400 flex md:flex-row flex-col items-center">
        <div className="flex-1">
          <div className="md:text-left text-white text-center ml-10">
            <h1 className="md:text-6xl text-2xl md:leading-normal font-bold">
              Lorem ipsum <br /> dolor sit <br /> amet, <br /> consetetur 
            </h1>
            <div>
              <Button type = "secondary">
                Lorem ipsum dolor sit amet.
              </Button>
            </div>
            <div className="mt-5">
              <Button variant="outline" type="tertiary">
                Lorem ipsum dolor sit amet.
              </Button>
            </div>
          </div>
        </div>
        <div className="h-full flex-1" style = {{
          backgroundImage: `url(${pic5})`,
          backgroundSize: 'cover'
        }}>

        </div>
      </section>
      <Videos />
      <Form />
      <Main />
      <Carousel images={images} />
      <Footer />
    </>
  )
}

export default App
