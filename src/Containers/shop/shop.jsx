import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shopcard } from '../../Components/shopcard/shopcard'
import { Container } from '../../Themes/globalComponents.styled'
import { ShopContainer, ShopHeader, ShopItems, ShowAllButton } from './shop.styled'

const Shop = () => {
  const navigate=useNavigate()
  const[foodlist,setFoodList]=useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    const getPopularProducts=async()=>{
      setLoading(true)
      try {
        const response=await Axios.get("https://bakingshop100.herokuapp.com/api/products/popular")
        // console.log(response.data)
        setLoading(false)
        setFoodList(response.data)
      } catch (error) {
        console.log(error);
      }
      

    }
    getPopularProducts()
    

  },[])

  return (
    <Container id='shop'>
      <ShopContainer>
        <ShopHeader>
            <h1>Our Popular Items</h1>
            <p>Grab your favourite items and make yor afternoon memorable</p>
        </ShopHeader>
        <ShopItems>
          {
            foodlist.map((e)=>
              <Shopcard image={e.img} title={e.title} price={e.price} navigateId={e._id} loading={loading} />
            )
          }
            
        </ShopItems>
        <ShowAllButton onClick={()=>navigate('/products')}>Show All </ShowAllButton>
        </ShopContainer>
        
    </Container>
  )
}
export default Shop
