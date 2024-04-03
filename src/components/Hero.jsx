import Button from './Button'
import prb from '../assets/Prb Header.png'
import icon from '../assets/icongrab.png'
import Navigation from './Navigation'

function Hero({ text }) {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${prb})` }}>
            <div className='flex py-2 px-5' style = {{ 
                background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(25,25,25,0.8035132955517289) 14%, rgba(165,165,165,0) 92%, rgba(255,255,255,0) 100%)'
            }}>
                <div style={{ width: 200 }}>
                    <img src={icon} />
                </div>
                <div className='flex-1 flex items-center justify-end sm:hidden md:hidden md:flex'>
                    <Navigation />
                </div>
            </div>
            <div className="bg-cover bg-center h-screen ml-20 flex items-center justify-center">
                <div className="flex flex-col">
                    <div className="md:text-5xl text-2xl uppercase">
                        <h1 className=" md:leading-normal text-white font-bold">Lorem ipsum dolor</h1>
                            <span className='md:leading-normal  font-bold bg-white text-black'>Lorem ipsum dolor sit.</span>
                        <h1 className="md:leading-normal text-white font-bold mb-5">Lorem ipsum dolor</h1>
                    </div>
                    <div className='text-white pt-10'>
                    <Button>
                        What is next
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero