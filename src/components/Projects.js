import React from "react";
import styled from "styled-components";
import { ButtonSmall as Button } from "../components/myButton";
import { FiLink } from "react-icons/fi";
import Zoom from "react-reveal/Zoom";

const ProjectContainer = styled.div`
  min-height: 100vh;
  width: 100%;

  @media (max-width: 700px) {
    margin-top: 40%;
  }

  @media (max-width: 550px) {
    margin-top: 50%;
  }

  @media (max-width: 550px) {
    margin-top: 110%;
  }

  @media (max-width: 361px) {
    margin-top: 100%;
  }
  @media (max-width: 321px) {
    margin-top: 170%;
  }
`;

const Project = styled.div`
  position: relative;
  width: 90%;
  left: 5%;

  @media (max-width: 321px) {
    width: 100%;
    left: 10px;
  }
`;

const Heading = styled.div`
  margin-right: 100px;

  h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 5px;
    padding-right: 30px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;

const Dash = styled.div`
  min-height: 6px;
  width: 40px;
  background-color: #fed330;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    display: block;
  }
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px 10px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;

  h4 {
    position: absolute;
    transform: translate(20%, -100%);
    font-weight: 500;
  }

  img {
    position: relative;
    flex: 1;
    width: 300px;
    height: 200px;
    border-top-right-radius: 18px;
    border-top-left-radius: 18px;
    transform: translate(-6.5%, -10%);
    margin: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 800px) {
    display: inline-block;
  }
  @media (max-width: 600px) {
    margin-left: 5%;
  }

  @media (max-width: 361px) {
    margin-left: 10px;
  }
  @media (max-width: 321px) {
    margin-left: 0px;
    margin-bottom: 0 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  transform: translate(80%, -50%);
`;

const Goto = styled(FiLink)`
  font-size: 20px;
  transform: translate(-50%, -45%);
`;

const Projects = ({ picturecard }) => {
  return (
    <ProjectContainer id="projects">
      <Project>
        <Heading>
          <h2>Portfolio</h2>
          <Dash />
          <p>Selected Works:</p>
        </Heading>

        <CardContainer>
          {picturecard.map((picture, index) => {
            return (
              <Zoom top cascade key={index}>
                <Card>
                  <img src={picture.image} alt="projects" />
                  <h4>{picture.title}</h4>
                  <ButtonContainer>
                    <Button href={picture.link} target="_blank">
                      <Goto />
                    </Button>
                  </ButtonContainer>
                </Card>
              </Zoom>
            );
          })}
        </CardContainer>
      </Project>
    </ProjectContainer>
  );
};

export default Projects;
