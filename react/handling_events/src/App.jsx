import { useState } from 'react'
import './App.css'

function App() {

  const [form, setForm] = useState({ email: "", phone: "" });
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    alert('Button Clicked');
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      {/* Button */}
      <div className="button">
        <button 
          className="shadow-indigo-500/50 shadow-lg bg-white text-blue-600 border-4 border-indigo-500 border-double rounded-md p-2"
          onClick={handleClick}
        >
          Click me
        </button>
      </div>

      {/* Hover Button */}
      <button
        style={{
          backgroundColor: hover ? "red" : "blue",
          color: "white",
          padding: "10px 20px",
          marginTop: "10px"
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hover Me
      </button>

      {/* Form Inputs */}
      <div style={{ marginTop: "15px" }}>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default App