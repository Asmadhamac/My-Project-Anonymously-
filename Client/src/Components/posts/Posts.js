import "./posts.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postItem">
        <div className="postNickname">xoxo</div>
        <span className="postTitle"> WHEN I LOST MY PUPPY</span>
        <p className="postText">
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <div>
          <button className="btnRead"> Read more..</button>
        </div>
        <br></br> <br></br>
        <div className="postNickname">yoyo</div>
        <span className="postTitle"> HOW I KNEW I HAD PANICK ATTACKS</span>
        <p className="postText">
          publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>
        <div>
          <button className="btnRead"> Read more..</button>
        </div>
      </div>
    </div>
  );
}
