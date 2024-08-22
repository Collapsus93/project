import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useEffect, useState } from 'react';


export default function PostForm({create, update, currentPost }) {
	const [post, setPost] = useState({title: '', body: ''})

  useEffect(() => {
    if (currentPost) {
      setPost({title: currentPost.title, body: currentPost.body})
    } else {
      setPost({title: '', body: ''})
    }
  }, [currentPost])


  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
			...post, id: currentPost ? currentPost.id : Date.now()
		}
    if (currentPost) {
      update(newPost)
    } else {
		create(newPost)
    }
		setPost({title: '', body: ''})
  }



	return (
		<form onSubmit={handleSubmit}>
      <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type='text' 
        placeholder='Название поста' 
      />
      <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type='text' 
        placeholder='Описание поста' 
      />
      <MyButton type='submit'>{currentPost ? 'Сохранить изменения' : 'Создать пост'}</MyButton>
    </form>
	)
}