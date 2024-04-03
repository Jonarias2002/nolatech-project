import { IoCaretForwardCircleOutline, IoRadio } from "react-icons/io5";

function Header() {
  return (
    <div className=' bg-green-600 text-center text-white'>
      <header className="mx-auto">
        <div className='flex sm:flex-row flex-col justify-center items-center'>
            <div className="flex justify-center bg-red-500 text-2xl py-2 px-5 w-full md:w-auto">
              Live
              <IoRadio className='ml-3 mt-1' width={20} />
            </div>
            <span className='text-xl my-2 mx-3'> Lorem ipsu dolor sit amet </span>
            <div  className="flex justify-center bg-green-700 text-2xl py-2 px-5 w-full md:w-auto"> 
            Join Now
            <IoCaretForwardCircleOutline className='ml-3 mt-1' width={20} />
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header