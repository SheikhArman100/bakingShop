
import formImage from '../../assets/formimage111.jpg';

import { lazy } from 'react';
import FormSignup from './formsignup';
import { FormContainer, FormContentLeft, SignupClose } from './signup.styled';
const Navbar=lazy(()=>import("../../Components/navbar/navbar"));
const Contactus=lazy(()=>import("../../Containers/contactus/contactus"));




const Signup = () => { ;
  return (
    <>
    <Navbar/>
      <FormContainer>
        <SignupClose></SignupClose>
        <FormContentLeft>
          <img src={formImage} alt='' />
        </FormContentLeft>
       
        <FormSignup  />
        
        
      </FormContainer>
      <Contactus/>
      
    </>
  );
};
export default Signup



