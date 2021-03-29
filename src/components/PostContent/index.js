import React from 'react';
import Link from 'next/link';

import { 
  Container,
  Content,
 } from './styles';

import { convertDate } from '../../utils/convertDate';

function PostContent({ post }) {
  return (
  <Container>
    <Content>
      <Link href="/">
        <a>Voltar | </a>
      </Link>
      <h1>{post.title}</h1>
      <div>
        <img src={post.image.formats.medium.url} alt={post.image.alternativeText}/>
      </div>
      <em>Thalyta Alencar | em {convertDate(post.created_at)}</em>
      <article>
        {post.content}
      </article>
    </Content>
  </Container>
  );
}

export default PostContent;