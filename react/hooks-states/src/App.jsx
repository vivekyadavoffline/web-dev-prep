import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> This count is {count} </div>
      <button onClick={() => {setCount(count +1)}}> Update count</button>   </>
  )
}

export default App
