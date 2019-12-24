import React from 'react';
import { renderToString } from 'react-dom/server';

module.exports =
  `<!DOCTYPE html>` +
  renderToString(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body></body>
    </html>
  );
