// importando o React
import React from "react";

// importando o ReactDOM, ele irá fornecer métodos específicos do DOM, métodos para renderizar e atualizar componentes React.
import ReactDOM from "react-dom";

// importando o componente "App"
import App from "./App";

// ReactDOM.render é o método usado para renderizar
ReactDOM.render(
  <React.StrictMode>
    {/* o componente "App" está sendo renderizado dentro do ReactReact.StrictMode */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// o componente App no React.StrictMode ajuda a detectar possíveis problemas no início do desenvolvimento.