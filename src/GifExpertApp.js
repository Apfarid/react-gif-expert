import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one "]);

  /* const handleAdd = () => {
        // setCategories ( cats => [...cats, 'cueatro'])
        setCategories([
            ...categories,
            'Cuatro'
    ])
    }*/

  return (
    <form>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </form>
  );
};

export default GifExpertApp;
