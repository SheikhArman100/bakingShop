import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import image3 from "../../assets/cupcake.svg";
import grpImage from "../../assets/Group.svg";
import image1 from "../../assets/image111.jpg";
import image2 from "../../assets/image222.jpg";
import {
  CenterImage,
  Containers,
  ExtraInfo,
  GrpImage,
  Heading,
  Headline,
  Image,
  Image3,
  Image4,
  Space,
  StyledHomeButton
} from "./home.styled";

const headlineVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: -200 },
};
const extraInfoVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: 200 },
};
const centerimageVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  hidden: { opacity: 0, scale: 0 },
};

const Home = () => {
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
    <Containers id="home">
      <Headline
        ref={ref}
        variants={headlineVariant}
        initial="hidden"
        animate={control}
      >
        <Heading>
          We are <Space />
          <br />
          Baking For <Space />
          <br />
          Your Pleasure
        </Heading>
        <StyledHomeButton>Shop Now</StyledHomeButton>
      </Headline>
      <CenterImage
        
      >
        <GrpImage src={grpImage} ref={ref}
        variants={centerimageVariant}
        initial="hidden"
        animate={control}/>
        
        <Image src={image1} ref={ref}
        variants={centerimageVariant}
        initial="hidden"
        animate={control}/>
       
      </CenterImage>
      <ExtraInfo
        ref={ref}
        variants={extraInfoVariant}
        initial="hidden"
        animate={control}
      >
        <Image3 src={image3} alt="" />
        <p>
          Enjoy your indulgent
          <br />
          Afternoon tea in the <br />
          comfort of your home
        </p>
        <Image4 src={image2} alt="" />
      </ExtraInfo>
    </Containers>
  );
};
export default Home;
