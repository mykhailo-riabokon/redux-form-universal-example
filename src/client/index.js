/**
 * Created by mikhail on 15.09.15.
 */
/**
 * Created by mikhail on 15.07.15.
 */
//import React from 'react';
//import BrowserHistory from 'react-router/lib/BrowserHistory';
//import Location from 'react-router/lib/Location';
//import reactA11y from 'react-a11y';
//import Immutable from 'immutable';
//import router from './routing/router.js';
//import CrudClient from './utils/CrudClient.js';
//import createStore from './utils/createStore.js';
//
//const history = new BrowserHistory();
//const crudClient = new CrudClient();
//
// TODO check initialState state needs
// const store = createStore(crudClient, Immutable.fromJS(window.__INITIAL_DATA__));

//const store = createStore(crudClient);
//const location = new Location(document.location.pathname, document.location.search);
//const dist = document.getElementById('app');
//
//if (__DEVELOPMENT__) {
//  reactA11y(React);
//  window.React = React;
//  window.Immutable = Immutable;
//  window.store = store;
//}
//
//router(store, location, history)
//  .then((reactEl) => {
//    React.render(reactEl, dist);
//  }, (err) => {
//    React.render(<p>Initial render error {err}</p>, dist);
//  });
