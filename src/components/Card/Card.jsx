import './Card.css'
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import UserIcon from '../UserIcon/UserIcon';
const Card = ({ ticket, user }) => {
    const userIntials = user?.name.split(' ').map(word => word.charAt(0)).join('');

    return (
        <div className='card'>
            <div className='card_header'>
                <p className='card_id'>{ticket?.id}</p>
                <UserIcon intials={userIntials} available={user?.available} />
            </div>
            <div className='card_info'>
                <p>{ticket?.title}</p>
            </div>
            <div className='card_footer'>
                <div>
                    <BsFillInfoSquareFill />
                </div>
                <div className="card_tag">
                    <FaCircle />
                    {
                        ticket?.tag.map((tg, id) => (
                            <p key={id} >{tg}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card