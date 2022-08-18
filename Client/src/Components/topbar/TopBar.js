import "./topbar.css"

export default function topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-microblog"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItems">HOME</li>
                <li className="topListItems">ABOUT</li>
                <li className="topListItems">SIGN IN</li>
                <li className="topListItems">SIGN UP</li>

            </ul>
        </div>
        <div className="topRight">
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
  )
}
