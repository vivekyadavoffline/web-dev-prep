import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Lion" discription="Lion is king of jungle"/>
        <Card title="peocock" discription="peocock is national bird of India"/>
        <Card title="human" discription="I am animal but i do not accpet that I am a animal"/>
      </div>
      <Footer/>

    </>
  );
}

export default App;