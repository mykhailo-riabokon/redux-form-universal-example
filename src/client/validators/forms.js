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
        if (err) {
          reject(err);
        }

        let result = response.body.errors || {valid: true};

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
