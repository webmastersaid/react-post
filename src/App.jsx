import React, { useMemo, useState } from "react";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import DefaultModal from "./components/ui/modal/DefaultModal";
import PostForm from "./components/PostForm";
import './styles/App.css';
import DefaultButton from "./components/ui/button/DefaultButton";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', description: 'Often abbreviated as JS' },
    { id: 2, title: 'React', description: 'Free and open-source front-end JavaScript library for building user interfaces based on components' },
    { id: 3, title: 'Vue', description: 'Model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.[' },
    { id: 4, title: 'Angular', description: 'TypeScript-based, free and open-source web application framework' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }
  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <div>
      <DefaultButton onClick={() => setModal(true)}>Create new post</DefaultButton>
      <DefaultModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </DefaultModal>
      <hr />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedSearchedPosts} title='Posts' />
    </div>
  );
}

export default App;
