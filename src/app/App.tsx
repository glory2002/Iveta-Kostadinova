import { BrowserRouter, Route, Routes } from 'react-router';

import { SiteHomePage } from './pages/site-home';
import { SiteVariantB } from './pages/site-variant-b';
import { VariantPickerPage } from './pages/variant-picker-page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VariantPickerPage />} />
        <Route path="/variant-a" element={<SiteHomePage />} />
        <Route path="/variant-b" element={<SiteVariantB />} />
      </Routes>
    </BrowserRouter>
  );
}
