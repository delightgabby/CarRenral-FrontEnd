import React from "react"
import styled from "styled-components"
import Header from "../Header/Header.js"
import logo from "../Images/1.jpg"



const Hero = () =>{
    return(
       <div>
        <Wrap>
            <Header/>
            <img src = {logo} alt=""/>
            </Wrap>
            <Wrapp>hghfhhf</Wrapp>
            </div>
    )
}

export default Hero;

const Wrap = styled.div`
/* background-color: red; */
width: 100%;
height: 90vh;

img{
    width: 100%;
    height: 90vh;
    /* position: relative; */
}
`

const Wrapp = styled.div`
background-color: white;
width: 30%;
height: 70vh;
position: relative;
margin-top: -35%;
margin-left: 5%;
border-radius: 5px;
opacity: 0.4;
border-top: 5px solid red;
 `
