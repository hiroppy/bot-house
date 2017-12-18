'use strict';

const path = require('path');
const { success } = require('./processes/auth/controller');

function routes(app) {
  app.use('/v1/bots', require('./apis/bots'));
  app.use('/v1/channels', require('./apis/channels'));
  app.use('/v1/users', require('./apis/users'));
  app.use('/auth', require('./processes/auth'));

  // app.get('*', async (req, res, next) => { // TODO: fix
  // const fs = require('fs');
  // const Transform = require('stream').Transform;
  // const parser = new Transform();
  // parser._transform = function(data, encoding, done) {
  //   const str = data.toString().replace('</body>', '<script>var data = {"foo": "bar"};</script></body>');
  //
  //   this.push(str);
  //   done();
  // };
  //
  // const loggedIn = await success(req, res);
  //
  // const status = loggedIn ? 200 : 401;
  //
  // res.write('<!-- Begin stream -->\n');
  // fs.createReadStream(path.join(process.cwd(), 'dist', 'index.html'))
  //   .pipe(parser)
  //   .on('end', () => {
  //     res.write('\n<!-- End stream -->')
  //   }).pipe(res);
  // res.status(status).sendFile(path.join(process.cwd(), 'dist', 'index.html'));
  //
  // if (process.env.NODE_ENV !== 'production') {
  //   const a= global.w.fileSystem.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf-8');
  //
  // return res.send(a);
  // }

  // const a = `<html>
  //   <script src="/dist/bundle.js"></script>
  //   <body>aaaa</body>
  //   </html>`;
  //
  // return res.send(a);
  // return res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
  // });
}

module.exports = routes;
