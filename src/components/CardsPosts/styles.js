import styled from 'styled-components';

export const ListPost = styled.div`
  width: 100%;
  
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;

  list-style: none;

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
    font-size: 2rem;
  }
`;