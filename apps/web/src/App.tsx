import { Link, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { decrement, increment } from './features/counter/counterSlice';
import { useGetHealthQuery } from './services/cmsApi';

const getCmsStatusMessage = (
  isLoading: boolean,
  isError: boolean,
  message: string | undefined,
): string => {
  if (isLoading) {
    return 'Checking CMS connection...';
  }

  if (isError) {
    return 'CMS not reachable yet. Start Strapi and refresh.';
  }

  return message ?? 'Connected';
};

function HomePage() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetHealthQuery();

  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="kicker">Build phase</p>
        <h1>Figma-to-Web Starter</h1>
        <p>
          React + Redux + Vite frontend connected to Strapi. This is our working base before
          implementing real Figma screens.
        </p>
      </section>

      <section className="surface-grid">
        <article className="surface-card">
          <h2>Redux health check</h2>
          <p>Counter value: {counter}</p>
          <div className="button-row">
            <button type="button" onClick={() => dispatch(decrement())}>
              Decrement
            </button>
            <button type="button" onClick={() => dispatch(increment())}>
              Increment
            </button>
          </div>
        </article>

        <article className="surface-card">
          <h2>CMS health check</h2>
          <p>{getCmsStatusMessage(isLoading, isError, data?.message)}</p>
          <p className="muted">Endpoint: {import.meta.env.VITE_CMS_BASE_URL ?? 'http://localhost:1337/api'}</p>
        </article>
      </section>
    </main>
  );
}

function DocsPage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <h1>Implementation Flow</h1>
        <ol>
          <li>Extract one Figma section.</li>
          <li>Create reusable components.</li>
          <li>Connect CMS content types.</li>
          <li>Add Vitest coverage.</li>
          <li>Lock behavior with Playwright.</li>
        </ol>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <header className="top-nav">
        <div className="brand">Design Build System</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/docs">Docs</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </>
  );
}
