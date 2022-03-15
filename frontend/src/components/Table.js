import './Table.css';
import UserInfo from './tableComponents/UserInfo';
import ContactButton from './tableComponents/ContactButton';
import Dropdown from './tableComponents/Dropdown';
const Table = () => {
	return(
		<table class="table">
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
				<tr>
					<td><UserInfo/></td>
					<td><span class="active-circle bg-success"></span> Active</td>
					<td>Bangalore</td>
					<td>+91 9876543215</td>
					<td><ContactButton/></td>
					<td><Dropdown/></td>
				</tr>
				<tr>
					<td><UserInfo/></td>
					<td><span class="active-circle bg-danger"></span> Inactive</td>
					<td>Bangalore</td>
					<td>+91 9876543215</td>
					<td><ContactButton/></td>
					<td><Dropdown/></td>
				</tr>
				<tr>
					<td><UserInfo/></td>
					<td><span class="active-circle bg-success"></span> Active</td>
					<td>Bangalore</td>
					<td>+91 9876543215</td>
					<td><ContactButton/></td>
					<td><Dropdown/></td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table;