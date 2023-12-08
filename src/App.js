import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTickets(data);
    } catch (error) {
      console.log("Unable to fetch data! ", error);
    }
  }

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
