import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Races } from 'pages/Races';
import { Race } from 'pages/Race';
import { Home } from 'pages/Home';
import { Bets } from 'pages/Bets';
import { Header } from 'components/Header';
import styles from './App.module.css';

export const App = () => (
  <Router>
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/races/:id" element={<Race />} />
        <Route path="/races" element={<Races />} />
        <Route path="/bets" element={<Bets />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>
);
