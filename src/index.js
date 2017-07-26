import React from 'react';
import ReactDOM from 'react-dom';
import './presentation/index.css';
import Presentation from "./presentation";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();


