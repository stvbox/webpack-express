import ReactDOM from 'react-dom';
import React from 'react';
import { MainComponent } from './components/main/main';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
    React.createElement(MainComponent),
    document.getElementById('application')
);
