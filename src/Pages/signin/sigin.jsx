import { useNavigate } from 'react-router-dom'
import formImage2 from '../../assets/formimage222.jpg'
import { Navbar } from '../../Components/navbar/navbar'
import { FormContainer, FormContentLeft, SignupClose } from '../signup/signup.styled'
import { FormSignin } from './formsignin'


 const Signin = () => {
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
      <FormContainer>
        
        <SignupClose onClick={()=>navigate('/')}></SignupClose>
        <FormContentLeft>
          <img src={formImage2} alt='spaceship' />
        </FormContentLeft>
        <FormSignin/>
        
      </FormContainer>
      
    </>
  )
}
export default Signin
