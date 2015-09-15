/**
 * Created by mikhail on 15.09.15.
 */
import React from 'react';
import Promise from 'promise';
import {Provider} from 'react-redux';
import Router from 'react-router';
import routes from './routes.js';
import validateFormTransitionHook from './hooks/validateFormTransitionHook.js';

export default function (store, location, history, req) {
  return new Promise((fullfill, reject) => {
    Router.run(routes, location, [
      validateFormTransitionHook(store, req)
    ], (err, initialState) => {
      if (err) {
        reject(err);
      }

      // only on client side
      if (history) {
        initialState.history = history;
      }

      fullfill(
        <Provider store={store}>
        {() => <Router {...initialState} children={routes}/>}
        </Provider>
      );
    });
  });
}
