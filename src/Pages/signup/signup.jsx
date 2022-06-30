
import formImage from '../../assets/formimage111.jpg';
import { Navbar } from '../../Components/navbar/navbar';
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
      
    </>
  );
};
export default Signup



