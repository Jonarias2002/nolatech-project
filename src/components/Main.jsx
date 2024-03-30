import pic6 from '../assets/Pic6.png'
import Button from './Button'

function Main() {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${pic6})` }}>
            <div className=' text-black'>
                <div className='flex-1 items-center justify-start my-10 mx-20'>
                    <h1 className="md:text-6xl text-2xl md:leading-normal font-bold">
                        Lorem ipsum <br />
                        dolor sit.
                    </h1>
                    <h1 className='mt-3 font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima tenetur facilis, <br />
                        culpa est saepe enim corrupti dicta in mollitia quam ducimus aspern itaque sapiente! <br />
                        squisquam quaerat sequi. Inventore esse obcaecati veniam suscipit blanditiis eum!
                    </h1>
                    <div className="text-white mt-8">
                        <Button>
                        View all
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main