export const getGifts = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=XURDsUI53rBI36qdUZGVO2PJVm8Bs54y&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
