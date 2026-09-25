import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/todos");

    let data = await a.json();

    setCards(data);

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.title}</h1>
              <span>By User: {card.userId}</span>
              <p>Work Status :{card.completed ? "Completed" : "Not Completed"}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
