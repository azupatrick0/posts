import React, { useState } from "react";
import { Loader, Header, ListPosts } from "components";

/**
 * Edit posts
 *
 * @returns {JSX}
 */
const SinglePosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => setPosts(json));
  const [posts, setPosts] = useState([]);

  return (
    <>
      <Header />

      <div className="posts-title">All Posts</div>
      <div className="list-posts">
        {posts.length < 1 ? (
          <Loader />
        ) : (
          posts.map(({ title, body, id }) => (
            <ListPosts title={title} body={body} id={id} />
          ))
        )}
      </div>
    </>
  );
};

export default SinglePosts;
