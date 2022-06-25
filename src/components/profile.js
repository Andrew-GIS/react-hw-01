import PropTypes from 'prop-types';

export default function UserProfile ({username, tag, location, avatar, stats}) {
	return	(<div class="profile">
				<div class="description">
					<img
					src={avatar}
					alt={username}
					class="avatar"
					/>
					<p class="name">{username}</p>
					<p class="tag">{tag}</p>
					<p class="location">{location}</p>
				</div>

				<ul class="stats">
					<li>
					<span class="label">Followers</span>
					<span class="quantity">{stats.views}</span>
					</li>
					<li>
					<span class="label">Views</span>
					<span class="quantity">{stats.views}</span>
					</li>
					<li>
					<span class="label">Likes</span>
					<span class="quantity">{stats.likes}</span>
					</li>
				</ul>
			</div>)
}

UserProfile.protoTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
}