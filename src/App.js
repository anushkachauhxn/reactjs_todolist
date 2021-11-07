import React from 'react';
import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
      <h2>TO DO LIST</h2>
        <form>
          <input type="text" placeholder="Enter Text"></input>
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
}

export default App;
