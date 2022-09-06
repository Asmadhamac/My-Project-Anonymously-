import React from "react";
import TopBar from "../Components/topbar/TopBar";
import Header from "../Components/header/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Posts() {
  const [singlePost, setSinglePost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/post/${id}`).then((res) => {
      setSinglePost(res.data.posts);
      console.log(res.data.posts);
    });
  }, [id]);

  return (
    <div>
      <TopBar />
      <Header />
      <h1 className="w-3/5 m-auto ">{singlePost.name}</h1>
      <h2 className="w-3/5 m-auto">{singlePost.title}</h2>
      <h2 className="w-3/5 m-auto">{singlePost.content}</h2>
    </div>
  );
}

export default Posts;
