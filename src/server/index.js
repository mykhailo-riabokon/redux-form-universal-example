/**
 * Created by mikhail on 15.09.15.
 */
import express from 'express';
import routing from './middleware/routing.js';

const app = express();

app.use(routing);

app.listen(3000, () => {
  console.log('Server start at http://localhost:3000');
});
