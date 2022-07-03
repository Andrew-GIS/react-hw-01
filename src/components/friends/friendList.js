import PropTypes from 'prop-types';
import FriendItem from './friendItem';
import {Conteiner, FriendList, Friend } from './friends.styled'

export default function FriendsList({ friends }) {
	return (
			<Conteiner>
			<FriendList>
				{friends.map((friend) => (
					<Friend key={friend.id}>
						<FriendItem isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
					</Friend>
				))}
				</FriendList>
			</Conteiner>
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