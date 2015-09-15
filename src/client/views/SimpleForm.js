/**
 * Created by mikhail on 15.09.15.
 */
import React, {PropTypes, Component} from 'react';
import {connectReduxForm, initialize, stopSubmit} from 'redux-form';
import {validateSignUpFormSync, validateSignUpFormAsync} from '../validators/forms.js';

@connectReduxForm({
  form: 'simpleForm',
  fields: ['name', 'email'],
  validate: validateSignUpFormSync,
  asyncValidate: validateSignUpFormAsync
})
class SimpleForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fields: PropTypes.object,
    handleSubmit: PropTypes.func,
    valid: PropTypes.bool
  };
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static validateForm(store, req) {
    //let data = {};
    //let result = Promise.resolve(true);
    //
    //if (req.method === 'POST') {
    //  data = req.body || data;
    //
    //   validate form on the server
      //result = validateSignUpFormAsync(data).then((response) => {
      //  if (!response.valid) {
      //    store.dispatch(stopSubmit('simpleForm', response));
      //  }
      //});
    //}

    // init form
    //store.dispatch(initialize('simpleForm', data));

    //return result;
  }
  submitForm(/* valid-form-data */) {

  }
  showError(field) {
    return (__SERVER__) ? !!field.error : field.touched && field.error;
  }
  render() {
    const {
      fields: {
        name,
        email
        },
      handleSubmit,
      valid
    } = this.props;

    return (
      <form className="form" action="/" method="POST" onSubmit={handleSubmit(this.submitForm)}>
        <div className="form__group">
          <label className="form__group__label">
            <span className="text">Name</span>
            <input className="control" type="text" {...name}/>
          </label>
          {this.showError(name) ? <div className="error">{name.error}</div> : null}
        </div>
        <div className="form__group">
          <label className="form__group__label">
            <span className="text">Email</span>
            <input className="control" type="text" {...email}/>
          </label>
          {this.showError(email) ? <div className="error">{email.error}</div> : null}
        </div>
        <button type="submit">Submit form</button>
      </form>
    );
  }
}

export default SimpleForm;
