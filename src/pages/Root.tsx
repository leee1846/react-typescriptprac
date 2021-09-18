import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import ResultPage from './ResultPage';
import AlphaPage from './AlphaPage';
import BravoPage from './BravoPage';
import CharliePage from './CharliePage';
import DeltaPage from './DeltaPage';
import EchoPage from './EchoPage';

const Root = () => {
  const location = useLocation();
  return (
    <Switch>
      <Route path="/alpha" component={AlphaPage} />
      <Route path="/bravo" component={BravoPage} />
      <Route path="/charlie" component={CharliePage} />
      <Route path="/delta" component={DeltaPage} />
      <Route path="/echo" component={EchoPage} />
      <Route path="/result" component={ResultPage} />
      {location.pathname === '/' && <Redirect to="/result" />}
    </Switch>
  );
};

export default Root;
