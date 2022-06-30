
import Axios from "axios"
import { useEffect, useState } from 'react'
import { Navbar } from "../../Components/navbar/navbar"
import { Shopcard } from '../../Components/shopcard/shopcard'
import { Container } from '../../Themes/globalComponents.styled'
import { Filter, ProductContainer, ProductFilter, ProductHeader, ProductItems } from "./productlist.styled"




const Productlist = () => {
  const [loading,setLoading]=useState(false)
  const [ActiveGenre,setActiveGenre]=useState('')
  const[foodlist,setFoodList]=useState([]);
  useEffect(()=>{
  
    getProducts()
    

  },[])

  const getProducts=async()=>{
    
    setLoading(true)
    try {
      setActiveGenre('')
      
      setActiveGenre('')
      const response=await Axios.get("https://bakingshop100.herokuapp.com/api/products")
      
      setLoading(false)
      setFoodList(response.data)
      
    } catch (error) {
      console.log(error);
    }
    
  }

  const getCakes=async()=>{
    setLoading(true)
    try {
      setActiveGenre('cake')
      const response=await Axios.get("http://localhost:5001/api/products/cake")
      setLoading(false)
      setFoodList(response.data)
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const getCupcakes=async()=>{
    setLoading(true)
    try {
      setActiveGenre('cupcake')
      const response=await Axios.get("http://localhost:5001/api/products/cupcake")
      setLoading(false)
      setFoodList(response.data)
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const getBrownies=async()=>{
    setLoading(true)
    try {
      setActiveGenre('brownies')
      const response=await Axios.get("http://localhost:5001/api/products/brownies")
      setLoading(false)
      setFoodList(response.data)
      
      
    } catch (error) {
      console.log(error);
      
    }

  }

  
  
  
return (
  <>
  <Navbar/>
    <Container>
        
        <ProductContainer>
          <ProductHeader>
            <h2>Choose Your Favorite <br/>Flavors</h2>
            <p>Grab your favourite items and make yor afternoon memorable</p>

          </ProductHeader>
          <ProductFilter>
            <Filter className={ActiveGenre===''?'active':''}
            onClick={getProducts}>All</Filter>
            <Filter className={ActiveGenre==='cake'?'active':''} onClick={getCakes}>Cake</Filter>
            <Filter className={ActiveGenre==='cupcake'?'active':''} onClick={getCupcakes}>CupCake</Filter>
            <Filter className={ActiveGenre==='brownies'?'active':''} onClick={getBrownies}>Brownies</Filter>

          </ProductFilter>
          <hr/>

          <ProductItems>
          {
            foodlist.map((e)=>
              (
                <Shopcard image={e.img} title={e.title} price={e.price} navigateId={e._id} loading={loading}  />
              
            )
            )
              }
          
           
          </ProductItems>

        </ProductContainer>
      
      

    </Container>
    </>
  )
}
export default Productlist