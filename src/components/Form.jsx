import Button from './Button'
import join from '../assets/Join Us.png'

function Form() {
    return (
        <div className=" bg-cover bg-center h-screen" style={{ backgroundImage: `url(${join})` }}>
            <div className='grid justify-end text-white pr-20 gap-5'>
                <div className='my-7'>
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 font-bold">JOIN US</h1>
                    <h1 className='mt-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</h1>
                </div>
                <div className='my-2'>
                    <input className='rounded mx-2 px-10 py-2' type="text" placeholder="Name" />
                    <input className='rounded mt-2 mx-2 px-10 py-2' type="text" placeholder="Username"/>
                </div>
                <div className=''>
                    <input  className='rounded mx-2 px-10 py-2 text-black' type="text" placeholder="Phone" />
                    <input  className='rounded mt-2 mx-2 px-10 py-2' type="text"  placeholder="Email" />
                </div>
                <div className=''>
                    <input className='rounded mx-1 mt-2 py-2 px-5 w-full' type="text" placeholder="Departamen" />
                    <textarea className='rounded mx-1 my-5 px-2 py-2 w-full h-40' placeholder="Mensajse" ></textarea>
                    <Button>
                        I'm in
                    </Button>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Form