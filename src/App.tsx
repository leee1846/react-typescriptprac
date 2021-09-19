import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import ResetStyle from './styles/ResetStyle';
import Layout from './styles/Layout';
import Header from './components/Commons/Header';
import RootPage from './pages/Root';

function App() {
  return (
    <SWRConfig value={{ revalidateOnFocus: false }}>
      <Router>
        <ResetStyle />
        <Header />
        <Layout>
          <RootPage />
        </Layout>
      </Router>
    </SWRConfig>
  );
}

export default App;
