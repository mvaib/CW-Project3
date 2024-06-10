import '../Css/Footer.css'
import { Link } from 'react-router-dom'
function Footer(){

    return (
        <>
            <div className="FooterContainer">
                <div>
                    <div>
                        <ul className='FooterHead'>
                            <li>wide range of products for easy shopping</li>
                            <li>warehouses, extremely fast delivery</li>
                            <li>authentic products, exquisite service</li>
                            <li>every day at low prices, worry-free selection</li>
                        </ul>
                    </div>
                    <div className='FooterList'>
                        <ul>
                            <Link to='/'><li><img src="https://misc.360buyimg.com/lib/img/e/logo-201305-b.png" alt="" /></li></Link>
                            <li>Shopping guide
                                <ul>
                                    <li>shopping process</li>
                                    <li>Member Introduction</li>
                                    <li>Lifestyle travel/group buying</li>
                                    <li>common problem</li>
                                    <li>Large appliances</li>
                                    <li>Contact Customer Service</li>
                                </ul>
                            </li>
                            <li>Delivery Method
                                <ul>
                                    <li>Pick up at home</li>
                                    <li>211 Limited Time</li>
                                    <li>Delivery service enquiry</li>
                                    <li>Delivery fee standards</li>
                                    <li>Overseas delivery</li>
                                </ul>
                            </li>
                            <li>payment method
                                <ul>
                                    <li>Cash on delivery</li>
                                    <li>Online Payment</li>
                                    <li>installment</li>
                                    <li>The company Transfer</li>
                                </ul>
                            </li>
                            <li>After-sales service
                                <ul>
                                    <li>After-sales policy</li>
                                    <li>price protection</li>
                                    <li>Refund instructions</li>
                                    <li>Repair/Return</li>
                                    <li>cancel order</li>
                                </ul>
                            </li>
                            <li>special service
                                <ul>
                                    <li>Treasure Island</li>
                                    <li>DIY Installation</li>
                                    <li>Extended warranty service</li>
                                    <li>JD E-Card</li>
                                    <li>JD Communications</li>
                                    <li>Jingyuzu Intelligent</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer