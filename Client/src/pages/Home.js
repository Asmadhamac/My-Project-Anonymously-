import Header from "../Components/header/Header"
import Post from "../Components/post/Post"
import Posts from "../Components/posts/Posts"
import "./home.css"

export default function Home() {
  return (
    <>
            <Header/>
        <div className="home">
          <Post/>
          <Posts/>
          </div> 
           HomePage
        </>
  );
}
