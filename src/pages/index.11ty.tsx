import React from 'react';
import { render } from '../util/functions';
import { CommonMeta } from '../components/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

module.exports = render(
  <html lang="en">
    <head>
      <CommonMeta />
      <title>Document</title>
    </head>
    <body>
      <Header />

      <main>
        <h1>11ty tsx</h1>
      </main>

      <Footer />
    </body>
  </html>
);
