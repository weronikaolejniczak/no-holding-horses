import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Races } from './pages/Races';
import { Race } from './pages/Race';
import { Home } from './pages/Home';
import { Navigation } from './components/Navigation';

export const App = () => (
  <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/races/:id" element={<Race />} />
        <Route path="/races" element={<Races />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);
