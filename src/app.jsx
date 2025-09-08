import React from 'react';
import ReactDOM from 'react-dom/client';
import InvoiceGenerator from '../component/InvoiceGenerator/InvoiceGenerator.jsx';
import './styles/global.css';

/**
 * Main Application Component
 */
const App = () => {
  return (
    <div className="App">
      <InvoiceGenerator />
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
