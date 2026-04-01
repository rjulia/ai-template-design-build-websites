import { Link, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { Button, Card, SectionHeading } from './components/ui';
import { decrement, increment } from './features/counter/counterSlice';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
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

function PlaygroundPage() {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetHealthQuery();

  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="kicker">Build phase</p>
        <h1>Frontend Playground</h1>
        <p>Operational route for validating Redux and CMS connectivity while we build Figma pages.</p>
      </section>

      <section className="surface-grid">
        <Card>
          <SectionHeading title="Redux health check" subtitle="State management is wired and ready." />
          <p>Counter value: {counter}</p>
          <div className="button-row">
            <Button variant="secondary" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
          </div>
        </Card>

        <Card>
          <SectionHeading title="CMS health check" subtitle="Frontend <-> Strapi connection status." />
          <p>{getCmsStatusMessage(isLoading, isError, data?.message)}</p>
          <p className="muted">Endpoint: {import.meta.env.VITE_CMS_BASE_URL ?? 'http://localhost:1337/api'}</p>
        </Card>
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/playground" element={<PlaygroundPage />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route
        path="*"
        element={
          <main className="page-shell">
            <section className="hero-card">
              <h1>Page not found</h1>
              <p>
                Return to <Link to="/">Home</Link>, open <Link to="/shop">Shop</Link>, open{' '}
                <Link to="/blog">Blog</Link>, or open <Link to="/contact">Contact</Link>.
              </p>
            </section>
          </main>
        }
      />
    </Routes>
  );
}
