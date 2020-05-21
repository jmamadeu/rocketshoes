import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';
import history from './routes/history';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
