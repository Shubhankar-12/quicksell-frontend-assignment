import './UserIcon.css'
import { FaCircle } from 'react-icons/fa6'

const UserIcon = ({ intials, available }) => {
    return (
        <div className='user'>
            <div className='user_icon'>{intials}</div>
            <div className='dot' style={available ? { color: "#50B053" } : {}}>
                <FaCircle />
            </div>
        </div>
    )
}

export default UserIcon