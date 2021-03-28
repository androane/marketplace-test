import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { DataStore } from '@aws-amplify/datastore';
import { ShoppingList } from './models';

function App() {
  const models = await DataStore.query(ShoppingList);
  console.log(models);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        {models.map(m => (<div>
          {m.name}
        </div>))}
      </header>
    </div>
  );
}

export default App;
