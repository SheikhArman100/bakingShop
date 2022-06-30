import Aboutus from '../../Containers/aboutus/aboutus'
import { lazy } from 'react';
const Navbar=lazy(()=>import("../../Components/navbar/navbar"));
const Contactus=lazy(()=>import("../../Containers/contactus/contactus"));

const AboutusPage = () => {
  return (
      <>
    
    <Navbar/>
    <Aboutus/>
    <Contactus/>
    

    
    </>
  )
}
export default AboutusPage
