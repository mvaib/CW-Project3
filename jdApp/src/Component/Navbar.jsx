import '../Css/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){

    return (
        <>
            <div className='NavbarContainer'>
                <nav className='nav'>
                    <Link to='/'><div className="Image">
                        <img src="https://misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="" />
                    </div></Link>
                    <div>
                        <ul>
                            <li>Jingdon</li>
                            <li>Procurement</li>
                            <li>service</li>
                            <li>Navigation</li>
                        </ul>
                        <input type="text"/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='button'>
                        <button>
                            my Shopping <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar