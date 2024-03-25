import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Landing } from './pages/Landing/Landing';
import { Onboarding } from './pages/OnBoarding/Onboarding';
import { Register } from './pages/Register';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
