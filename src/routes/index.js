import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Template from '../containers/Template';

const createRoutes = () => {
  return (
    <Router>
      <Route path="/" component={Template} />
    </Router>
  );
};

const Routes = createRoutes();

export default Routes;
