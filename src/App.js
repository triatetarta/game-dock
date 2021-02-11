import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Game from './components/games/Game';
import NotFound from './components/pages/NotFound';
import GamesState from './context/games/GamesState';
import AlertState from './context/alert/AlertState';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <GamesState>
      <AlertState>
        <Router>
          <div>
            <GlobalStyles />
            <Navbar />
            <Route
              render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/game/:id' component={Game} />
                  <Route component={NotFound} />
                </Switch>
              )}
            />
            <Footer />
          </div>
        </Router>
      </AlertState>
    </GamesState>
  );
};

export default App;
