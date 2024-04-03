import Button from './Button'
import pic5 from '../assets/Pic5.png'


function Content() {
    return (
        <section className="min-h-screen h-screen bg-green-400 flex md:flex-row items-center">
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
    )
}

export default Content