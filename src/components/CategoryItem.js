import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';


const Container = styled.div`
    flex:1;
    margin: 3px;
    height:70vh;
    position:relative;
    ${mobile({ height: "20vh" })}
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
   
`
const Title = styled.h1`
 color:white;
 margin-bottom: 20px;;
`
const Info = styled.h1`
 position:absolute;
 width:100%;
 height:100%;
 top:0;
 left:0;
 display:flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

`
const Button = styled.button`
    border: none;
    padding: 20px;
    background-color:white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`
export default function CategoryItem({item}) {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img}></Image>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}
