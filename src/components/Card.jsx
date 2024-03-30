import React from 'react'
import Title from './Title'
import Button from './Button'
import card1 from '../assets/Pic2.png'
import card2 from '../assets/Pic3.png'
import card3 from '../assets/Pic4.png'

function Cards({title}) {
  return (
    <div className='text-center bg-gray-1s00 mb-10'>
      <Title title={"lorem ipsum dolor"} />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus maxime, <br />
        quisquam iste ullam odit possimus modi earum nisi reprehenderit porro sapiente vel, <br /> 
        facilis, quos ut quod magni! Cum nihil perspiciatis aliquam accusantium iure!
      </p>
      <div className='flex gap-3 justify-center mt-10'>
        <Card 
        image={card1}
        text={"lorem ipsum dolor"}
        />
        <Card 
        image={card2}
        text={"lorem ipsum dolor2"}
        />
        <Card 
        image={card3}
        text={"lorem ipsum dolor3"}
        />
      </div>
      <div className="text-white my-8">
        <Button
        
        >
          View all
        </Button>
      </div>
    </div>
  )
}

const Card = ({ text, image }) => {
  return (
    <div className="max-w-sm overflow-hidden">
      <img 
        className="w-full" 
        src={image}
        alt="Sunset in the mountains"
      />
      <button className='bg-green-400 w-full p-3 text-white'>
        {text}
      </button>
    </div>
  )
}

export default Cards