import { GetStaticProps } from "next";

interface AboutProps {
  time: string;
}

export default function About({ time }: AboutProps) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>About Us (SSG)</h1>
      <p>This page was generated with <strong>Static Site Generation</strong>.</p>
      <p>Timestamp (only updates on build or ISR): {time}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
    // No revalidate, so it's purely SSG until next build
  };
};
