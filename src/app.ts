import * as express from 'express';
import * as bodyParser from 'body-parser';

import API from './routes/api';

const app = express();

// configure app to parse post data for use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', API.setupRouter());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});