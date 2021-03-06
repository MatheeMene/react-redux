import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import './All.css';
//LAZY LOAD COMPONENTS
const Header   = lazy(() => import('./components/shared/header/Header'));
const Home     = lazy(() => import('./components/home/Home')); 
const Deposit  = lazy(() => import('./components/deposit/Deposit'));
const Withdraw = lazy(() => import('./components/withdraw/Withdraw'));
const Balance  = lazy(() => import('./components/balance/Balance'));

const Routes = () => (
  <Switch>
    <Suspense fallback={ <div> Loading </div> }>
      <div className='background'>
        <Header />
        <Route exact path='/'         component={ Home }     />
        <Route exact path='/deposit'  component={ Deposit }  />
        <Route exact path='/withdraw' component={ Withdraw } />
        <Route exact path='/balance'  component={ Balance }  />
      </div>
    </Suspense>
  </Switch>
);

export default Routes;