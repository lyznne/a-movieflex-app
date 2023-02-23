import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import '../src/components/tasktracker/TaskTracker.css'
import reportWebVitals from './reportWebVitals';
import { TaskApp } from './components/tasktracker/TaskApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskApp />
  </React.StrictMode>
);

reportWebVitals();
