import Header from './components/Header'
import './index.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [currentPost, setCurrentPost] = useState(null)


  useEffect(() => {
    async function fetchPosts() {
      try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(response.data)
    } catch (err) {
      setError(`${err.message}`)
    }
    }
    fetchPosts()
  }, [])

  if (error) return <div>Error: {error}</div>

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)))
    setCurrentPost(null)
  }

  const editPost = (post) => {
    setCurrentPost(post)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className='App'>
    <Header />
      <PostForm create={createPost} update={updatePost} currentPost={currentPost}/>
      {posts.length !== 0
        ? <PostList remove={removePost} editPost={editPost} posts={posts}/>
        : <h1 style={{textAlign: 'center'}}>Заданий нет</h1>
      }
    </div>
  );
}

export default App;