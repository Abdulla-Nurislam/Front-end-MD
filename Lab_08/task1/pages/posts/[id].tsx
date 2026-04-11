import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getAuthorById, getPostById } from "@/lib/api";
import Link from "next/link";

interface PostProps {
  post: Post;
  author: { name: string; bio: string };
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <article style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: 'blue' }}>← Back to Home</Link>
      <h1 style={{ marginTop: '1rem' }}>{post.title}</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>By {author.name} ({author.bio})</p>
      <p style={{ lineHeight: '1.6' }}>{post.content}</p>
      <div style={{ marginTop: '2rem' }}>
        {post.tags.map(tag => (
          <span key={tag} style={{ marginRight: '0.5rem', background: '#eee', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getPostById(params?.id as string);
    if (!post) return { notFound: true };
    const author = await getAuthorById(post.author);
    if (!author) return { notFound: true };
    
    return {
      props: { post, author },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
};
