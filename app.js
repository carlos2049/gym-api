import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
// app.get('/', function (req, res) {
//   res.send('holaa');
// });
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 4000);

app.listen(app.get('puerto'), function () {
  console.log('escunchando puerto: ', app.get('puerto'));
});
