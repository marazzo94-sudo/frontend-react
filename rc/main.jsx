import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ExampleProvider from './context/ExampleProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExampleProvider>
      <App />
    </ExampleProvider>
  </React.StrictMode>,
);
