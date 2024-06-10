import { Link } from 'react-router-dom'
import '../Css/Products.css'


function Products({id,image,title,price}){

    return (
        <>
            <Link to={`/${id}`}>
                <div className='productCard'>
                    <div>
                        <img src={image} alt="" width={200} height={200}/>
                    </div>
                    <p>{title}</p>
                    <b>¥ {price}</b>
                </div>
            </Link>
        </>
    )
}

export default Products