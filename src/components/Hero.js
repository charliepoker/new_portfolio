import React from "react";
import Happy from "../images/Happy.png";
import { Button } from "./myButton";
import styled from "styled-components";
import { HiOutlineArrowDown } from "react-icons/hi";
import Bounce from "react-reveal/Bounce";

const HeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;

  @media (max-width: 940px) {
    margin-bottom: 10%;
  }
`;
const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: justify;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 0;

  @media (max-width: 940px) {
    display: block;
    text-align: center;
    top: 30%;
    transform: translate(-50%, -20%);
  }
`;

const ImageContainer = styled.div`
  img {
    height: 300px;
    width: 300px;
    border-radius: 50%;
    margin-right: 40px;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  @media (max-width: 940px) {
    img {
      margin-right: 0px;
    }
  }
`;

const Text = styled.div`
  h1 {
    font-size: 60px;
    font-weight: 500;
    letter-spacing: 3px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    color: #2bcbba;
    margin-top: 10px;
  }

  h3 {
    margin-top: 10px;
    font-size: 10px;
    font-weight: 400;
  }

  @media (max-width: 940px) {
    h1 {
      font-size: 40px;
      letter-spacing: 2px;
    }

    br {
      display: none;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 940px) {
    justify-content: center;
    margin-left: 20px;
  }
`;

const Arrow = styled(HiOutlineArrowDown)`
  font-size: 40px;
  transform: translate(-25%, -25%);
`;

const Hero = () => {
  return (
    <HeroContainer>
      <TextBox>
        <Bounce bottom cascade>
          <ImageContainer>
            <img alt="dimoji" src={Happy} />
          </ImageContainer>

          <Text>
            <h1>
              Hello! I'm
              <br /> Charles Iheanacho
            </h1>
            <p>Front-End Developer</p>
            {/* <h3>Explore Projects</h3> */}
            <ButtonContainer>
              <Button to="projects" smooth={true} duration={1000}>
                <Arrow />
              </Button>
            </ButtonContainer>
          </Text>
        </Bounce>
      </TextBox>
    </HeroContainer>
  );
};

export default Hero;
