import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/test-task-burger-delivery">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
