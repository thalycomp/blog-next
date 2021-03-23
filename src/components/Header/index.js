import React from 'react';
import Link from 'next/link';

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
          <Link href="/">
            <h1>Blog | Thalyta Alencar </h1>
          </Link>
        </TitleContainer>
        <SocialContainer>
          {/*<a href="">
            <p>thalycomp@gmail.com</p>
          </a>*/}
          <a href="http://github.com/thalycomp" target="_blank" rel="noopener noreferrer">
            <img src="icons/github.svg" alt="icon-github"/>
          </a>
          <a href="https://www.linkedin.com/in/thalyta-a-de-carvalho-19324a134/" target="_blank">
            <img src="icons/linkedin.svg" alt="icon-linkedin"/>
          </a>
        </SocialContainer>
      </header>
    </Container>
  );
}

export default Header;