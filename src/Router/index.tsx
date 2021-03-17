import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Result from '../pages/Result';


const Router: React.FC = () => {
  return (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/result" component={Result}/>
    </Switch>
  );
}

export default Router;