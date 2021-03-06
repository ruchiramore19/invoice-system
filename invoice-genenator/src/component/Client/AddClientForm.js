import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SimpleForm from "./SimpleForm";


const AddClient = () => {
    return (  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Add Clients</h2>
      <SimpleForm onSubmit={showResults} />
      {/*<Values form="simple" />*/}
    </div>
  </Provider>
    );
}

export default AddClient;