import React from 'react'
import PostBody from '../PostBody/PostBody'
import PostShare from '../PostShare/PostShare'
import './Post.css'

const Post = () => {
	return (
		<div className="postSide">
			<PostShare/>
			<PostBody/>
		</div>
	)
}

export default Post
