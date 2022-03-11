import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { mobile } from "../responsive";


const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 20px;

`

const Right = styled.div`
    flex:1;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Logo = styled.h1`
  
`
const Description = styled.p`
   margin: 20px 0px;
`
const SocialContainer = styled.p`
    display:flex;
`
const SocialIcon = styled.p`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color:white;
   background-color: #${props => props.color};
   display:flex;
   align-items: center;
   justify-content: center;
   margin-right: 28px;
`
const List = styled.ul`
    margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
   width: 50%;
  margin-bottom: 10px;
`
const Title = styled.h3`
   margin-bottom: 30px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>SHOPX..</Logo>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minima libero animi ex eum non cum fugiat, maiores illum illo eligendi sit et similique, debitis voluptatibus praesentium magnam. Nesciunt, odio.</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                            <FacebookIcon></FacebookIcon>
                            
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                            
                            <InstagramIcon></InstagramIcon>
                           
                    </SocialIcon>
                    <SocialIcon color="E60023">
                          <PinterestIcon></PinterestIcon>    
                    </SocialIcon>
                    <SocialIcon  color="55ACEE">
                            <TwitterIcon></TwitterIcon>
                           
                    </SocialIcon>
                </SocialContainer>
            </Left>
          
            <Center>
                <Title>Useful Links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
            <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
                </ContactItem>
                <ContactItem>
                <MailOutlinedIcon style={{marginRight:"10px"}} /> contact@lama.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}
