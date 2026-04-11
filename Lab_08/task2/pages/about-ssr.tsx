import { GetServerSideProps } from "next";

interface AboutProps {
  time: string;
}

export default function AboutSsr({ time }: AboutProps) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>About Us (SSR)</h1>
      <p>This page was generated with <strong>Server-Side Rendering</strong>.</p>
      <p>Timestamp (updates on EVERY request): {time}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};
