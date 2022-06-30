import { lazy } from "react";



const Navbar=lazy(()=>import("../../Components/navbar/navbar"));
const Contactus=lazy(()=>import("../../Containers/contactus/contactus"));

const Home = lazy(() => import("../../Containers/home/home"));
const Services = lazy(() => import("../../Containers/services/services"));
const Shop = lazy(() => import("../../Containers/shop/shop"));
const Aboutus = lazy(() => import("../../Containers/aboutus/aboutus"));


const HomePage = () => {
  return (
    <>
      <Navbar />
  
      <Home />
      <Services />
      <Shop />
      <Aboutus />
      <Contactus/>
      
    </>
  );
};
export default HomePage;
