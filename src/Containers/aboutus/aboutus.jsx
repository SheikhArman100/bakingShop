
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import aboutImage from '../../assets/aboutImage222.jpg';
import { Container } from '../../Themes/globalComponents.styled';
import { AboutContainer, AboutDetail, AboutImage } from './aboutus.styled';


const aboutVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 }
};
const about2Variant = {
  visible: { opacity: 1,x:0, transition: { duration: 0.7 } },
  hidden: { opacity: 0,x:200 }
};




const Aboutus = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
    <Container id='aboutus'>
       <AboutContainer>
           <AboutImage ref={ref}
      variants={aboutVariant}
      initial="hidden"
      animate={control}>
         
               <img src={aboutImage} alt=''/>
               

           </AboutImage>
           <AboutDetail ref={ref}
      variants={about2Variant}
      initial="hidden"
      animate={control}>
               <h2>Welcome to our </h2>
               <h2>cozy bakery</h2>
               <p>Here at the Baking Tales we believe that everyone deserves to get the good things in life.so we have created some of the most beautiful & scrumptious cakes,cupcakes and brownies just for you to enjoy </p>
               <p>
                   we produce cakes,cupcakes and other bakied goods from the finest carefully sourced ingredients.All of the  baking and decorating works are done by our fantastic production team.
               </p>
               <h3> We hope to see you all soon</h3>

           </AboutDetail>

       </AboutContainer>
    </Container>
    </>
  )

}
export default Aboutus 
