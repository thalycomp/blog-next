import React from 'react';
import CardPost from '../CardsPosts';

import { 
  Container, 
  Content 
} from './styles';

function MainPosts() {
  return (
    <Container>
      <Content>
        <CardPost />
      </Content>
    </Container>
  );
}

export default MainPosts;