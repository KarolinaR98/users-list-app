import { useState } from 'react';
import './App.css'
import UsersListForm from './components/UsersListForm';
import UsersList from './components/UsersList';

export type UserType = "User" | "Admin";

export type FormData = {
  username: string;
  email: string;
  usertype: UserType;
}

export type User = {
  id: number;
} & FormData

const App = () => {

  const [formData, seFormData] = useState<FormData>({
    username: '',
    email: '',
    usertype: 'User',
  });

  const [users, setUsers] = useState<User[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {

    seFormData(prevFormData => {
      return { ...prevFormData, [event.target.name]: event.target.value }
    })

  }

  const setUser = (event: React.SyntheticEvent) => {

    event.preventDefault();
    setUsers(users.concat({...formData, id: Date.now()}))
  }

  const removeUser = (id: number) => {
    const filteredUsers: User[] = users.filter(user=>user.id !== id);
    setUsers(filteredUsers);
  }

  return (
    <>
      <UsersListForm handleInputChange={handleInputChange} setUser={setUser} formData={formData}/>
      <UsersList users={users} removeUser={removeUser}/>
    </>
  )
}

export default App;
