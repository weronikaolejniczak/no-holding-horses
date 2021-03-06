import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Races } from 'pages/Races';
import { Race } from 'pages/Race';
import { Home } from 'pages/Home';
import { Bets } from 'pages/Bets';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { EColors } from 'constants/EColors';

export const App = () => (
  <Router>
    <div
      style={{
        backgroundColor: EColors.background,
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Header />
      <Routes>
        <Route path="/races/:id" element={<Race />} />
        <Route path="/races" element={<Races />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
