const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt a little friend!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Golden Retriever"
    }),
    React.createElement(Pet, {
      name: "Einstein",
      animal: "Bird",
      breed: "Parrot"
    }),
    React.createElement(Pet, {
      name: "Snow White",
      animal: "Bunny",
      breed: "wild"
    }),
  ]);
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
