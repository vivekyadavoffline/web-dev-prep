import './App.css'
import {useRef,useState} from 'react';
function App() {
const [name, setname] = useState("vivek");

 const ref = useRef(0);
    const handelClick = () =>
    {
      alert("hey i am clicked");
    }
 const handleMouseOver = () => {
    ref.current.style.backgroundColor = "blue";
    ref.current.textContent = "hy i am blue";
};

const handleMouseOut = () => {
    ref.current.style.backgroundColor = "red";
    ref.current.textContent = "hy i am red";
};
    const handelChange = (e) => {
      setname(e.target.value)
    }
  return (

    <>
      <div className="button">
        <button onClick={handelClick}>
        click me 
        </button>
<div
    className="red"
    ref={ref}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
>
    hy i am red
</div>
        <input type ="text" value={name} onChange={handelChange} >
        </input>
      </div>
    </>
  );
}

export default App;
