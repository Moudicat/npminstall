'use strict';

const npminstall = require('./npminstall');
const helper = require('./helper');

describe('test/node-pre-gyp.test.js', () => {
  const [ tmp, cleanup ] = helper.tmp();

  beforeEach(cleanup);
  afterEach(cleanup);

  it('should download from http mirror work fine', async () => {
    await npminstall({
      root: tmp,
      pkgs: [
        { name: 'sqlite3', version: '4' },
      ],
      production: true,
      cacheDir: '',
      customBinaryMirrors: {
        sqlite3: {
          host: process.env.CI ? 'https://cnpmjs.org/mirrors' : 'http://cdn.npm.taobao.org/dist',
        },
      },
    });
  });
});
