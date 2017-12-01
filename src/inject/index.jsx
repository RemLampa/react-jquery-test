import React from 'react';
import ReactDOM from 'react-dom';
import ShadowDOM from 'react-shadow';

import './jQueryFuncs'

import './common.scss';

import Modal from './Modal';

const browserWrapper = document.createElement('div');

browserWrapper.id = 'extensionWrapper';
browserWrapper.style.width = '100%';
browserWrapper.style.height = '100%';
browserWrapper.style.position = 'fixed';
browserWrapper.style.top = 0;
browserWrapper.style.left = 0;
browserWrapper.style.backgroundColor = 'none';
browserWrapper.style.pointerEvents = 'none';

document.querySelector('body').appendChild(browserWrapper);

const App = () => <ShadowDOM include={['./styles/inject.css']}><div><Modal/></div></ShadowDOM>;

ReactDOM.render(
    <App />,
    document.getElementById('extensionWrapper')
);
