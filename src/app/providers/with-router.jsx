import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '../../shared/ui/loader';

// eslint-disable-next-line func-names
export const withRouter = (component) => function () {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{ component() }</Suspense>
    </BrowserRouter>
  );
};
