import React from "react";
import TopBar from "../Components/topbar/TopBar";
import Header from "../Components/header/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// function comment(){
//   const [name, setName] = useState ('')
//   const [comment, setComment] = useState('')

//   const handleComment = async(e) => {
//     e.preventDefault()
//     try {
//       const reply ={
//         name: name,
//         comment: comment
//       }
//       const res = await axios.post('http://localhost:2000/post/63136afa6768782456225c44')
//       setName("")
//       setComment("")
//     } catch (error)
//   }
// }

function Posts() {
  const [singlePost, setSinglePost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/post/${id}`).then((res) => {
      setSinglePost(res.data.posts);
      console.log(res.data.posts);
    });

    axios.get(`http://localhost:2000/reply/${id}`).then((res) => {
      setComments(res.data.comments);
    });
  });

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const reply = {
        name: name,
        comment: comment,
        post: id,
      };
      const res = await axios.post("http://localhost:2000/reply", reply);
      console.log(res.data);
      setName("");
      setComment("");
    } catch (error) {}
  };

  return (
    <div>
      <div>
        <TopBar />
        <Header />
        <div className="my-10">
          <h1 className="w-3/5 m-auto text-xl">{singlePost.name}</h1>
          <h2 className="w-3/5 m-auto font-black text-xl">
            {singlePost.title}
          </h2>
          <p className="w-3/5 m-auto py-2">{singlePost.content}</p>
        </div>
      </div>

      <div className="w-3/5 m-auto ">
        <form onSubmit={handleComment}>
          <center className="py-2 text-2xl">Enter a comment</center>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Name"
            className="border rounded-sm w-full p-2"
          />
          <br></br>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write Your Comment"
            className="border rounded-sm w-full p-2 my-2"
          />

          <div>
            <button
              type="submit"
              className="bg-teal-600 text-white p-3 rounded-md"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
      <div className="w-3/5 m-auto my-3 border-t">
        <div className="py-3">
          <h3 className="text-xl">Comments</h3>
          {comments.length === 0 && (
            <center className="py-2">No comments for this post.</center>
          )}
          {comments.map((comment) => (
            <div className="py-2 border-t p-1 my-2">
              <h3 className="text-teal-700 text-lg">{comment.name}</h3>
              <h3>{comment.comment}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
