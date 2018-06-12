import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { render } from '../front/server';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

let todos = [
    { id: '1', text: 'Wash the dishes' },
    { id: '2', text: 'Sweep the floor' },
    { id: '3', text: 'Feed the bear', completed: true }
];

app.get(
    '/api/todo/:id/color',
    (req: express.Request, res: express.Response): void => {
        let id = req.params.id;
        let charSum: number = id.split('').reduce(
            (res: number, cur: string): number => {
                return res + cur.charCodeAt(0);
            },
            0
        );
        let colors = [
            '#FF8A80',
            '#FF80AB',
            '#EA80FC',
            '#B388FF',
            '#8C9EFF',
            '#82B1FF',
            '#80D8FF',
            '#84FFFF',
            '#A7FFEB',
            '#B9F6CA',
            '#CCFF90',
            '#F4FF81',
            '#FFFF8D',
            '#FFE57F',
            '#FFD180',
            '#FF9E80'
        ];
        let index = charSum % colors.length;
        let color = colors[index];

        res.type('application/json');
        res.end(JSON.stringify({ color }));
    }
);

app.get('/api/todo', (req: express.Request, res: express.Response): void => {
    res.type('application/json');
    res.end(JSON.stringify(todos));
});

app.get('/', async (
    req: express.Request,
    res: express.Response
): Promise<void> => {
    let html = await render();
    res.end(html);
});

app.use(express.static('public'));

const PORT: number = 3000;
app.listen(PORT, () => console.log(`Running at port ${PORT}`));
