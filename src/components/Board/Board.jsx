import './Board.css'
import { FaCheckCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import Card from '../Card/Card';

const Board = (props) => {
    const { title, tickets, users, group, level, userId, order } = props;
    console.log(order);
    let filteredTickets = [];
    if (group === 'status')
        filteredTickets = tickets.filter(ticket => ticket.status.toLowerCase() === title.toLowerCase());
    else if (group === 'priority')
        filteredTickets = tickets.filter(ticket => ticket.priority === level);
    else
        filteredTickets = tickets.filter(ticket => ticket.userId === userId);
    if (order === 'priority')
        filteredTickets = filteredTickets.slice().sort((a, b) => b.priority - a.priority);
    else
        filteredTickets = filteredTickets.slice().sort((a, b) => a.title.localeCompare(b.title));
    return (
        <div className='board'>
            <div className='board_top'>
                <div className="board_top_name">
                    <FaCheckCircle />
                    <p>{title} </p>
                    <span>{filteredTickets.length}</span>
                </div>
                <div className="board_top_options">
                    <IoMdAdd />
                    <SlOptions />
                </div>
            </div>
            <div className="board_container">
                {
                    filteredTickets.map((ticket) => {
                        const user = users?.find(user => user.id === ticket.userId)
                        return (<Card ticket={ticket} key={ticket.id} user={user} />)
                    })
                }



            </div>
        </div>
    )
}

export default Board