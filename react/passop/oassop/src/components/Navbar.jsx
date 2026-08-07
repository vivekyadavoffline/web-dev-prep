const Navbar = () => {
  return (
    <nav className="bg-purple-300 ">
     <div  className="mycontainer flex justify-between items-center text-white text-2xl  ">
      <div className="logo font-bold">
        <span className="text-purple-500">&lt;</span>Password<span className="text-purple-500">Manager/</span><span className="text-purple-500">&gt;</span></div>
      <ul >
        <li className="flex  gap-4">
          <a  className='hover:font-bold'  href="/">Home</a>
          <a className='hover:font-bold'  href="/about">About</a>
          <a  className='hover:font-bold' href="/contact">Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar