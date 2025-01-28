import React from 'react';
import './index.css';
// import Card from './Card';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// import { robots } from './robots';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <div>
        <App />
      </div>
    </StrictMode>,
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
