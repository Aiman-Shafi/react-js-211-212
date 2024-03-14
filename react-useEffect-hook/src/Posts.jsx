import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(post);
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts.length == 0) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }

  return (
    <>
      {posts.map((data) => (
        <PostCard post={data} />
      ))}
    </>
  );
}

function PostCard({ post }) {
  const { title, body } = post;
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
}

export default App;
