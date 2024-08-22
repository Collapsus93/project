import PostItem from './PostItem'

export default function PostList({posts, remove, edit }) {
	return (
		<div>
		{posts.map((post, index)  => 
			<PostItem remove={remove} edit={edit} number={index + 1} post={post} key={post.id}/>
		)}
		</div>
	)
}