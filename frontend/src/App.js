import './App.css';
import {useState, useEffect} from 'react';
import Table from './components/Table.js';
import AddUserModal from './components/AddUserModal.js';


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/api/users/').then(response => response.json()).then(data => setUsers(data))
  }, [])

  const refreshAdd = () => fetch('http://localhost:8000/api/users/').then(response => response.json()).then(data => setUsers(data))

  const [addModal, setAddModal] = useState(false)

  const handleAdd = () => {
    setAddModal(!addModal)
  }

  return (
    <div className='container'>
    <div>
      <h1>Users Table UI</h1>
      <button onClick={handleAdd} className="btn btn-add">Ajouter</button>
    </div>
      <Table users={users} setUsers={setUsers}/>
      {addModal && <AddUserModal refresh={refreshAdd} modalToggle={handleAdd}/>}
    </div>
  );
}

export default App;
