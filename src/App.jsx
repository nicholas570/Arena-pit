import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';

function App() {
  useEffect(() => {
    window.localStorage.setItem('Token', 100);
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
