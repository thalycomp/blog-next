import React from 'react';
import PostContent from '../../components/PostContent';
import axios from 'axios';

function Post({ post }) {
  return (
    <div>
      <PostContent post={post}/>
    </div>
  );
}

export default Post;

export async function getStaticProps(context) {
  const res = await axios.get(`https://fierce-spire-60934.herokuapp.com/posts?slug=${context.params.slug}`);
  const post = res.data;
  
  return {
    props: {
      post: post[0],
    },
  }
}


export const getStaticPaths = async () => {
  const res = await axios.get('https://fierce-spire-60934.herokuapp.com/posts');
  const posts = res.data;

  const slugsPosts = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths: slugsPosts,
    fallback: false,
  };
};
