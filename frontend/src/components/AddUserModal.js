import './AddUserModal.css'
import axios from 'axios';
import {useState} from 'react'

const AddUserModal = (props) => {
	const [fullname, setFullname] = useState("")
	const [tag, setTag] = useState("")
	const [location, setLocation] = useState("")
	const [phone, setPhone] = useState("")
	const [status, setStatus] = useState(false)
	const [picture, setPicture] = useState("")

	const handleStatus = () => {
		setStatus(!status)
	}
	const handleFullname = e => setFullname(e.target.value)
	const handleTag = e => setTag(e.target.value)
	const handleLocation = e => setLocation(e.target.value)
	const handlePhone = e => setPhone(e.target.value)
	const handlePicture = e => setPicture(e.target.files[0])
	const handleSubmit = e => {
		e.preventDefault()
		console.log(picture)
		let form_data = new FormData();
		form_data.append('fullname', fullname);
		form_data.append('tag', tag);
		form_data.append('location', location);
		form_data.append('phone', phone);
		form_data.append('status', status);
	    form_data.append('picture', picture, picture.name);
	    let url = 'http://localhost:8000/api/users/';
	    axios.post(url, form_data, {
	      headers: {
	        'content-type': 'multipart/form-data'
	      }
		    })
	        .then(res => {
	        	console.log(res.data);
	        	setFullname("")
				setTag("")
				setLocation("")
				setPhone("")
				setStatus(false)
				setPicture("")
				props.modalToggle()
				props.refresh()
	        })
	        .catch(err => console.log(err))
		  };

	return(
		<div className="overlay">
			<form className="modal-add" onSubmit={handleSubmit}>
				<h1 className="form-title">Add a new user</h1>
				<div className="form-section-container">
					<div className="form-item-container">
						<label htmlFor="fullname">Fullname</label>
						<input onChange={handleFullname} value={fullname} type="text" id="fullname" placeholder="Fullname"/>
					</div>
					<div className="form-item-container">
						<label htmlFor="tag">Tag</label>
						<input onChange={handleTag} value={tag} type="text" id="tag" placeholder="@tag"/>
					</div>
				</div>
				<div className="form-section-container">
					<div className="form-item-container">
						<label htmlFor="location">Location</label>
						<input onChange={handleLocation} value={location} type="text" id="location" placeholder="Location"/>
					</div>
					<div className="form-item-container">
						<label htmlFor="phone">Phone</label>
						<input onChange={handlePhone} value={phone}type="text" id="phone" placeholder="00221 76 000 00 00"/>
					</div>
				</div>
				<div className="form-section-container">
					<div className="form-item-container">
						<label htmlFor="picture">Select a Picture</label>
						<input onChange={handlePicture} type="file" id="picture" accept="image/png, image/jpeg, image/jpg"/>
					</div>
					<div className="form-item-container-last">
						<label htmlFor="checkbox">Active?</label>
						{status ? <input onClick={handleStatus} type="checkbox" id="checkbox" checked/> : <input onClick={handleStatus} type="checkbox" id="checkbox"/>}
					</div>
				</div>
				<div className="form-section-container">
					<button onClick={props.modalToggle} className="btn btn-primary btn-sm bg-danger">Cancel</button>
					<button className="btn btn-primary btn-sm">Insert</button>
				</div>
			</form>
		</div>
	)
}

export default AddUserModal;