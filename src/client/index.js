/**
 * Created by mikhail on 15.09.15.
 */
import React from 'react';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Location from 'react-router/lib/Location';
import router from './routing/router.js';
import store from './store.js';

const history = new BrowserHistory();
const location = new Location(document.location.pathname, document.location.search);

const dist = document.getElementById('app');

router(store, location, history)
  .then((reactEl) => {
    React.render(reactEl, dist);
  }, (err) => {
    React.render(<p>Initial render error {err}</p>, dist);
  });
