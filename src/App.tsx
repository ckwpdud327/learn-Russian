import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AlphabetLearning from './pages/AlphabetLearning';
import BasicLearning from './pages/BasicLearning';
import FrequentWordsLearning from './components/FrequentWordsLearning';
import Navigation from './components/Navigation';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const App: React.FC = () => (
  <Router>
    <AppWrapper>
      <Header />
      <Navigation />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/alphabet" element={<AlphabetLearning />} />
          <Route path="/basic" element={<BasicLearning />} />
          <Route path="/frequent-words" element={<FrequentWordsLearning />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppWrapper>
  </Router>
);

export default App;
