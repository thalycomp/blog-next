import React from 'react';
import { 
  Container,
  Content,
 } from './styles';

function PostContent({ post }) {
  return (
  <Container>
    <Content>
      <h1>{post.title}</h1>
      <div>
        <img src={post.image.formats.medium.url} alt={post.image.alternativeText}/>
      </div>
      <span>Thalyta Alencar | em 10/09/21</span>
      <p>
        {post.content}
      </p>
    </Content>
  </Container>
  );
}

export default PostContent;