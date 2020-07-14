import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GiftFridItem from "./GiftFridItem";
const GiftGrid = ({ category }) => {
    
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GiftFridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
