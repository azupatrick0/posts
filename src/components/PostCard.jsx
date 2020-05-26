import React, { useState } from "react";
import { Loader } from "components";

/**
 * Post Card
 *
 * @returns {JSX}
 */
const PostCard = ({ title, body, id, setPosts }) => {

  const [loading, setLoading] = useState(false);

  const getASinglePost = () => {
    setLoading(true);
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setPosts([json])
      });
  }

  return (
    <>
      {
        loading ? <Loader /> :
          <div onClick={getASinglePost}>
            <div className="list-posts__title">{title}</div>
            <div className="list-posts__body">{body}</div>
          </div>
      }
    </>
  );
};

export default PostCard;
