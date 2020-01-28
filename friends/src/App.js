import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Login from './componets/Login';
import FriendsList from './componets/FriendsList';
import PrivateRoute from './componets/PrivateRoute';

function App() 
{
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path='/friends-list' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
