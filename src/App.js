import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';
import CharactersPage from './pages/CharactersPage ';
import CharacterDetailPage from './pages/CharacterDetailPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import SpellsPage from './pages/SpellsPage';
import HousesPage from './pages/HousesPage';
import HouseDetailPage from './pages/HouseDetailPage';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/characterIndex" element={<CharacterDetailPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/bookIndex" element={<BookDetailPage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/houses" element={<HousesPage />} />
        <Route path="/houses/houseIndex" element={<HouseDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
