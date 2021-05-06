import React from 'react';
import styled from 'styled-components';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoMoonOutline } from 'react-icons/io5';


const Sun = styled(IoSunnyOutline)`
  font-size: 30px;
  color: #fed330; 
  position: fixed;
  top: 6rem;
  right: 4rem;
  transition: all .5s linear;
  cursor: pointer;
  z-index: 1;
`;
const Moon = styled(IoMoonOutline)`
  font-size: 30px;
  color: #a55eea; 
  position: fixed;
  top: 6rem;
  right: 4rem;
  transition: all .5s linear;
  cursor: pointer;
  z-index: 1;
`;

export const Toggle = ({theme, toggleTheme}) => {

    return(
      <div onClick={toggleTheme}>
        {theme === 'light' ? <Moon /> : <Sun />}
      </div>
    )

}