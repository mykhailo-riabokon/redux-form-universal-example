/**
 * Created by mikhail on 15.09.15.
 */
import Promise from 'promise';
import findComponentMethod from '../../../utils/findComponentMethod.js';

function getValidatedComponents(component) {
  return findComponentMethod(component, 'validateForm');
}

export default function validateFormTransitionHook(store, req) {
  return (nextState, router, callback) => {
    if (req) {
      Promise.all(nextState.branch.map(route => route.component)
        .filter(component => getValidatedComponents(component))
        .map(getValidatedComponents)
        .map(validateForm => {
          return validateForm(store, req);
        }))
        .then(() => {
          callback();
        }, (error) => {
          callback(error);
        });
    } else {
      callback();
    }
  };
}
