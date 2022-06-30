
import formImage from '../../assets/formimage111.jpg';

import { Navbar } from '../../Components/navbar/navbar';
import { Contactus } from '../../Containers/contactus/contactus';
import FormSignup from './formsignup';
import { FormContainer, FormContentLeft, SignupClose } from './signup.styled';





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



