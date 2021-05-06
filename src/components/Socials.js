import React from 'react';
import styled, {css} from 'styled-components/macro';
import {IoLogoInstagram} from 'react-icons/io5';
import {FiTwitter, FiGithub, FiLinkedin} from 'react-icons/fi';

const Container = styled.ul`
  list-style: none;
  display: block;
  position: fixed;
  bottom: 2rem;
  left: 1rem;
  z-index: 1;
  cursor: pointer;


  @keyframes ro {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg)
  }
} 
`;

const StyleIcon = css`

  &:hover{
    color: #8e44ad;
    animation: ro 2s linear infinite;
  }
`;



const Icons = styled.li`
  list-style: none;
  padding-bottom: 4px;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
`;
const Twitter = styled(FiTwitter)`
    ${StyleIcon}
    font-size: 20px;
`;
const Instagram = styled(IoLogoInstagram)`
    font-size: 20px;
    ${StyleIcon}
`;
const Github = styled(FiGithub)`
    font-size: 20px;
    ${StyleIcon}
`;
const Linkedin = styled(FiLinkedin)`
    font-size: 20px;
    ${StyleIcon}
`;

const Socials = () => {
  return (
    <Container>
      <Icons>
        <Anchor href="https://twitter.com/__achor__" target="_blank">
          <Twitter />
        </Anchor>
      </Icons>

      <Icons>
        <Anchor href="https://www.instagram.com/nwa_ojoo/" target="_blank">
          <Instagram />
        </Anchor>
      </Icons>

      <Icons>
        <Anchor href="https://github.com/charliepoker" target="_blank">
          <Github />
        </Anchor>
      </Icons>

      <Icons>
        <Anchor
          href="https://www.linkedin.com/in/iheanacho-charles-76a11538/"
          target="_blank"
        >
          <Linkedin />
        </Anchor>
      </Icons>
    </Container>
  );
};

export default Socials;