import  styled  from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
    width:100vw;
    height:100vh;
    background:url("https://img.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149133976.jpg?size=626&ext=jpg&ga=GA1.2.1129436509.1664017170");
    
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color: white;
    ${mobile({ width: "60%" })}
`;
const Title=styled.form`
    font-size:24px;
    font-weight:1000;
`;
const Form=styled.h1``;
const Input=styled.input`
    flex:1;
    min-width:60%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;
const Button=styled.button`
    min-width:40%;
    width:20%;
    border:none;
    padding:10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    align-item:center;
    justify-content:center;
    margin-bottom:10px;
`;

const Link=styled.div`
    font-weight:150;
    font-size:15px;
    margin:5px 0px;
    text-decoration:underline;
    cursor:pointer;
`;

const Login = () => {
  return (
    <Container>
     <Wrapper>
       <Title>SIGN IN</Title>
       <Form>
        <Input placeholder="user name"/>
        <Input placeholder="password"/>
        <Button>LOG IN</Button>
        <Link>DO NOT REMEMBER THE PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
        </Form>    
    </Wrapper>  
    </Container>
  )
}

export default Login
