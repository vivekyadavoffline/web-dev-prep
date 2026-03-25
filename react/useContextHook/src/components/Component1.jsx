import React, {useContext} from 'react'
import {CountContext} from '../context/contex'
const Component1 = () => {
  const counter = useContext(CountContext)
  return (
    <div>
      Component 1 = {counter}
    </div>
  )
}

export default Component1
