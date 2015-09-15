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
        <h3>Simple form example</h3>
        <SimpleForm />
        <p>This example shows the simple form validation with enabled and disabled javascript.</p>
        <p>You can try to fill and submit the form. Result you can se in console</p>
        <p>*SimpleForm is the value which would not be valid, some kind of server validation</p>
      </div>
    );
  }
}

export default App;
