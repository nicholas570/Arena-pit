import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import LayoutedView from './layout/Layout';
import Home from './views/Home';
import FighterDetails from './views/FighterDetails';
import WeekFights from './views/WeekFights';
import About from './views/About';

function LayoutedRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutedRoute exact path="/" component={Home} layout={LayoutedView} />
        <LayoutedRoute
          path="/fighterdetails"
          component={FighterDetails}
          layout={LayoutedView}
        />
        <LayoutedRoute
          path="/fights"
          component={WeekFights}
          layout={LayoutedView}
        />
        <LayoutedRoute path="/about" component={About} layout={LayoutedView} />
      </Switch>
    </BrowserRouter>
  );
}

LayoutedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  layout: PropTypes.node.isRequired,
};

export default Router;
