import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FoodApp } from './FoodApp';
import './index.css';

// Redux Toolkit
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FoodApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
