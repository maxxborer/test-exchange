import React from 'react';
import { paths } from './paths';
import { ExchangePage } from '../exchange';

export const publicRoutes = [
  {
    path: paths.MAIN,
    element: <ExchangePage />,
  },
];
