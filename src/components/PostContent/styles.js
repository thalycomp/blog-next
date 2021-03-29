import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  font-family: 'Ubuntu', sans-serif;

  width: 90%;
  max-width: 800px;

  color: #121212;

  padding-bottom: 6%;
`;

export const Content = styled.main`
  padding: 3rem;

  h1 { 
    margin-bottom: 3rem;
  }

  div {
    width: 60vw;

    img {
      margin-bottom: 2rem;

      width: 100%;      
      min-width: 250px;

      height: auto;
    }
  }
  
  em {
    display: block;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid #eee;

    width: 50%;

    color: #999;
    font-size: 1.2rem;

    margin-bottom: 2rem;
  }

  article {
    font-size: 1.8rem;
    width: 80vw;
    max-width: 800px;
    line-height: 3.5rem;
  }
`;