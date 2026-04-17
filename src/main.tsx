import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import { LanguageProvider } from './app/contexts/language-context';
import './styles/index.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing #root');
}

createRoot(root).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
