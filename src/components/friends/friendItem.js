import {FriendAvatar, InfoWrap, FriendIsOnline, FriendName} from './friends.styled'

export default function FriendItem({ avatar, name, isOnline }) {
	return (
		<>
			<FriendAvatar src={avatar} alt={name} />
			<InfoWrap>
				<FriendIsOnline Online={isOnline}></FriendIsOnline>
				<FriendName>{name}</FriendName>
			</InfoWrap>
		</>
	)
}