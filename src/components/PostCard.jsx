import React from "react";

/**
 * Post Card
 *
 * @returns {JSX}
 */
const PostCard = ({ title, body, id, setPosts }) => {

  const getASinglePost = () => {
    console.log(id)
    // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json, 'hehehe')
    //   setPosts(json)});
  }


  return (
    <div onClick={getASinglePost}>
      <div className="list-posts__title">{title}</div>
      <div className="list-posts__body">{body}</div>
    </div>
  );
};

export default PostCard;
