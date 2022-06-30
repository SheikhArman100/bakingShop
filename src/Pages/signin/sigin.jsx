import { useNavigate } from 'react-router-dom';
import formImage2 from '../../assets/formimage222.jpg';

import { lazy } from 'react';
import { FormContainer, FormContentLeft, SignupClose } from '../signup/signup.styled';
import { FormSignin } from './formsignin';
const Navbar=lazy(()=>import("../../Components/navbar/navbar"));
const Contactus=lazy(()=>import("../../Containers/contactus/contactus"));


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
      <Contactus/>
      
    </>
  )
}
export default Signin
