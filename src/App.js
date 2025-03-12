import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Layout components
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

// Page components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Techniques from './pages/Techniques/Techniques';
import MarketInsights from './pages/MarketInsights/MarketInsights';
import ProfitCalculator from './pages/ProfitCalculator/ProfitCalculator';
import Resources from './pages/Resources/Resources';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './pages/NotFound/NotFound';

// Common components
import Loader from './components/common/Loader/Loader';
import ChatBot from './components/common/ChatBot/ChatBot';
import CustomCursor from './components/common/CustomCursor/CustomCursor';

// Styles
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="app">
        <CustomCursor />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <TransitionPage>
                <Home />
              </TransitionPage>
            } />
            <Route path="/about" element={
              <TransitionPage>
                <About />
              </TransitionPage>
            } />
            <Route path="/techniques" element={
              <TransitionPage>
                <Techniques />
              </TransitionPage>
            } />
            <Route path="/market-insights" element={
              <TransitionPage>
                <MarketInsights />
              </TransitionPage>
            } />
            <Route path="/profit-calculator" element={
              <TransitionPage>
                <ProfitCalculator />
              </TransitionPage>
            } />
            <Route path="/resources" element={
              <TransitionPage>
                <Resources />
              </TransitionPage>
            } />
            <Route path="/contact-us" element={
              <TransitionPage>
                <ContactUs />
              </TransitionPage>
            } />
            <Route path="*" element={
              <TransitionPage>
                <NotFound />
              </TransitionPage>
            } />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

// Wrapper component for page transitions
const TransitionPage = ({ children }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        timeout={400}
        classNames="page-transition"
        unmountOnExit
      >
        <div className="page-container">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;