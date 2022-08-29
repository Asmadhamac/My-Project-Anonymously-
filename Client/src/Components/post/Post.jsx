import React, {useState} from "react";
import "./post.css";
import axios from "axios";


export default function Post() {
  const [nickName, setNickName] = useState('')
  const [title, setTitle] = useState('')
 const [desc, setDesc] = useState('')
 console.log(nickName);

  const handleSubmit = async(e) => {
e.preventDefault()
try {
  const body = {
    nickName: nickName,
    title: title,
    desc: desc
  }
  await axios.post('http://localhost:2000/post', {
    body
  })
  document.getElementsByClassName('postItem').reset()
} catch (error) {
  console.log(error);
  
}


  }
  return (
    <div className="post">
      <form onSubmit={handleSubmit} className="postItem">
        <input value={nickName} onChange={(e)=> setNickName(e.target.value)} type="text" placeholder="Enter a Nickname"></input>
        <br></br>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter Your Title" />
        <br></br>
        <textarea 
        value={desc} onChange={(e) => setDesc(e.target.value)}
          className="postTextarea"
          placeholder="What's On your Mind...."
          rows="15"
        />
        <br></br>
        <div>
          <button className="btnPost" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
