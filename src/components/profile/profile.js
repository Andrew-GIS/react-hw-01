import PropTypes from 'prop-types';
import {Profile, Description, Avatar, Name, Tag, Location, Stats, Stat, Label, Quantity } from './profile.styled';

export default function UserProfile ({username, tag, location, avatar, stats}) {
	return (
		<>
			<Profile >
				<Description >
					<Avatar
					src={avatar}
					alt={username}
					/>
					<Name>{username}</Name>
					<Tag>@{tag}</Tag>
					<Location >{location}</Location>
				</Description>

				<Stats >
					<Stat >
						<Label >Followers</Label>
						<Quantity >{stats.followers}</Quantity>
					</Stat>
					<Stat  >
						<Label >Views</Label>
						<Quantity >{stats.views}</Quantity>
					</Stat>
					<Stat  >
						<Label >Likes</Label>
						<Quantity >{stats.likes}</Quantity>
					</Stat>
				</Stats>
			</Profile>
		</>)
}

UserProfile.protoTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
}