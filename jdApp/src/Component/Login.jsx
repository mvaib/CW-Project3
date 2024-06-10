import LoginNav from "./LoginNav"
import '../Css/Login.css'
import { Input } from '@chakra-ui/react'
import { InputGroup, InputLeftElement } from '@chakra-ui/react'
import { InputRightElement } from '@chakra-ui/react'
import { Button , ButtonGroup} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from "react-router-dom"
function Login(){

    const myStyle = {
        backgroundImage:
            "url('http://www.baizishuyuan.com/UploadFile/news/image/20170414/20170414022656_6385.jpg')",
            height: "490px",
            width : "100%",
            border : "2px solid red",
            backgroundColor: "#E93854",
            backgroundPosition: "center",
            backgroundSize : "contain",
            backgroundRepeat: "no-repeat",
    };
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)



    function Password(){
        return (
            <>
                <div>
                    <input type="email" name="email" placeholder="Enter email"/>
                    <InputGroup size='md'>
                        <Input 
                            className="input"
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                    <Link to='/'><Button className="button" colorScheme='red'>Login</Button></Link>
            </>
        )
    }

    return (
        <>
            <div>
                <div className="LoginTop2bar">
                    <p> <i className="fa-solid fa-circle-info"></i> In accordance with the Cybersecurity Law, to ensure the security and normal use of your account, please complete the mobile phone number verification as soon as possible! The new version of the JD Privacy Policy has been launched, which will be more conducive to protecting your personal privacy.</p>
                </div>
                <div id="banner-bg" style={myStyle}>
                    <div>
                        <form action="">
                            <div>
                                <p className="active" style={{color: 'red'}}>Password login</p> 
                                <p>SMS Login</p>
                            </div>
                            <Password/>
                        </form>
                    </div>
                </div>
                <div className="LoginFooter">
                    <ul>
                        <li>About US</li>
                        <span>|</span>
                        <li>Contact Us</li>
                        <span>|</span>
                        <li>Recruitment</li>
                        <span>|</span>
                        <li>Merchant Registration</li>
                        <span>|</span>
                        <li>Advertising Service</li>
                        <span>|</span>
                        <li>JD Mobile</li>
                        <span>|</span>
                        <li>Friendly Links</li>
                        <span>|</span>
                        <li>Sales Alliance</li>
                        <span>|</span>
                        <li>JD Community</li>
                        <span>|</span>
                        <li>JD Charity</li>
                    </ul>
                </div>
                <div className="LoginBottom">
                    <p>Copyright © 2004-2024 JD.com All rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Login