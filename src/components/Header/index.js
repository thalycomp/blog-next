import React from 'react';

import { 
  Container, 
  TitleContainer,
  SocialContainer,
  Image
} from './styles';

function Header() {
  return (
    <Container>
      <header>
        <TitleContainer>
          <h1>Blog | Thalyta Alencar </h1>
        </TitleContainer>
        <SocialContainer>
          <a href="">
            <p>thalycomp@gmail.com</p>
          </a>
          <a href="">
            <img src="icons/github.svg" alt="icon-github"/>
          </a>
          <a href="">
            <img src="icons/linkedin.svg" alt="icon-linkedin"/>
          </a>
        </SocialContainer>
      </header>
    </Container>
  );
}

export default Header;