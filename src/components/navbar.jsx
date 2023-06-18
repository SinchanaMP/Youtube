
import logo from '../images/logo.png'
import notification from '../images/notification.png'
import video from '../images/video.png'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img width={100} src={logo} alt=""/>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="search"/>
            </div>
            <div className="navlinks">
                <Link to="/">Home</Link>
           < Link to="add-video">Add Video</Link>
            </div>
            <div className="options">
                <img width={35} src={notification} alt=""/>
                <img width={35} src={video} alt=""/>
                <h4>S</h4>
            </div>
        </div>
    )
}
export default Navbar;