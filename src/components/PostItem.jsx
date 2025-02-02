import MyButton from './UI/button/MyButton';

export default function PostItem({ props }) {
	return (
		<div className='post'>
		<div className='post__content'>
			<strong>{props.number}. {props.post.title}</strong>
			<div>
				{props.post.body}
			</div>
		</div>
		<div className='post__btns'>
			<MyButton onClick={() => edit(props.post)}>Редактировать</MyButton>
			<MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
		</div>
	</div>
	)
}