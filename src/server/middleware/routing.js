/**
 * Created by mikhail on 16.07.15.
 */
import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import Promise from 'promise';

import routes from '../../client/routing/routes.js';
import renderFullPage from '../../utils/renderFullPage.js';
import router from '../../client/routing/router.js';

import store from '../../client/store.js';

export default function routing(req, res) {
  let state = {
    method: req.method,
    store: store
  };
  let location = new Location(req.path, req.query, state);

  router(store, location, null, req, res)
    .then((reactEl) => {
      try {
        let reactStr = React.renderToString(reactEl);
        res.send(renderFullPage(reactStr, store.getState()));
      } catch (err) {
        res.status(500).send({error: err.toString()});
      }
    }, (err) => {
      console.log('err', err);

      res.status(500).send({error: err});
    });
}
