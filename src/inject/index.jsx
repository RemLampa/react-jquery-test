import React from 'react';
import ReactDOM from 'react-dom';

import './jQueryFuncs'

import './common.scss';

import Modal from './Modal';

const browserWrapper = document.createElement('div');

browserWrapper.id = 'piggyWrapper';
browserWrapper.style.width = '100%';
browserWrapper.style.height = '100%';
browserWrapper.style.position = 'fixed';
browserWrapper.style.top = 0;
browserWrapper.style.left = 0;
browserWrapper.style.backgroundColor = 'none';
browserWrapper.style.pointerEvents = 'none';

document.querySelector('body').appendChild(browserWrapper);

ReactDOM.render(
    <Modal />,
    document.getElementById('piggyWrapper')
);
