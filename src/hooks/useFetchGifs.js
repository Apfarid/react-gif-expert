import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
    setisLoading(false);
  }, []);

  return {
    images: images,
    isLoading,
  };
};
