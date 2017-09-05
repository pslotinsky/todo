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

let todos = [
    { id: '1', text: 'Wash the dishes' },
    { id: '2', text: 'Sweep the floor' },
    { id: '3', text: 'Feed the bear', completed: true }
];

app.get('/api/todo', (req: express.Request, res: express.Response): void => {
    res.type('application/json');
    res.end(JSON.stringify(todos));
});

app.use(express.static('public'));

const PORT: number = 3000;
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
