const Navbar = () => {
  return (
    <nav className="bg-purple-300 ">
      <div className="mycontainer flex justify-between items-center text-white text-2xl  ">
        <div className="logo font-bold">
          <span className="text-purple-500">&lt;</span>Password<span className="text-purple-500">Manager/</span><span className="text-purple-500">&gt;</span></div>
        {/* <ul >
          <li className="flex  gap-4">
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="/about">About</a>
            <a className='hover:font-bold' href="/contact">Contact</a>
          </li>
        </ul> */}
        <button className=" m-2  flex border-purple-900 border-2 rounded-full bg-white text-purple-500 text-xs items-center hover:bg-purple-100 font-bold  ">  <img
          src="/src/assets/github.svg"
          alt="GitHub"
          style={{ width: "25px" }}
        /> <span> Github</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar