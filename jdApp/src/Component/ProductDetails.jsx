import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Box , Badge, Spacer, useToast, Button} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import '../Css/ProductDetails.css'

function ProductDetails(){

    const [product,setProduct] = useState({})
    const [Loading,setLoading] = useState(false)
    const [Error,setError] = useState(false)
    const { id } = useParams()
    const toast = useToast()
    const position = [
        'top',
    ]


    async function fetchdata(id){
        setLoading(true)
        try {
            let res = await axios({
                method : "get",
                url : `https://fakestoreapi.com/products/${id}`
            })
            setProduct(res?.data)
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchdata(id);
    },[id])


    if(Loading){
        return (
            <>  
            <div className="CircularProgress">
                <CircularProgress   size={70} isIndeterminate color='red.600' />
            </div>
            </>
        )
    }

    if(Error){
        return (
            <>
                <h1>Error...</h1>
            </>
        )
    }


    return (
        <>
            <div className="ProductDetailsContainer">
            <h1>Product Details</h1>

            <div className="ProductDetailsCard">
            <Box className="box" maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={product?.image} width={500} height={500} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='red'>
          New
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {product?.title} &bull; {product?.category}
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {product?.description}
      </Box>

      <Box>
        ¥ 
        {product?.price}
      </Box>

      <Box display='flex' mt='2' alignItems='center'>
      {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < product?.rating?.rate ? 'red.500' : 'gray.300'}
            />
          ))}
          {product?.rating?.rate}
          <Spacer/>
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
           reviews
        </Box>
      </Box>
    </Box>
  </Box>
            <div className="ProductDetails">
                <p><b>TITLE</b> : {product?.title}</p>
                <p><b>DESCRIPTION</b> : {product?.description}</p>
                <p><b>PRICE</b> : ¥  {product?.price}</p>
                <p><b>CATEGORY</b> : {product?.category}</p>
                <p><b>RATE :</b> {product?.rating?.rate} 
                {Array(5)
                    .fill('')
                    .map((_, i) => (
                        <StarIcon
                        key={i}
                        color={i < product?.rating?.rate ? 'red.500' : 'gray.300'}
                    />
                ))}
                </p>
                <p><b>COUNT</b> : {product?.rating?.count}</p>
                <Button 
                    onClick={() =>
                        toast({
                        title: 'Added to Cart.',
                        position: position,
                        description: "We've Added the product to Cart.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                        })
                    }
                >
                    Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                </Button>
            </div>
            </div>
            </div>
        </>
    )
}

export default ProductDetails