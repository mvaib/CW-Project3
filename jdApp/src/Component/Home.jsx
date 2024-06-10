import '../Css/Home.css';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImgCard from './ImgCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './Products';
import { Link } from 'react-router-dom';




function Home(){

    const [products, setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    async function getdata(){
        setLoading(true)
        try {
            let res = await axios({
                method :"get",
                url : `https://fakestoreapi.com/products`
            })
            setProducts(res?.data)
            setLoading(false)
            setError(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(()=>{
        getdata()
    },[])

    let data = [
        {
            img : "https://m.360buyimg.com/babel/jfs/t1/97677/31/29676/8119/63b401ceFc3547fc4/cd91ec13cb2b1de0.png.avif"
        },
        {
            img :"https://m.360buyimg.com/babel/jfs/t1/81488/28/23346/102165/63b41485F7ecc4f22/be5cee8cf04d7e16.png.avif"
        },
        {
            img : "https://m.360buyimg.com/babel/jfs/t1/93200/23/34752/53589/63b4148cF5150739b/5d0dc855fe43ca85.png.avif"
        },
        {
            img : "https://m.360buyimg.com/babel/jfs/t1/54690/10/22629/29568/63b41496Fad92ac75/605f4fe1c473192c.png.avif"
        },
        {
            img : "https://m.360buyimg.com/babel/jfs/t1/53202/29/23281/117684/63b4149dF2beb8956/ac86841f42a75cd0.png.avif"
        },
        {
            img : "https://m.360buyimg.com/babel/jfs/t1/90039/40/25105/65438/63b414a5Fb09a6926/740fb4daeef82c57.png.avif"
        }
    ]
    

    return (
        <>
            <div className="HomeContainer">
                <section className="section1">
                    <div>
                        <ul>
                            <li>Mobile phone</li>
                            <span>/</span>
                            <li>digital</li>
                            <li>Home appliances Computer</li>
                            <span>/</span>
                            <li>Office Home Textiles</li>
                            <span>/</span>
                            <li>Home Furnishings</li>
                            <span>/</span>
                            <li>Kitchenware</li>
                            <span>/</span>
                            <li>Furniture</li>
                            <span>/</span>
                            <li>Home Decoration</li>
                            <span>/</span>
                            <li>Lighting</li>
                            <span>/</span>
                            <li>Industrial Products Underwear</li>
                            <span>/</span>
                            <li>Men's</li>
                            <span>/</span>
                            <li>Women's</li>
                            <span>/</span>
                            <li>Children's</li>
                            <span>/</span>
                            <li>Shoes</li>
                            <span>/</span>
                            <li>Beauty</li>
                            <span>/</span>
                            <li>Bags</li>
                            <span>/</span>
                            <li>Watches</li>
                            <span>/</span>
                            <li>Jewelry</li>
                            <span>/</span>
                            <li>Women's Shoes</li>
                        </ul>
                    </div>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            autoplay = {{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/232616/15/5744/219106/656d810aF16705ea9/41c4997dc1b81f17.png.avif" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://m.360buyimg.com/babel/s1420x740_jfs/t1/194401/20/32669/76553/64142a96F7733e6ad/cf2727848c86cf45.jpg.avif" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div className='img'>
                            <div>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/224682/11/6515/77219/656d86bcF4512ba9c/b6fcebfac7e8fb98.png.avif" alt="" />
                            </div>
                            <div>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/123874/3/34811/33876/63b4da4bFccb2c1ea/442adf2524d2920d.png.avif" alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='box1'>
                            <div>
                                <img src="https://img10.360buyimg.com/imagetools/jfs/t1/39610/10/21462/25175/63a907d9Eb4694b9a/f02971fe7708657f.png" alt="" />
                            </div>
                            <div>
                                <p>HI～Welcome to</p>
                                <p>JD.com !</p>
                                <Link to='/login'><p><span>Login</span> | <span>Register</span></p></Link>
                            </div>
                            <div>
                                <button>Newcomer</button>
                                <button>PLUS Member</button>
                            </div>
                        </div>
                        <hr />
                        <div className='box2'>
                            <div>
                                <b>Global News</b>
                                <p>More > </p>
                            </div>
                            <p>Notice on free storage period of con...</p>
                            <p>Announcement on the launch of shipp...</p>
                        </div>
                        <hr />
                        <div className='box3'>
                            <div>
                                <div>
                                    <img src="https://m.360buyimg.com/babel/jfs/t1/170360/26/33432/1027/63a97f92Ea57bb36e/0ce5842c29b3c233.png.avif" alt="" />
                                </div>
                                <p>Logistics</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://m.360buyimg.com/babel/jfs/t1/201516/17/27623/1758/63a97f60Fba810fbd/5e1ea1f92cc90f68.png.avif" alt="" />
                                </div>
                                <p>After-sales ploicy</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://m.360buyimg.com/babel/jfs/t1/163432/26/33326/617/63a97f6bE0d52be6b/13cc3237d9ce912a.png.avif" alt="" />
                                </div>
                                <p>International Payments</p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://m.360buyimg.com/babel/jfs/t1/49996/26/22663/489/63a97f83E0747e4fa/016b6a1fd8197f70.png.avif" alt="" />
                                </div>
                                <p>Corporate Procurement</p>
                            </div>
                        </div>
                        <div className='box4'>
                            <div>
                                <img src="https://m.360buyimg.com/babel/jfs/t1/71386/9/23990/1771/63a97f76E6866e7a0/73a62b4d8faf9f28.png.avif" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='middleText'>
                    <span>'</span><p>"Beijing" carefully selected</p><span>'</span>
                </div>
                <section className='section2'>
                    {data.map((image , i)=>(
                        <ImgCard key={i} {...image}/>
                    ))}
                </section>
                <div className='middleText'>
                    <span>'</span><p>Channel Plaza</p><span>'</span>
                </div>
                <section className='section3'>
                    <div>
                        <img src="https://m.360buyimg.com/babel/s580x740_jfs/t1/142264/15/32716/14415/63b40389F4a38dbcf/47dcbd8c9f404498.jpg.avif" alt="" />
                    </div>
                    <div>
                        <img src="https://m.360buyimg.com/babel/s580x740_jfs/t1/42759/37/22689/30450/63b40382F7411d238/d4622671799c75bd.jpg.avif" alt="" />
                    </div>
                    <div>
                        <div>
                            <img src="https://m.360buyimg.com/babel/jfs/t1/151963/23/31996/81922/642e7aa0F02fe1494/f00c2b6ccfd4a17c.png.avif" alt="" />
                        </div>
                        <div>
                            <img src="https://m.360buyimg.com/babel/s580x360_jfs/t1/185848/10/28507/20219/63b4045dFdaf55287/afd8b923d78fedf7.jpg.avif" alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://m.360buyimg.com/babel/s580x360_jfs/t1/85884/39/30833/43784/63b40451Fe676a087/28299450d864ec30.jpg.avif" alt="" />
                        </div>
                        <div>
                            <img src="https://m.360buyimg.com/babel/s580x360_jfs/t1/8529/22/20744/13947/63b40457F665a1550/85dbe003dae88d87.jpg.avif" alt="" />
                        </div>
                    </div>
                </section>
                <div className='middleText'>
                    <span>'</span><p>recommended to you</p><span>'</span>
                </div>
                <section className='section4'>
                    {
                        loading ? <h1>Loading...</h1> : error ? <h1>Error</h1> : products.map((product)=>(
                            <Products key={product.id} {...product}/>
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default Home