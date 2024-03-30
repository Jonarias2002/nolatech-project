function Counter() {
  return (
    <div className="container bg-green-800 mx-auto flex justify-center px-8">
      <div className="flex items-center px-5 py-5">
        <h1 className="md:text-4xl text-xl md:leading-normal leading-8 text-white font-bold">
          Lorem ipsum dolor sit <br /> amet consectetur
        </h1>
      </div>
      <div className="flex-1 flex items-center justify-end gap-5 px-8 font-bold text-white">
        <div className="text-center px-10">
          <span className="md:text-6xl text-xl md:leading-normal">342</span>
          <p className="text-green-400">days</p>
        </div>
        <div
          className="inline-block w-0.5 h-[75px] bg-neutral-100 opacity-50"
        ></div>
        <div className="text-center px-10">
          <span className="md:text-6xl text-xl md:leading-normal">32</span>
          <p className="text-green-400">hours</p>
        </div>
        <div
          className="inline-block w-0.5 h-[75px] bg-neutral-100 opacity-50"
        ></div>
        <div className="text-center px-10">
          <span className="md:text-6xl text-xl md:leading-normal">45</span>
          <p className="text-green-400">minutes</p>
        </div>
        <div
          className="inline-block  w-0.5 h-[75px] bg-neutral-100 opacity-50"
        ></div>
        <div className=" text-center px-10">
          <span className="md:text-6xl text-xl md:leading-normal">42</span>
          <p className="text-green-400">seconds</p>
        </div>
      </div>
    </div>
  )
}

export default Counter