import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux";
const store =createStore(usersReducer);

ReactDOM.render(
<Provider store={store}>
<App />   
</Provider>
  // add imports and code
 ,
  // add imports and code
  document.getElementById("root")
);
