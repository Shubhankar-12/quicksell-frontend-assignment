import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Board from './components/Board/Board';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [group, setGroup] = useState('user');
  const [order, setOrder] = useState('title');

  const priorities = ["no priority", "low", "medium", "high", "urgent"];
  const status = ["backlog", "todo", "in progress", "done", "cancelled"];

  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
  }
  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.log("Unable to fetch data! ", error);
    }
  }
  console.log(group);

  return (
    <div className="App">
      <Navbar group={group} order={order} onGroupchange={handleGroupChange} onOrderChange={handleOrderChange} />
      <div className='boards_container'>
        <div className='app_boards'>
          {
            group === 'status' && status.map((opt, id) => (
              <Board order={order} title={opt} key={id} tickets={tickets} group={group} />
            ))
          }
          {
            group === 'user' && users.map((opt) => (
              <Board order={order} title={opt?.name} key={opt.id} tickets={tickets} users={users} group={group} userId={opt?.id} />
            ))
          }
          {
            group === 'priority' && priorities.map((opt, id) => (
              <Board order={order} title={opt} level={id} key={id} tickets={tickets} group={group} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
