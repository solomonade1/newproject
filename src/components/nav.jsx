import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 4em;
    margin-bottom: 1em;
`
const Wrapper = styled.div`
    padding: 20px;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    height: 100%;
`;

const LeftWrapper = styled.div`
    
`
const Input = styled.input`
    height: 25px;
    border-radius: 10px;
    margin: 10px;
`

const Button = styled.button`
    height: 25px;
    border-radius: 10px;
`


const Center = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterWrapper = styled.div`
    font-family: sans-serif;
    color: black;
    font-size: 1.4em;
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const RightWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`;

const RightItem = styled.div`
    padding: 10px;
    margin: 0;
    color: #0a0a0a;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;
`;



const Vav = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LeftWrapper>
                        <Input placeholder='Search'/>
                        <Button>Search</Button>
                    </LeftWrapper>
                </Left>
                <Center>
                    <CenterWrapper>
                        OLU-AWELEWA
                    </CenterWrapper>
                </Center>
                <Right>
                    <RightWrapper>
                        <RightItem>REGISTER</RightItem>
                        <RightItem>SIGN IN</RightItem>
                        <RightItem><button>Cart</button></RightItem>
                    </RightWrapper>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Vav