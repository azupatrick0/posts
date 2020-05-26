import React, { useState, useEffect } from "react";
import { Loader, Header, ListPosts } from "components";

/**
 * Edit posts
 *
 * @returns {JSX}
 */
const Posts = ({ isAuthenticated, history }) => {
  const [posts, setPosts] = useState([]);

  if (!isAuthenticated) {
    history.push('/login')
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => setPosts(json));
  }, [])

  return (
    <>
      <Header />

      <div className="posts-title">All Posts</div>
      <div className="list-posts">
        {posts.length < 1 ? (
          <Loader />
        ) : (
          posts.map(({ title, body, id }) => (
            <ListPosts title={title} body={body} id={id} setPosts={setPosts} />
          ))
        )}
      </div>
    </>
  );
};

export default Posts;
