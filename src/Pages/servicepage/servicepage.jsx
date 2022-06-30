

import { lazy } from 'react';
import { Services } from '../../Containers/services/services';
const Navbar=lazy(()=>import("../../Components/navbar/navbar"));
const Contactus=lazy(()=>import("../../Containers/contactus/contactus"));


 const ServicePage = () => {
  return (
    <>
    <Navbar/>
    <Services/>
    <Contactus/>

   
    </>
  )
}
export default ServicePage
