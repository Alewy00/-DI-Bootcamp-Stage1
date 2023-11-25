import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
  );
}
export default PostList;
