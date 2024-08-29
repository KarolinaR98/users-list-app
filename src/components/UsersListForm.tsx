import './UsersListForm.css';
import { FormData } from '../App';

type UsersListFormProps = {
    formData: FormData;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    setUser: (event: React.SyntheticEvent) => void;
}

const UsersListForm = (props: UsersListFormProps) => {

    return (
        <div className="usersListForm">
            <form onSubmit={props.setUser}>
                <label htmlFor="username">User name</label>
                <input value={props.formData.username} type="text" id="username" name="username" placeholder="User name" onChange={props.handleInputChange} />
                <label htmlFor="email">User email</label>
                <input value={props.formData.email} type="email" id="email" name="email" placeholder="User email" onChange={props.handleInputChange} />
                <label htmlFor="usertype">User type</label>
                <select name='usertype' id='usertype' onChange={props.handleInputChange}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
                <button>Save</button>
            </form>
        </div>
    )
}

export default UsersListForm;