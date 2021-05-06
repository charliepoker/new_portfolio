import styled from 'styled-components';
import {Link} from "react-scroll";

export const Button = styled(Link)`
  width: 60px;
  height: 60px;
  position: relative;
  color: #fff;
  cursor: pointer;
  background: #fed330;
  border-radius: 2000px;
  padding: 20px;
  margin-right: 1rem;
  margin-top: 2rem;
  user-select: none;
  transition: 0.3s;

  &:hover{
    background: #ffd32a;
    transform: scale(1.05)
  }

`;

export const ButtonSmall = styled.a`
  width: 40px;
  height: 40px;
  position: relative;
  color: #fff;
  cursor: pointer;
  background: #2bcbba;
  border-radius: 2000px;
  padding: 20px;
  margin-right: 1rem;
  margin-top: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover{
    background: #0fb9b1;
    transform: scale(1.05)
  }

`
