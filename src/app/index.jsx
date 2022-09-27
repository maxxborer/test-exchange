import React from 'react';
import { PublicRoutes } from 'pages/index';
import { withProviders } from './providers';

function App() {
  return <PublicRoutes />;
}

export default withProviders(App);
