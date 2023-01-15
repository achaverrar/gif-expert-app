import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";
// https://developers.giphy.com/docs/api/endpoint#search

function GifExpertApp() {
  const [categories, setCategories] = useState(["Mr. Bean funny"]);

  /* function handleAdd() {
    const newCategory = prompt("Enter new category");
    setCategories((prevState) => [...prevState, newCategory]);
  } */
  return (
    <>
      <h2>GifExperApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default GifExpertApp;
