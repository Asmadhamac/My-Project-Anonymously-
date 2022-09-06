import Header from "../Components/header/Header";
import Post from "../Components/post/Post";
import Posts from "../Components/posts/Posts";
import TopBar from "../Components/topbar/TopBar";
import "./home.css";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="home">
        <Post />
        <Posts />
      </div>
    </>
  );
}

export default Home;
