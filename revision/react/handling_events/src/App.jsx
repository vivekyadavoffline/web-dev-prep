import './App.css'
import {useRef} from 'react';
function App() {

 const ref = useRef(0);
    const handelClick = () =>
    {
      alert("hey i am clicked");
    }
    const handelMouseOver = () =>{
      ref.current.style.backgroundColor = "blue";
      ref.current.textContent = "hy i am blue";
    }
  return (

    <>
      <div className="button">
        <button onClick={handelClick}>
        click me 
        </button>

        <div className="red" ref={ref}  onMouseOver={handelMouseOver}>
          hy i m red
        </div>
      </div>
    </>
  );
}

export default App;
