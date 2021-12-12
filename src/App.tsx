import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {routes} from './routes/routes';

function App() {

  return (
    <MainLayout>
      <Switch>
        {
          routes.map(route => {
            return <Route 
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          })
        }
      </Switch>
    </MainLayout>
  );
}

export default App;
