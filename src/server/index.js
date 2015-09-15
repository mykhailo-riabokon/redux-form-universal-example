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
app.use(routing);

app.listen(3000, () => {
  console.log('Server start at http://localhost:3000');
});
