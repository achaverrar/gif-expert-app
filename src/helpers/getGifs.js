export const getGifs = async (category) => {
  const apiKey = "6oH4qwCtLCEIDQk5KB6QeNRXBqFoYzvd";
  const query = category;
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    query
  )}&limit=${limit}&api_key=${apiKey}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((imgObj) => ({
    id: imgObj.id,
    title: imgObj.title,
    src: imgObj.images.downsized_medium.url,
  }));
  return gifs;
};
