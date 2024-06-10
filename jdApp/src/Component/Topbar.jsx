import { Link } from 'react-router-dom'
import '../Css/Topbar.css'
function Topbar(){
    return (
        <>
            <div className='topbarContainer'>
                <div className='topbar'>
                    <div className='topbarLeft'>
                        <p> <i className="fa-solid fa-location-dot"></i> OverSeas</p>
                    </div>
                    <div className='topbarRight'>
                        <ul>
                            <Link to='/login'><li><p>Hello,</p><p style={{color: 'red'}}>please log in to</p></li></Link>
                            <li>rigester for free</li>
                            <span>|</span>
                            <li>My Order</li>
                            <span>|</span>
                            <li>My  <i className="fa-solid fa-chevron-down"></i></li>
                            <span>|</span>
                            <li>JD Member</li>
                            <span>|</span>
                            <li>Corporate  <i className="fa-solid fa-chevron-down"></i></li>
                            <span>|</span>
                            <li>customer  <i className="fa-solid fa-chevron-down"></i></li>
                            <span>|</span>
                            <li>Site  <i className="fa-solid fa-chevron-down"></i></li>
                            <span>|</span>
                            <li>JD Mobile</li>
                            <li>Website Accessibility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar