import React, {useState} from "react";
import "./post.css";
import axios from "axios";


export default function Post() {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
 const [content, setContent] = useState('')


  const handleSubmit = async(e) => {
e.preventDefault()
try {
  const body = {
   name:name,
    title: title,
    content:content
  }
  const res = await axios.post('http://localhost:2000/post', body)
  console.log(res)
  setName("")
  setTitle("")
  setContent("")
} catch (error) {
  console.log(error);
  
}
  }
  return (
    <div className="post border">
      <form onSubmit={handleSubmit} className="postItem ">
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter a Nickname"></input>
        <br></br>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Your Title" />
        <br></br>
        <textarea 
        value={content} onChange={(e) => setContent(e.target.value)}
          className="postTextarea"
          placeholder="What's On your Mind...."
          rows="15"
        />
        <br></br>
        <div>
          
          <button className="bg-[#6eacac] py-3 px-5 rounded-md text-sm text-white" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
