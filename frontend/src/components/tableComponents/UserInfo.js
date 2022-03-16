import './UserInfo.css';
import user from './user.jpg';

const UserInfo = (props) => {
	const {fullname, picture, tag} = props
	return(
		<div className="user-info">
			<div className="user-info__img">
				<img src={picture} alt="profile"/>
			</div>
			<div className="user-info__basic">
				<h5 className="mb-0">{fullname}</h5>
				<p className="text-muted mb-0">@{tag}</p>
			</div>
		</div>
	)
}

export default UserInfo;