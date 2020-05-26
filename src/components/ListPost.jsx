import React from "react";
import { PostCard } from "components";

/**
 * List posts
 *
 * @returns {JSX}
 */
const ListPosts = ({ title, body, id, setPosts }) => {
  return (
    <>
      <div key={id}>
        <PostCard title={title} body={body} id={id} setPosts={setPosts} />
      </div>
    </>
  );
};

export default ListPosts;
