import tune from '../assets/tune.svg'
import expand from '../assets/down_arrow.svg'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
    const [expandMore, setExpandMore] = useState(false);
    return (
        <div className='nav'>
            <div
                className='expand_btn'
                onClick={() => { setExpandMore(prev => !prev) }}
            >
                <img src={tune} alt="tune" />
                <span>Display</span>
                <img src={expand} alt="expand" />
            </div>
            {expandMore && <div className="dropdown">
                <div className='display'>
                    <p>Grouping</p>
                    <select name="group" id="groupBy">
                        <option value="Status">Status</option>
                        <option value="User">User</option>
                        <option value="Priority">Priority</option>
                    </select>
                </div>
                <div className='display'>
                    <p>Ordering</p>
                    <select name="group" id="groupBy">
                        <option value="Priority">Priority</option>
                        <option value="Title">Title</option>
                    </select>
                </div>
            </div>}
        </div>
    )
}

export default Navbar