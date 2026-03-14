import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Lab 8.2: User Dashboard (SSR)</h1>
      <p>Welcome to Lab 8.2! Please navigate to one of the following pages to see the results of the task:</p>
      
      <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
        <li>
          <Link href="/dashboard" style={{ color: 'blue', textDecoration: 'underline' }}>
            /dashboard (SSR Dashboard)
          </Link>
          {' '} - The main task: A dashboard page that fetches personalized data on every request using <code>getServerSideProps</code>.
        </li>
        <li>
          <Link href="/about" style={{ color: 'blue', textDecoration: 'underline' }}>
            /about (SSG)
          </Link>
          {' '} - A simple static page generated at build time (SSG). 
        </li>
        <li>
          <Link href="/about-ssr" style={{ color: 'blue', textDecoration: 'underline' }}>
            /about-ssr (SSR)
          </Link>
          {' '} - The same about page, but generated dynamically on every request (SSR) to demonstrate TTFB differences.
        </li>
      </ul>
    </div>
  );
}
