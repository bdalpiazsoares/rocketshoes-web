import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import history from './services/history';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
        </Router>
      </Provider>
    </>
  );
}

export default App;
