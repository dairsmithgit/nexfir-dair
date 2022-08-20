import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import { firestore, fromMillis, postToJSON } from '../lib/firebase';
import { useState } from 'react';
import PostFeed from '../components/PostFeed';

const limit = 1;

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(limit);

  const posts = (await postsQuery.get()).docs.map(postToJSON);

  return {
    props: { posts } // passed to page as props
  }

}

export default function Home(props) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);
  const [postsEnd, setPostsEnd] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);

    const lastPost = posts[posts.length - 1];

    const cursor = typeof lastPost.createdAt === 'number' ? fromMillis(lastPost.createdAt) : lastPost.createdAt;

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)
      .limit(limit);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < limit) {
      setPostsEnd(true);
    }

  }

  return (
    <main>
      <PostFeed posts={posts} />
      {!loading && !postsEnd && <button onClick={getMorePosts} >Load More Posts</button>}
      <Loader show={loading} />

      {postsEnd && 'You have reached the end of the post feed!'}

    </main>
  );
}
