import "./posts.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:2000/post")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="post">
      {posts.map((post) => (
        <div className="postItem">
          <div className="postNickname">{post.name}</div>
          <span className="postTitle"> {post.title}</span>
          <p className="postText">{post.content.substring(0, 100)}...</p>
          <div>
            <button
              className="btnRead rounded-lg"
              onClick={() => navigate(`/post/${post._id}`)}
            >
              {" "}
              Read more..
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
