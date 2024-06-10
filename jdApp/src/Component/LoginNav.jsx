import { Link } from 'react-router-dom'
import '../Css/LoginNavbar.css'

function LoginNav(){

    return (
        <>
            <div className='LoginNavContainer'>
                <nav className='nav'>
                        <Link to='/'><div className="Image">
                            <img src="https://misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="" />
                        </div></Link>
                        <div>
                            <p><i style={{color: 'red'}} className="fa-solid fa-comment-dots"></i>Login page, improvement suggestions</p>
                        </div>
                </nav>
            </div>
        </>
    ) 
}

export default LoginNav