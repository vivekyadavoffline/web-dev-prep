import React , {useEffect}  from 'react'

const Navbar = ({ color }) => {
 useEffect(() => {
  alert("color is " + color)
}, [color])

  return (
    <div>
      i am navbar of color {color}
    </div>
  )
}

export default Navbar