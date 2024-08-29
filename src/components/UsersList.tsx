import './UsersList.css';
import { User } from '../App';

type UsersListProps = {
    users: User[];
    removeUser: (id: number) => void;
}

const UsersList = (props: UsersListProps) => {

    return (
        <div>
            {props.users.length > 0 && <div className='list'>
                {props.users.map(user => {
                    return <div className='userItem' key={user.id} onClick={()=>props.removeUser(user.id)}>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.usertype}</p>
                    </div>
                })}
            </div>}
        </div>

    )
}
export default UsersList;