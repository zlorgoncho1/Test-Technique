import './EditUserModal.css'
import axios from 'axios';
import {useState, useEffect} from 'react'

const EditUserModal = (props) => {
	const [fullname, setFullname] = useState("")
	const [tag, setTag] = useState("")
	const [location, setLocation] = useState("")
	const [phone, setPhone] = useState("")
	const [status, setStatus] = useState(false)
	const [picture, setPicture] = useState("")

	const handleStatus = () => setStatus(!status)
	const handleFullname = e => setFullname(e.target.value)
	const handleLocation = e => setLocation(e.target.value)
	const handlePhone = e => setPhone(e.target.value)
	const handlePicture = e => setPicture(e.target.files[0])

	useEffect(() => {
	    fetch(props.userUrl).then(response => response.json()).then(data => {
	    	setTag(data.tag)
	    	setFullname(data.fullname)
	    	setLocation(data.location)
	    	setPhone(data.phone)
	    	setStatus(data.status)
	    })
	}, [props.userUrl])
	
	const handleSubmit = e => {
		e.preventDefault()
		if (picture === ""){
			fetch(props.userUrl, {
				method: 'PATCH',
				body: JSON.stringify({
					fullname: fullname,
					tag: tag,
					status: status,
					location: location,
					phone: phone,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			.then((response) => response.json())
			.then((json) => {
				props.modalToggle()
				props.refresh()
			});
		}else{
			let form_data = new FormData();
			form_data.append('fullname', fullname);
			form_data.append('tag', tag);
			form_data.append('location', location);
			form_data.append('phone', phone);
			form_data.append('status', status);
		    form_data.append('picture', picture, picture.name);
		    let url = props.userUrl;
		    axios.patch(url, form_data, {
		      headers: {
		        'content-type': 'multipart/form-data'
		      }
			    })
		        .then(res => {
				props.modalToggle()
				props.refresh()
	        })
	        .catch(err => console.log(err))
		}
	}
	return(
		<div className="overlay">
			<form className="modal-add" onSubmit={handleSubmit}>
				<h1 className="form-title">Editing @{tag}</h1>
				<div className="form-section-container">
					<div className="form-item-container">
						<label htmlFor="fullname">Fullname</label>
						<input onChange={handleFullname} value={fullname} placeholder={fullname} type="text" id="fullname"/>
					</div>
				</div>
				<div className="form-section-container">
					<div className="form-item-container">
						<label htmlFor="location">Location</label>
						<input onChange={handleLocation} value={location} placeholder={location} type="text" id="location"/>
					</div>
					<div className="form-item-container">
						<label htmlFor="phone">Phone</label>
						<input onChange={handlePhone} value={phone} placeholder={phone}type="text" id="phone"/>
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
					<button className="btn btn-primary btn-sm">Edit</button>
				</div>
			</form>
		</div>
	)
}

export default EditUserModal;