/**
 * Created by mikhail on 15.09.15.
 */
import Promise from 'promise';
import superagent from 'superagent';

export function validateSignUpFormAsync(data) {
  let url = '/api/simpleForm';

  if (__SERVER__) {
    url = `http://localhost:3000${url}`;
  }

  return new Promise((fullfill, reject) => {
    superagent.post(url)
      .send(data)
      .end((err, response) => {
        let defaultValidResult = {};

        if (err) {
          reject(err);
        }

        if (__SERVER__) {
          defaultValidResult = {valid: true};
        }


        let result = response.body.errors || defaultValidResult;

        fullfill(result);
      });
  });
}

export function validateSignUpFormSync(data) {
  const errors = {};

  if (!data.name) {
    errors.name = 'Required';
  }

  if (!data.email) {
    errors.email = 'Required';
  }

  return errors;
}
