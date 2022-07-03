import PropTypes from 'prop-types';
import FriendItem from './friendItem';
import {FriendList, Friend } from './friends.styled'

export default function FriendsList({ friends }) {
	return (
			<div>
			<FriendList>
				{friends.map((friend) => (
					<Friend key={friend.id}>
						<FriendItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
					</Friend>
				))}
				</FriendList>
			</div>
		)
}

FriendsList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact({
			isOnline: PropTypes.bool.isRequired,
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
		})
	).isRequired,
}