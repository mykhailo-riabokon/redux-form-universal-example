/**
 * Created by mikhail on 16.07.15.
 */
import React from 'react';
import Router from 'react-router';
import Promise from 'promise';
import routes from '../../client/routing/routes.js';
import renderFullPage from '../../utils/renderFullPage.js';
import router from '../../client/routing/router.js';
import createLocation from 'history/lib/createLocation';
import createMemoryHistory from 'history/lib/createMemoryHistory';

const history = createMemoryHistory();

export default function routing(req, res) {
  let location = createLocation(req.path);

  router(location, history, req, res)
    .then((reactEl) => {
      try {
        let reactStr = React.renderToString(reactEl);
        res.send(renderFullPage(reactStr));
      } catch (err) {
        res.status(500).send({error: err.toString()});
      }
    }, ({message, code}) => {
      console.error(message, code);
      res.sendStatus(code || 500);
    });
}
