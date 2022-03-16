import {useState, useEffect} from 'react';
import './Table.css';
import UserItem from './tableComponents/UserItem';
const Table = (props) => {
	const {users, setUsers} = props

	const listUsers = users.map(user => 
		<UserItem 
			key ={user} 
			fullname={user.fullname} 
			tag={user.tag}
			picture={user.picture}
			status={user.status} 
			location={user.location} 
			phone={user.phone} 
			url={user.url}
		/>)

	return(
		<table className="table">
			<thead>
				<tr>
					<th>User</th>
					<th>Status</th>
					<th>Location</th>
					<th>Phone</th>
					<th>Contact</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{listUsers}
			</tbody>
		</table>
	)
}

export default Table;