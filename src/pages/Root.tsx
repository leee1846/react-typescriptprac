import React from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import ResultPage from './ResultPage';
import AlphaPage from './AlphaPage';
import BravoPage from './BravoPage';
import CharliePage from './CharliePage';
import DeltaPage from './DeltaPage';
import EchoPage from './EchoPage';
import ErrorPage from './ErrorPage';

const Root = () => {
  const location = useLocation();
  return (
    <Switch>
      {location.pathname === '/' && <Redirect to="/result" />}
      <Route path="/alpha" component={AlphaPage} />
      <Route path="/bravo" component={BravoPage} />
      <Route path="/charlie" component={CharliePage} />
      <Route path="/delta" component={DeltaPage} />
      <Route path="/echo" component={EchoPage} />
      <Route path="/result" component={ResultPage} />
      <Route path="/error" component={ErrorPage} />
    </Switch>
  );
};

export default Root;
