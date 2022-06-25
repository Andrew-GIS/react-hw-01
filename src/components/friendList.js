import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
	return (
			<div>
			<ul class="friend-list">
				{friends.map((friend) => (
					<li class="friend-item" key={friend.id}>
						<FriendItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
					</li>
				))}
				</ul>
			</div>
		)
}

function FriendItem({avatar, name, isOnline}) {
	return (
		<>
			<span class="friend_isOnline">{isOnline}</span>
			<img class="friend_avatar" src={avatar} alt={name} />
			<span class="friend_name">{name}</span>
		</>
	)
}

FriendsList.propTypes = {
	friends: PropTypes.array.isRequired,
}

FriendItem.propTypes = {
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}