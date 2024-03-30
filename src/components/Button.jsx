import { useState } from "react"

const outlineClasses = "bg-transparent hover:bg-white hover:text-black text-white font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
const containedClasses = "bg-white text-black hover:bg-transparent text-white font-bold py-2 px-4 hover:border rounded"

const primaryStyles = {
  backgroundColor: '#03b044'
}

const secondaryStyles = {
  backgroundColor: '#fff',
  color: '#000'
}

const tertiaryStyles = {
  backgroundColor: 'transparent',
  color: '#FFF'
}

function Button({ text, children, variant, type = "primary" }) {

  const finalClasses = variant === 'outline' 
    ? outlineClasses
    : containedClasses

  const finalStyles = type === 'primary'
    ? primaryStyles
    : type === 'secondary' 
      ? secondaryStyles
      : tertiaryStyles

  return (
    <button className={finalClasses} style = {finalStyles}>
      {children || text}
    </button>
  )
}

export default Button