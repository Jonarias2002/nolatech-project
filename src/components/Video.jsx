import Title from './Title'
import Button from './Button'
import video1 from '..//assets/Pic1.png'
import video2 from '..//assets/Pic2.png'
import video3 from '..//assets/Pic8.png'
import video4 from '..//assets/Pic10.png'
import video5 from '..//assets/Pic8.png'
import video6 from '..//assets/Pic9.png'
import { FaRegCirclePlay } from "react-icons/fa6";

function Videos({ title, image, text }) {
  return (
    <div className='flex flex-col text-center'>
      <div className="">
        <Title title={"Lastest video"}/>
      </div>
      <div className='flex md:flex-row flex-col flex-wrap justify-center items-center gap-5 mt-10'>
          <Video 
            image={video1}
            text={"Lastest video1"}
          />
          <Video 
          image={video2}
          text={"Lastest video2"}
          />
          <Video 
          image={video3}
          text={"Lastest video3"}
          />
          <Video 
          image={video4}
          text={"Lastest video4"}
          />
          <Video 
          image={video5}
          text={"Lastest video5"}
          />
          <Video 
          image={video6}
          text={"Lastest video6"}
          />
      </div>
      <div className='my-8'>
        <Button>
          View all
        </Button>
      </div>
    </div>
  )
}

const Video = ({ text, image }) => {
  return (
    <div className="basis-1/4 max-w-sm overflow-hidden">
      <div className='relative'>
        <img 
          className="pl-5 opacity-90" 
          src={image}
          alt="Sunset in the mountains"
          style={{
            aspectRatio: 16/9,
            objectFit: 'cover',
          }}
        />
        <div className='absolute top-1/2 left-1/2' style = {{
          transform: 'translateY(-50%)',
        }}>
          <FaRegCirclePlay size = {40} color='#FFF'/>
        </div>
      </div>
      <p className='text-black'>
        {text}
      </p>
    </div>
  )
}

export default Videos