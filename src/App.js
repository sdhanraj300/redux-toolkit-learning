// src/App.js
import React from "react";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";
function App() {
  return (
    <div>
      <h1>Redux Toolkit Example</h1>
      <Router>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
