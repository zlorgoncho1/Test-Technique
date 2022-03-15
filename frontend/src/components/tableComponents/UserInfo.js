import './UserInfo.css';
import user from './user.jpg';

const UserInfo = () => {
	return(
		<div class="user-info">
			<div class="user-info__img">
				<img src={user} alt="User Img"/>
			</div>
			<div class="user-info__basic">
				<h5 class="mb-0">Kiran Acharya</h5>
				<p class="text-muted mb-0">@kiranacharyaa</p>
			</div>
		</div>
	)
}

export default UserInfo;