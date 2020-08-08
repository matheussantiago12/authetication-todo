import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';

import routes from './routes';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <CssBaseline />
      <Container maxWidth='sm'>
        <Switch>
          {routes.map(route => (
            <Route 
              path={route.path} 
              component={route.component} 
              exact={route.exact}
              key={route.key}
            />
          ))}
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
