import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  .footer {
    max-width: 100vw;
    display: block;
    overflow: hidden;
    padding: 20px 0;
    box-sizing: border-box;
    position: relative;
  }

  .inner-footer{
    display: block;
    margin: 0 auto;
    width: 100vw;
    height:100%;
  }

  .inner-footer .copy p {
    font-weight: 100;
    position: relative;
    text-align: center;
  }
`;


const Footer = () => {
  const year = new Date().getFullYear()


  return(
    <Div>
      <div className="footer">
        <div className="inner-footer">
          <div className="copy">
            <p>Designed and developed by Obinna Iheanacho ©{year}</p>
          </div>
        </div>
      </div>
    </Div>
    
  )
}

export default Footer;