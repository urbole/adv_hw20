import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrap_hw">
      <h2 className="hw_title">HW#20 "React. Lifecycle methods and hooks"</h2>
      <App />
    </div>
  </React.StrictMode >,
  document.getElementById('root')
);

reportWebVitals();
