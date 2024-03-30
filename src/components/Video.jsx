import React from 'react'
import Title from './Title'
import Button from './Button'

function Videos({ title }) {
  return (
    <div>
      <div className="flex justify-center">
        <Title title={"Lastest video"}/>
      </div>
      <Video 
      />
      <div className='flex justify-center'>
        <Button>
          View all
        </Button>
      </div>
    </div>
  )
}

const Video = ({ text, image }) => {
  return (
    <div className="max-w-sm overflow-hidden">
      <img 
        className="w-full" 
        src={image}
        alt="Sunset in the mountains"
      />
      <p className=''>
        {text}
      </p>
    </div>
  )
}

export default Videos