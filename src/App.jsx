import { createRoot } from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

// const App = () => {
//   //parent component
//   return React.createElement(
//     "div", //element
//     {}, //empty object goes the attributes of the element

//     [
//       React.createElement("h1", {}, "Adopt Me!"), //children of div
//       React.createElement(Pet, {
//         animal: "Dog",
//         name: "Luna",
//         breed: "Havanese",
//       }),
//       React.createElement(Pet, {
//         animal: "Bird",
//         name: "Pepper",
//         breed: "Cockatiel",
//       }),
//       React.createElement(Pet, {
//         animal: "Cat",
//         name: "Doink",
//         breed: "Mix",
//       }),
//     ]
//   );
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
