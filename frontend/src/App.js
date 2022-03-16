import './App.css';
import {useState, useEffect} from 'react';
import Table from './components/Table';
import AddUserModal from './components/AddUserModal';
import EditUserModal from './components/EditUserModal'


function App() {
  const [users, setUsers] = useState([])
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [userUrl, setUserUrl] = useState("")

  useEffect(() => {
    fetch('http://localhost:8000/api/users/').then(response => response.json()).then(data => setUsers(data))
  }, [])

  const refresh = () => fetch('http://localhost:8000/api/users/').then(response => response.json()).then(data => setUsers(data))

  const handleAddToggle = () => {
    setAddModal(!addModal)
  }
  const handleSetToggle = () => {
    setEditModal(!editModal)
  }
  return (
    <div className='container'>
      <div>
        <h1>Users Table UI</h1>
        <button onClick={handleAddToggle} className="btn btn-add">Ajouter</button>
      </div>
      <div>
      {users.length !== 0  && <Table users={users} setEditModal={setEditModal} setUserUrl={setUserUrl} refresh={refresh}/>}
        {addModal && <AddUserModal refresh={refresh} modalToggle={handleAddToggle}/>}
        {editModal && <EditUserModal refresh={refresh} modalToggle={handleSetToggle} userUrl={userUrl}/>}
      </div>
    </div>
  );
}

export default App;
