
import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container=styled.div``;
const Wrapper=styled.div`
   padding:20px;
   ${mobile({ padding: "10px" })}
`;
const Title=styled.h1`
    font-weight:300;
    text-align:center;
`;
const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props=>props.type==="filled" && "none"};
    background-color: ${props=>
        props.type==="filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`;

const TopTexts=styled.div`
${mobile({ display: "none" })}
`;
const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`;

const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
`;
const Info=styled.div`
    flex:3;
`;
const Product=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column" })}
`;
const ProductDetail=styled.div`
     flex:2;
     display:flex;

`;
const Image=styled.img`
     width:300px;
     ${mobile({ width: "60%", height:"60%" })}
`;
const Details=styled.div`
     padding:20px;
     display:flex;
     flex-direction:column;
     justify-content:space-around;
     ${mobile({ fontSize:"17px" })}

`;
const ProductName=styled.span``;
const ProductId=styled.span``;
const ProductColor=styled.div`
     width:20px;
     height:20px;
     border-radius:50%;
     background-color:${(props)=>props.color};
     margin:0px 5px;
     cursor:pointer;
    
`;
const ProductSize=styled.span``;
const PriceDetail=styled.div`
     flex:1;
     display:flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
`;
const ProductAmountContainer=styled.div`
      display:flex;
      align-items:center;
      margin-bottom:20px;
`;
const ProductAmount=styled.div`
       font-size:24px;
       margin:5px;
`;
const ProductPrice=styled.div`
      font-size:30px;
      font-weight:200;
      ${mobile({ marginBottom: "20px" })}
`;

const Hr=styled.hr`
     background-color:#eee;
     border:none;
     height:1px;
`;

const Summary=styled.div`
    flex:1;
    border: 0.5 solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;
`;

const SummaryTitle=styled.h1`
    font-weight:200;
`;
const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size: ${props=>props.type==="total" && "24px"};
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const SummaryButton=styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
        <Product>
        <ProductDetail>
        <Image src="https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?size=626&ext=jpg&ga=GA1.2.1129436509.1664017170"/>
        <Details>
          <ProductName><b>Product:</b>ROUND NECK SHIRT</ProductName>
          <ProductId><b>Id:</b>20</ProductId>
          <ProductColor color="black"/>
          <ProductSize><b>Size:</b>M</ProductSize>
        </Details>
        </ProductDetail>
        <PriceDetail>
           <ProductAmountContainer>
            <Add/>
            <ProductAmount>2</ProductAmount>
            <Remove/>
           </ProductAmountContainer>
           <ProductPrice>500 Rs</ProductPrice>
        </PriceDetail>
        </Product>
        <Hr/>
        <Product>
        <ProductDetail>
        <Image src="https://img.freepik.com/premium-psd/smartwatch-mockup-design-isolated_19223-145.jpg?size=626&ext=jpg&ga=GA1.2.1129436509.1664017170"/>
        <Details>
          <ProductName><b>Product:</b>SMART WATCH</ProductName>
          <ProductId><b>Id:</b>A20</ProductId>
          <ProductColor color="black"/>
          
          <ProductColor color="pink"/>
        </Details>
        </ProductDetail>
        <PriceDetail>
           <ProductAmountContainer>
            <Add/>
            <ProductAmount>4</ProductAmount>
            <Remove/>
           </ProductAmountContainer>
           <ProductPrice>2000 Rs</ProductPrice>
        </PriceDetail>
        </Product>
            </Info>
            <Summary>
             <SummaryTitle>OEDER SUMMARY</SummaryTitle>  
             <SummaryItem>
             <SummaryItemText>Subtotal</SummaryItemText>  
             <SummaryItemPrice>2699 Rs</SummaryItemPrice> 
             </SummaryItem>
             <SummaryItem>
             <SummaryItemText>Estimated Shipping</SummaryItemText>  
             <SummaryItemPrice>2500 Rs</SummaryItemPrice> 
             </SummaryItem>
             <SummaryItem>
             <SummaryItemText>Shipping Discount</SummaryItemText>  
             <SummaryItemPrice>-250 Rs</SummaryItemPrice> 
             </SummaryItem>
             <SummaryItem type="total">
             <SummaryItemText type="total">Total</SummaryItemText>  
             <SummaryItemPrice>2250 Rs</SummaryItemPrice> 
             </SummaryItem>
             <SummaryButton>CHECKOUT NOW</SummaryButton> 
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
