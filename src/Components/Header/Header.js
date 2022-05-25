import React from "react"
import styled from "styled-components"


const Header = ()=> {
  return (
      <div>
  <Wrapper>
      <logo>CarRent.</logo>
      <input></input>
  <span>Home</span>
  <span>Service</span>
    <span>Cars</span>
    <span>About</span>
    <span>Blog</span>
    <span>Contact</span>
  </Wrapper>
    </div>
  )
}

export default Header;

const Wrapper = styled.div`
/* background-color: gold; */
width: 100%;
height: 13vh; 
display: flex;
justify-content: space-between;
align-items: center;

logo{
    font-size: 250%;
    font-weight: bolder;
    margin-left: 5%;
}

input{
    width: 100%;
    height: 5vh;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 5px;
}

span{
    font-weight: bolder; 
    margin-right: 3%;
    cursor: pointer;
    color: brown;
}
`;

