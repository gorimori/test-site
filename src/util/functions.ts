import React from 'react';
import { renderToString } from 'react-dom/server';

export const render = (element: React.ReactElement): string =>
  `<!DOCTYPE html>${renderToString(element)}`;
