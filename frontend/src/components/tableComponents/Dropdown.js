import {useState} from 'react';
import './Dropdown.css'

const Dropdown = () => {
	const [toggle, setToggle] = useState(false)

	const handleClick = () => {
		const newToggle = !toggle
		console.log(newToggle)
		setToggle(newToggle)
	}
	return (
		<div class="dropdown open">
			<a href="#!" onClick={handleClick} class="px-2" id="triggerId1" data-toggle="dropdown" aria-haspopup="true"
				aria-expanded="false"><svg className="dots" fill="#007bff" height="15" width="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"/></svg>
			</a>
			<div class="dropdown-menu" aria-labelledby="triggerId1" style={{display: toggle && "block"}}>
				<a class="dropdown-item" href="#"><i class="fa fa-pencil mr-1"></i> Edit</a>
				<a class="dropdown-item text-danger" href="#"><i class="fa fa-trash mr-1"></i> Delete</a>
			</div>
		</div>
	)
}

export default Dropdown;