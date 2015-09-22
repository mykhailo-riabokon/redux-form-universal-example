/**
 * Created by mikhail on 15.09.15.
 */
import Promise from 'promise';
import findComponentMethod from '../../../utils/findComponentMethod.js';
import store from '../../store.js';

function getValidatedComponents(component) {
  return findComponentMethod(component, 'validateForm');
}

export default function validateFormTransitionHook(renderProps, req) {
  let result = Promise.resolve();

  if (req && renderProps) {
    result = Promise.all(renderProps.components
      .filter(component => getValidatedComponents(component))
      .map(getValidatedComponents)
      .map(validateForm => validateForm(store, req)));
  }

  return result;
}
