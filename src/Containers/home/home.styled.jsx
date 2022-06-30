import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Variable } from '../../Themes/globalVariables'
export const Containers=styled.div`
margin:1rem 5rem;
display :flex ;
align-items:center ;
justify-content:space-between ;
position:relative ;

@media only screen and (max-width: ${Variable.mobile_width}){
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  margin:1rem ;

  /* margin:auto;
  max-width:80% ; */
  


}
`
export const Headline=styled(motion.div)`
position: relative;
@media only screen and (max-width: ${Variable.mobile_width}){
  margin:auto ;
  width:80% ;
  z-index:-99 ;
  text-align:center
}


`
export const Heading=styled.h1`
position:relative ;
font-size: clamp(5.6rem,10vw,4rem);
margin-top:2.5rem ;

@media only screen and (max-width: ${Variable.laptop_width}){
  font-size:4rem ;
}
@media only screen and (max-width: ${Variable.mobile_width}){
 font-size:5rem ;
 margin-top:1.5rem ;
 line-height: 5rem;
 text-align:center ;
 


 
br{
  display:none ;
 }
}





/* letter-spacing: 0.6rem; */
line-height: 7rem;
font-family: 'Italiana', serif; 


background: -webkit-radial-gradient(rgba(220, 86, 47, 1),
rgba(170, 236, 212, 0.5),
rgba(229, 76, 76, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const StyledHomeButton=styled.button`
 width: 6.5em;
 height: 2.3em;
 margin:1rem ;

 background: ${(props)=>props.theme.buttonColor};
 color: ${Variable.white};
 border: none;
 border-radius: ${Variable.border_radius};
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;
 @media only screen and (max-width: ${Variable.mobile_width})
{

  
}

&:hover {
 color:  ${(props)=>props.theme.buttonColor};
 border:1px solid ${(props)=>props.theme.buttonColor}
}

&:after {
 content: "";
 background: white;
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

&:hover:after {
 transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
`
export const CenterImage=styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
transform:translate(-8rem,-2rem) ;
z-index:-99;





@media only screen and (max-width: ${Variable.laptop_width}){
  transform:translate(-6rem,-3rem) ;
}
@media only screen and (max-width: ${Variable.mobile_width}){
  transform:translate(0rem ,0rem) ;
  margin:minmax(1rem,2rem) ;
  
}



`
export const GrpImage=styled(motion.img)`
height:180px ;

@media only screen and (max-width: ${Variable.tablet_width}){
  width:500px ;
  height:200px ;
}




`


export const Image=styled(motion.img)`
height: 400px;
margin-top:-4rem ;

/* border:1px solid ${(props)=>props.theme.secondaryColor} ; */
/* margin-right: 30rem; */
/* margin-bottom: 9rem; */
z-index: -999;
border-radius:50px;
object-fit:cover ;
box-shadow:${Variable.box_shadow} ;
@media only screen and (max-width: ${Variable.tablet_width}){
  height:250px ;
  width:150px;
  margin-top:-6rem ;
}
@media only screen and (max-width: ${Variable.mobile_width}){
  height:400px ;
  width:250px;
}



`
export const ExtraInfo=styled(motion.div)`
display:flex ;
flex-direction:column ;
justify-content:center ;

position: relative;
transform:translate(-10px) ;


@media only screen and (max-width: ${Variable.laptop_width}){
  transform:translate(-30px) ;
}
@media only screen and (max-width: ${Variable.mobile_width}){
  display:none ;
  
}



p{
  /* font-size:1.1rem; */
  margin-right: 3rem; 
  color:${(props)=>props.theme.secondaryColor};
  @media only screen and (max-width: ${Variable.laptop_width}){
  margin-right:0rem ;
}

}


`
export const Image3=styled.img`
height:40px;
width:40px ;
margin-left:1rem ;



`
export const Image4=styled.img`
height:200px;
width:150px ;
margin-right:2rem; 
 margin-top: 2.5rem; 
border-radius:30px 30px 0px 30px ;
border:1px solid black ;
`
export const Space=styled.div`
height:10px;
width:10px;
display:none ;
`