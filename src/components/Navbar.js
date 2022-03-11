import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct}  from './../redux/cartSlice';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    padding-bottom: 20px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
    
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const Logo = styled.h1`
    font-weight: bold;
   text-align: center;
   ${mobile({ fontSize: "24px" })}
`
const SearchContainer = styled.div`
    border: .5px solid lightgrey;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items: center;
    
`
const Right = styled.div`
 flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const Center = styled.div`
   flex: 1;
  text-align: center;
    
`
const MenuItem = styled.div`
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
export default function Navbar() {


    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer style={{color: 'gray',fontSize:'16px'}}>
                        <Input/>
                        <SearchIcon></SearchIcon>
                    </SearchContainer>
                
                </Left>
                <Center>
                
                        
                        <Logo>SHOPX..</Logo>
                 
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>

                    <Link to="/cart">

                        <MenuItem>
                        <Badge color="primary" badgeContent={quantity}>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                        </MenuItem>
                    </Link>
                   
                  
                </Right>
            </Wrapper>
       
        </Container>
    )
}
