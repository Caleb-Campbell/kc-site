import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// import "bootswatch/dist/cerulean/bootstrap.min.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";
// import 'bootswatch/dist/cyborg/bootstrap.min.css'
// import 'bootswatch/dist/darkly/bootstrap.min.css'
// import 'bootswatch/dist/flatly/bootstrap.min.css'
// import 'bootswatch/dist/journal/bootstrap.min.css'
// import 'bootswatch/dist/litera/bootstrap.min.css'
// import 'bootswatch/dist/lumen/bootstrap.min.css'
// import "bootswatch/dist/lux/bootstrap.min.css";
// import 'bootswatch/dist/materia/bootstrap.min.css'
// import 'bootswatch/dist/minty/bootstrap.min.css'
// import 'bootswatch/dist/morph/bootstrap.min.css'
// import 'bootswatch/dist/pulse/bootstrap.min.css'
// import 'bootswatch/dist/quartz/bootstrap.min.css'
// import 'bootswatch/dist/sandstone/bootstrap.min.css'
// import 'bootswatch/dist/simplex/bootstrap.min.css'
// import 'bootswatch/dist/sketchy/bootstrap.min.css'
// import 'bootswatch/dist/slate/bootstrap.min.css'
// import 'bootswatch/dist/solar/bootstrap.min.css'
// import 'bootswatch/dist/spacelab/bootstrap.min.css'
// import 'bootswatch/dist/superhero/bootstrap.min.css'
// import 'bootswatch/dist/united/bootstrap.min.css'
// import 'bootswatch/dist/vapor/bootstrap.min.css'
// import 'bootswatch/dist/yeti/bootstrap.min.css'
// import 'bootswatch/dist/zephyr/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
