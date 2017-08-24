import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { render } from '../front/server';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req: express.Request, res: express.Response): void => {
    let html = render();
    res.end(html);
});

app.use(express.static('public'));

const PORT: number = 3000;
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
