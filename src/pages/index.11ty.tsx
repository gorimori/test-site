import React from 'react';
import { render } from '../util/functions';
import { CommonMeta } from '../components/head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Breadcrumb } from '../components/breadcrumb';

module.exports = render(
  <html lang="en">
    <head>
      <CommonMeta />
      <title>Document</title>
    </head>
    <body>
      <Header />

      <Breadcrumb
        items={[
          { href: '/', text: 'home' },
          { href: '/about/', text: 'about' }
        ]}
      />

      <main>
        <h1>11ty tsx</h1>
      </main>

      <Footer />
    </body>
  </html>
);
