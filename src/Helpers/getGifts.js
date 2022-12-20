export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=I4vaczKwStFsGjwZtHPB753e4WQnhdDK&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));
};
