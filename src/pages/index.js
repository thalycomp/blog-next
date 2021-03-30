import MainPosts from '../components/MainPosts';
import axios from 'axios';

export default function Home({ posts }) {
  return (
    <div>
      <MainPosts posts={posts}/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://fierce-spire-60934.herokuapp.com/posts?_sort=id:desc&_start=0&_limit=30');
  const posts = res.data;

  return {
    props: {
      posts,
    },
  }
}
