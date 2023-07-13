/**
 * Script that generates a dummy page
 * for you to open the correct port in the development environment.
 */

'use strict';

const fs = require('fs');
const mkdirp = require('mkdirp');

class DummyPageGenerator {
  static CLIENT_DIR = `${__dirname}/../client`;

  constructor() {}

  start() {
    const clientDistDir = `${DummyPageGenerator.CLIENT_DIR}/dist/client/`;
    mkdirp.sync(clientDistDir);

    const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>API Server</title>
  </head>
  <body>
    <p>
      This port (3000) is the API server port by NestJS.<br />
      Instead, you should open the
      <a id="correctUrlLink">Angular development server port (4200)</a>.
    </p>

    <script>
      const host = window.location.host;
      const correctUrlLinkElem = document.querySelector('#correctUrlLink');
      if (host == 'localhost:3000') {
        // On localhost, make a link to the correct port
        const validUrl = window.location.protocol + '//localhost:4200';
        correctUrlLinkElem.setAttribute('href', validUrl);
      } else if (
        host.match(
          /^([a-z0-9\-]+--)(3000)(--[a-z0-9-]+.[a-z0-9-]+.webcontainer.io)$/,
        )
      ) {
        // On StackBlitz, make a link to the correct port
        const validUrl =
          window.location.protocol + '//' + RegExp.$1 + '4200' + RegExp.$3;
        correctUrlLinkElem.setAttribute('href', validUrl);
      }
    </script>
  </body>
</html>`;
    fs.writeFileSync(`${clientDistDir}/index.html`, html);
  }
}

const generator = new DummyPageGenerator();
generator.start();
