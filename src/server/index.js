/**
 * Created by mikhail on 15.09.15.
 */
import express from 'express';
import routing from './middleware/routing.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

// just for one case
app.use('/api/simpleForm', (req, res) => {
  let data = req.body;
  let result = {
    errors: {}
  };

  if (data.name === 'SimpleForm') {
    result.errors.name = 'Name already exist';
  }

  {
    // do some more server validation;
  }

  if (!Object.keys(result.errors).length) {
    result.errors = null;
  }

  res.json(result);
});

app.use(routing);

app.listen(3000, () => {
  console.log('Server start at http://localhost:3000');
});
