import food from '../../assets/cake.png'
import delievery from '../../assets/delivery-truck.png'
import gift from '../../assets/gift-box.png'
import { Container } from '../../Themes/globalComponents.styled'
import { Service, ServiceCard, ServiceCards, ServiceHeadline } from './services.styled'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const serviceVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Services = () => {
    const serviceList=[
        {
            name:'Home Made Food',
            image: food,
            details:'Everything in the cake is hand crafted by us'
        },
        {
            name:'Home Delivery',
            image:delievery,
            details:'we ensure quick home delivery'
        },
        {
            name:'Gift',
            image:gift,
            details:'We can decorate your items with letter,box and chocolate'
        }
    ]
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
    <div id='services'>
    <Container>
        <Service>
        <ServiceHeadline>Our Services
        </ServiceHeadline>
        <ServiceCards>
            {
               serviceList.map((e,i)=>(
                  <ServiceCard key={i}
                  ref={ref}
                  variants={serviceVariant}
                  initial="hidden"
                  animate={control}>
                      <img src={e.image}  alt=''/>
                      <h3>{e.name}</h3>
                      <p>{e.details}</p> 
                  </ServiceCard>
               )) 
                 
                  
              
            }
        </ServiceCards>
        


        </Service>

    </Container>
    </div>
    
  )
}
export default Services
