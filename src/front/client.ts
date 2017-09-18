import { render } from 'react-dom';
import { create as createStore } from './store';
import { createApp } from './app';

let store = createStore();
let app = createApp(store);
const root: HTMLElement = document.getElementById('root');
render(app, root);
