import { useNavigate } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-microblog"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li onClick={() => navigate("/")} className="topListItems">
            HOME
          </li>
          <li onClick={() => navigate("/about")} className="topListItems">
            ABOUT
          </li>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  );
}
