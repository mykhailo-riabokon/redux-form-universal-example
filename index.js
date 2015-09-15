/**
 * Created by mikhail on 15.09.15.
 */
require('babel/register')({
  stage: 0
});

global.__SERVER__ = true;

require('./src/server/index');
