import React from 'react';
import { Layout } from 'processes/layout';
import { PublicRoutes } from 'pages/index';
import { withProviders } from './providers';

function App() {
  return (
    <Layout>
      <PublicRoutes />
    </Layout>
  );
}

export default withProviders(App);
