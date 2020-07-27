import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      name: "Einstein",
      animal: "Bird",
      breed: "Parrot",
    }),
    React.createElement(Pet, {
      name: "Snow White",
      animal: "Bunny",
      breed: "wild",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
