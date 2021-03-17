import React from 'react';

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles';
import Router from './Router'

const App: React.FC = () => {
  return  (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;