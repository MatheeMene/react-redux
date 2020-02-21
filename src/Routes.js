import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
//LAZY LOAD COMPONENTS
const Header  = lazy(() => import('./components/shared/header/Header'));
const Home    = lazy(() => import('./components/home/Home'));
const Deposit = lazy(() => import('./components/deposit/Deposit'));
const Take    = lazy(() => import('./components/take/Take'));
const View    = lazy(() => import('./components/view/View'));

const Routes = () => (
  <Switch>
    <Suspense fallback={ <div> Loading </div> }>
      <Header />
      <Route exact path='/'        component={ Home }    />
      <Route exact path='/deposit' component={ Deposit } />
      <Route exact path='/take'    component={ Take }    />
      <Route exact path='/view'    component={ View }    />
    </Suspense>
  </Switch>
);

export default Routes;