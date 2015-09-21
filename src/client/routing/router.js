/**
 * Created by mikhail on 15.09.15.
 */
import React from 'react';
import Promise from 'promise';
import {Provider} from 'react-redux';
import Router, {RoutingContext} from 'react-router';
import routes from './routes.js';
import {match} from 'react-router';
import validateFormTransitionHook from './hooks/validateFormTransitionHook.js';
import store from '../../client/store.js';

function getInitialComponent(renderedProps) {
  let component = null;

  if (__SERVER__) {
    component = (<RoutingContext {...renderedProps}/>);
  } else {
    component = React.createElement(Router, renderedProps);
  }

  return component;
}

export default function (location, history, req, res) {
  return new Promise((fullfill, reject) => {
    match({location, history, routes}, (err, redirectInfo, renderedProps) => {
      if (!err) {
        if (renderedProps) {
          renderedProps.history = history;
        }

        Promise.all([
          validateFormTransitionHook(renderedProps, req)
        ])
          .then(() => {
            fullfill(
              <Provider store={store}>
                {() => getInitialComponent(renderedProps)}
              </Provider>
            );
          }, (...args) => {
            reject(...args)
          })
      } else {
        reject(err);
      }
    });
  });
}
