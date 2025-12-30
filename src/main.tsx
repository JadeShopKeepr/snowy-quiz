import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes/routes';
import './styles/reset.css';
import './styles/typography.css';
import './index.css';
import { Snowfall } from './components/Snow/Snow';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Snowfall count={100} />
    <AppRoutes />
  </BrowserRouter>,
);
