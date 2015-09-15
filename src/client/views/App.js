/**
 * Created by mikhail on 15.09.15.
 */
import React, {Component} from 'react';
import SimpleForm from './SimpleForm.js';
import findComponentMethod from '../../utils/findComponentMethod.js';

const validateSimpleForm = findComponentMethod(SimpleForm, 'validateForm');

class App extends Component {
  static validateForm(...args) {
    return validateSimpleForm && validateSimpleForm(...args);
  }
  render() {
    return (
      <div className="simple-form-container">
        <p>Simple form example</p>
        <SimpleForm />
        <p>*Try to fill SimpleForm as name and submit</p>
        <p>*Open the console to see the result</p>
      </div>
    );
  }
}

export default App;
