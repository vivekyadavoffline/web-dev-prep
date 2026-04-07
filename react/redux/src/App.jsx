import { useState } from 'react'
import Navbar from './assets/navbar'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/counterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
 const dispatch = useDispatch()
  return (
    <>
    <Navbar/>
    <div>
  
      <button onClick={() => dispatch(increment())}> + </button>    cureently count is {count}

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      </div>
      </>
  )
}

export default App
