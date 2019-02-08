import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';
import GlobalStyles from '../globalStyles';

export default class SiteDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <>
        <GlobalStyles />
        <html lang="en">
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {styleTags}
          </Head>
          <body>
            <div className="root">
              {main}
            </div>
            <NextScript />
          </body>
        </html>
      </>
    );
  }
}
