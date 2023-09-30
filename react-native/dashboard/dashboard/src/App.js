import React from "react";
import Dashboard from "./component/dashboard";
import Addprouduct from "./component/addpruduct";
import Deleteprouduct from "./component/deleteproduct";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Addprouduct />} />
        <Route path="/delete" element={<Deleteprouduct />} />
      </Routes>
    </Router>
  );
}

export default App;
