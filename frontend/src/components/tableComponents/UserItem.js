import {useState, useEffect} from 'react';
import UserInfo from './UserInfo';
import ContactButton from './ContactButton';
import Dropdown from './Dropdown';

const UserItem = (props) => {
	const [isEditing, setIsEditing] = useState(false)
	const handleEdit = () => {
		const toggleEdit = !isEditing
		setIsEditing(toggleEdit)
	}
	return(
		<>
			<tr className="user-item">
				<td><UserInfo fullname={props.fullname} tag={props.tag} picture={props.picture}/></td>
				<td><span className={`active-circle ${props.status ? 'bg-success' : 'bg-danger'}`}></span> {props.status ? 'Active' : 'Inactive'}</td>
				<td>{props.location}</td>
				<td>{props.phone}</td>
				<td><ContactButton/></td>
				<td><Dropdown url={props.url} handleEdit={handleEdit}/></td>
			</tr>
			{isEditing && 
			<tr className="edit-fields">
				<td><UserInfo isEditing={isEditing} fullname={props.fullname} tag={props.tag} picture={props.picture}/></td>
				<td>
					<input type="checkbox" id="status" name="status"/>
	  				<label for="status">Active?</label>
	  			</td>
				<td><input type='text' placeholder={props.location}/></td>
				<td><input type='text' placeholder={props.phone}/></td>
				<td><ContactButton/></td>
				<td><ContactButton/></td>
			</tr>
			}
			
		</>
	)
}

export default UserItem;