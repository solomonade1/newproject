import React, { useState } from "react";
import styled from "styled-components";
import { SliderContent } from "../../Data";
import { images } from "../images";

const Container = styled.div`
  display: flex;
  width: 100vw;

  overflow: hidden;
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Arrow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const RightArrow = styled.button`
  position: absolute;
  top: 20em;
  bottom: 0;
  right: 10px;
  height: 2em;
  width: 5em;
  z-index: 10;
`;
const LeftArrow = styled.button`
  position: absolute;
  top: 20em;
  bottom: 0px;
  left: 10px;
  height: 2em;
  width: 5em;
  z-index: 1;
`;
const Left = styled.div`
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

const LeftWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  height: 100vh;
`;
const RightWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  top: 0;
  bottom: 0;
  padding: 1em;
`;

const Heading = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0px;
  padding: 0em;
`;

const Text = styled.div`
  font-size: 1em;
  letter-spacing: 3px;
  padding: 1em;
`;
const ButtonWrapper = styled.div`
  width: 8em;
  padding: 1em;
`;
const Button = styled.button`
  width: 100%;
  height: 30px;
  color: black;
  font-size: 16px;
  background-color: transparent;
  border: 0.5px solid black;
`;

const Slider2 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const Lclick = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(2);
    }
  };
  return (
    <Container>
      <Arrow onClick={() => Lclick()}>
        <LeftArrow>GoLeft</LeftArrow>
      </Arrow>
      {SliderContent.map((content) => (
        <Wrapper slideIndex={slideIndex}>
          <Left>
            <LeftWrapper>
              <Image src={images.image1} />
            </LeftWrapper>
          </Left>

          <Right>
            <RightWrapper>
              <Heading>{content.title}</Heading>
              <Text>{content.text}</Text>
              <ButtonWrapper>
                <Button>Shop Now</Button>
              </ButtonWrapper>
            </RightWrapper>
          </Right>
        </Wrapper>
      ))}
      <Arrow onClick={() => Lclick()}>
        <RightArrow>GoRight</RightArrow>
      </Arrow>
    </Container>
  );
};

export default Slider2;
