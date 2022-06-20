import React from "react";
import styled from "styled-components";
import img from "./prowess.jpg";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-family: sans-serif;
    padding: 1em;
    
`

const Wrapper = styled.div`
    
`

const Arrow = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const RightArrow = styled.button`
    position: absolute;
    top: 20em;
    bottom: 0;
    right: 10px;
    height: 2em;
    width: 5em;
`
const LeftArrow = styled.button`
    position: absolute;
    top: 20em;
    bottom: 0px;
    left: 10px;
    height: 2em;
    width: 5em;
`
const Left = styled.div`
    flex: 1;
    height: 100vh;
    width: 100vw;
    

`

const LeftWrapper = styled.div`
    height: 100%;
    width: 100%;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
`

const Right = styled.div`
    flex: 1;
    height: 100vh;
    
`
const RightWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    top: 0;
    bottom: 0;
    padding: 1em;
    
`

const Heading = styled.div`
    font-size: 2.5em;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0px;
    padding: 1em;

`

const Text = styled.div`
    font-size: 1em;
    letter-spacing: 3px;
    padding: 1em

`
const ButtonWrapper = styled.div`
    width: 8em;
    padding: 1em
    
`
const Button = styled.button`
    width: 100%;
    height: 30px;
    color: black;
    font-size: 16px;
    background-color: transparent;
    border: 0.5px solid black;
`

const Slider = () => {
    return (
        <Container>
            
                <Arrow>
                    <LeftArrow>GoLeft</LeftArrow>
                </Arrow>
                <Left>
                    <LeftWrapper>
                        <Image src={img} />
                    </LeftWrapper>
                </Left>

                

                <Right>
                    <RightWrapper>
                        <Heading>SUMMER SALE</Heading>
                        <Text>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Text>
                        <ButtonWrapper>
                            <Button>Shop Now</Button>
                        </ButtonWrapper>

                    </RightWrapper>
                </Right>
                <Arrow>
                    <RightArrow>GoRight</RightArrow>
                </Arrow>
            
        </Container>
    )
}

export default Slider