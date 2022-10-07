import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ModalContextProvider } from './context/modal-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/react-task" >
        <ModalContextProvider>
            <App />
        </ModalContextProvider>
    </BrowserRouter>
);