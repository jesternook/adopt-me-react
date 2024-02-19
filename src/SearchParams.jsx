import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState(""); //hook
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const rest = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await rest.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form //controled form
      //move form into its own component
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          />
          <button>Submit</button>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map(
              (
                animal //parenteses para indicar return implicito
              ) => (
                <option key={animal}>{animal}</option>
              )
            )}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map(
              (
                breed //parenteses para indicar return implicito
              ) => (
                <option key={breed}>{breed}</option>
              )
            )}
          </select>
        </label>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
