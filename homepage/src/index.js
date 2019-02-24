import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as singleSpa from 'single-spa';
import {registerReactApp} from "./apps/header";
import {registerHomeApp} from './apps/home';
import {registerNestedApp} from './apps/nestedFragment'
import {registerListApp} from './apps/list'
import {registerAngularApp} from "./apps/angular-app";

ReactDOM.render(<App/>, document.getElementById('root'));


registerReactApp();
registerHomeApp();
registerNestedApp();
registerListApp();
registerAngularApp();

singleSpa.start();
