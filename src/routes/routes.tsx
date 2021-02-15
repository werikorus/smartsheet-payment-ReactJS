import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EventsSheet from '../components/Subs/EventsSheet';
import Dashboard from '../pages/MainPage';
import SecurityPage from '../pages/SecurityPage';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SecurityPage} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/events" exact component={EventsSheet} />
    </BrowserRouter>
  );
}

export default Routes;

