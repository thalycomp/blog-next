/*import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  font-family: 'Ubuntu', sans-serif;

  width: 90rem;
  
  height: 100%;

  color: #121212;
  padding-bottom: 6%;
`;

export const Content = styled.main`
  padding: 3rem;
`;*/

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 50px 0px 50px 0px;
`;

export const ListPost = styled.ul`
  width: 90%;
  max-width: 800px;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  list-style: none;

  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  font-family: 'Ubuntu', sans-serif;

  color: #121212;

  a {
    color: #121212;
  }
`;

export const ItemPost = styled.div`
  img {
    width: 100%;
    height: 100%;
    max-height: 210px;
    object-fit: cover;
  }

  h3 { 
    margin-top: 2%;
    font-size: 2.1rem;
  }
`;