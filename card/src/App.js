import React from 'react';

import './App.css';
import ListProduct from "./features/card/pages/ListProduct";
import Card from "./features/card/pages/Card";
//comment...
function App() {
  return (
    <div className="App">
        <h2>Shoping Card</h2>
        <hr/>
      <ListProduct />
        <hr/>
        <Card/>
    </div>
  );
}

export default App;
