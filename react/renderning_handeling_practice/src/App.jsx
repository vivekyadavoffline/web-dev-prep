import { useState, useEffect } from 'react'

function App() {
  const [card, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
      
      {card.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "250px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
              {item.title}
            </h2>
            <p style={{ fontSize: "14px", color: "#555" }}>
              {item.body}
            </p>
          </div>
        )
      })}

      {/* Extra static card (now OUTSIDE map) */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          width: "250px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9"
        }}
      >
        <h3>Extra Card</h3>
        <p>This is static content</p>
      </div>

    </div>
  )
}

export default App