import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitleSm">welcome!</div>
        <div className="headerTitleLg">
          {" "}
          To a Safe Space Where You Can Express yourself...
        </div>
      </div>
      <img className="headerImage" src="/headerimage.jpeg" alt=""></img>
    </div>
  );
}
