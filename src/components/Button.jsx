import { useState } from "react"

const outlineClasses = "bg-transparent hover:bg-white hover:text-black text-white font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
const containedClasses = "bg-white text-black hover:bg-transparent text-white font-bold py-2 px-4 hover:border rounded"

function Button({ text, children, variant }) {

  const finalClasses = variant === 'outline' 
    ? outlineClasses
    : containedClasses

  return (
    <button className={finalClasses}>
      {children || text}
    </button>
  )
}

export default Button