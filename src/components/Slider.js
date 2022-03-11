import styled from 'styled-components'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useState} from 'react'
import {sliderItems} from '../data'
import { mobile } from "../responsive";

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:16px;
    position:absolute;
    top:0;
    bottom:0;
    margin: auto;
    left:${props => props.direction === 'left' && '10px'};
    right:${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity:0.5;
    z-index: 2;
    
`
const Wrapper = styled.div`
   height: 100%;
   display:flex;
   transition: all 1s ease-in-out;
   transform:translateX(${(props)=> props.slideIndex * -100}vw);
    
`
const Slide = styled.div`
 display:flex; 
 align-items: center;
 width:100vw;
 height: 100vh;
 background-color:#${props => props.bg};
`
const ImageContainer = styled.div`
  flex:1;
  height: 100%;
`
const InfoContainer = styled.div`
 flex:1;
 padding: 50px;
`
const Image = styled.img`
height: 80%;
 
`
const Title = styled.h1`
 font-size:70px;
`
const Description = styled.p`
 margin: 50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
`
const Button = styled.button`
 padding: 10px;
 background-color: transparent;
 cursor: pointer;
`

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0  ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2  ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() =>handleClick('left')}>
                <ArrowLeftIcon></ArrowLeftIcon>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map((item) =>(

             
                <Slide bd={item.bg}>
                    <ImageContainer>
                        <Image src={item.img}></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button >SHOW NOW</Button>
                    </InfoContainer>
                </Slide>

))}
               
                
            </Wrapper>
            <Arrow direction="right" onClick={() =>handleClick('right')}>
                <ArrowRightIcon></ArrowRightIcon>
            </Arrow>
        </Container>
    )
}
