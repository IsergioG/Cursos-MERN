import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

function Greeting() {
  return (
    <div>
      <h1>este es un componente</h1>
      <p>lorem epsilum</p>
    </div>
  );
}

function Llaves() {
  const variable =
    "te permiten meter lógica y variables de JavaScript en tu mercado";
  return <h1>{variable}</h1>;
}

function Married() {
  const married = false;
  return <h1>{married ? "estoy casado" : "No estoy casado"}</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Greeting />
    <Llaves />
    <Married />
  </div>
);
