import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/profileCard'
import './Profile.css'

const Profile = () => {
	return (
		<div className="profile">
			<LogoSearch/>
			<ProfileCard/>
			<FollowersCard/>
		</div>
	)
}

export default Profile
