import {useState, useEffect} from 'react';
import UserInfo from './UserInfo';
import ContactButton from './ContactButton';
import Dropdown from './Dropdown';

const UserItem = (props) => {
	const [toggle, setToggle] = useState(false)

	useEffect(() =>{
		const closeModal = (event) =>{
			if (toggle || !event.target.closest(".dropdown")) {
				setToggle(false)
			}
		}
		document.addEventListener('click', closeModal)
		
		return(
			document.removeEventListener('click', closeModal)
		)
	}, [])

	const handleEdit = () => {
		props.setUserUrl(props.url)
		props.setEditModal(true)
		setToggle(false)
		
	}
	return(
		<tr className="user-item">
			<td><UserInfo fullname={props.fullname} tag={props.tag} picture={props.picture}/></td>
			<td><span className={`active-circle ${props.status ? 'bg-success' : 'bg-danger'}`}></span> {props.status ? 'Active' : 'Inactive'}</td>
			<td>{props.location}</td>
			<td>{props.phone}</td>
			<td><ContactButton/></td>
			<td><Dropdown toggle={toggle} refresh={props.refresh} url={props.url} setToggle={setToggle} handleEdit={handleEdit}/></td>
		</tr>
	)
}

export default UserItem;