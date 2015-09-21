/**
 * Created by mikhail on 15.09.15.
 */
import React from 'react';
import router from './routing/router.js';
import createLocation from 'history/lib/createLocation';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();
const location = createLocation(document.location.pathname, document.location.search);

const dist = document.getElementById('app');

router(location, history)
  .then((reactEl) => {
    React.render(reactEl, dist);
  }, (err) => {
    React.render(<p>Initial render error {err}</p>, dist);
  });
