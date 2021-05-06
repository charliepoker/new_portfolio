import React from 'react';
import styled from 'styled-components';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {SiRedux} from 'react-icons/si'


const SkillsContainer = styled.div`
  min-height: 50vh;
  width: 100%;
  position: relative;
  margin-top: 4%;

  @media(max-width: 700px) {
    margin-top: 40%
  }
`;

const Container = styled.div`
  width: 80%;
  position: absolute;
  display: block;
`;

const Heading = styled.div`
  margin-left: 70px;

  h2{
    font-size: 25px; 
    font-weight: 600; 
    margin-bottom: 5px;
    padding-right: 30px;
  }

  @media(max-width: 900px) {
    margin-left: 40px;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30%;

  @media(max-width: 900px) {
    display: block;
  }
`;
const Icons = styled.div`
  display: inline-block;
  padding: 20px;
  justify-content: center;
  align-items: center;
  text-align:center;

  @media(max-width: 900px) {
    padding: 10px;
    margin-left: 15px;
  }
`;

const HtmlIcon = styled(FaHtml5)`
  font-size: 50px;
`
const CssIcon = styled(FaCss3)`
   font-size: 50px;
`
const JsIcon = styled(FaJs)`
   font-size: 50px;
`
const ReactIcon = styled(FaReact)`
   font-size: 50px;
`
const GithubIcon = styled(FaGithub)`
   font-size: 50px;
`
const ReduxIcon = styled(SiRedux)`
   font-size: 50px;
`
const NodeIcon = styled(FaNodeJs)`
  font-size: 50px;
`;

const Dash = styled.div`
  min-height: 6px;
  width: 40px;
  background-color: #fed330;
  margin-bottom: 20px;

  /* @media(max-width: 1120px) {
    margin-left: 50%;
  } */
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <Container>
        <Heading>
          <h2>My Basic Tools:</h2>
        </Heading>
        <IconContainer>
          <Icons>
            <HtmlIcon />
            <h3>HTML</h3>
            <Dash />
          </Icons>
          <Icons>
            <CssIcon />
            <h3>CSS</h3>
            <Dash />
          </Icons>
          <Icons>
            <JsIcon />
            <h3>JS</h3>
            <Dash />
          </Icons>
          <Icons>
            <ReactIcon />
            <h3>React</h3>
            <Dash />
          </Icons>
          <Icons>
            <GithubIcon />
            <h3>Github</h3>
            <Dash />
          </Icons>
          <Icons>
            <ReduxIcon />
            <h3>Redux</h3>
            <Dash />
          </Icons>
          <Icons>
            <NodeIcon />
            <h3>NodeJs</h3>
            <Dash />
          </Icons>
        </IconContainer>
      </Container>
  </SkillsContainer>
  );
};

export default Skills;