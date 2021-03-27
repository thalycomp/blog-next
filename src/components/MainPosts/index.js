import React from 'react';
import Link from 'next/link';

import { 
  ListPost,
  ItemPost,
  Container
 } from './styles';

function MainPosts({ posts }) {
  return (
    <Container>
    <ListPost>
      {posts.map(post => (
        <ItemPost key={post.id}>
          <Link href='/post/[slug]' as={`/post/${slug}`}>
            <a>
              <img src={post.image.url} alt={post.title}/>
              <h3>{post.title}</h3>
            </a>
          </Link>
        </ItemPost>
      ))}
    </ListPost>
    </Container>
  );
}

export default MainPosts;