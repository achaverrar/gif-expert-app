import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGif(category);
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Cargando...</p>
      )}
      <div className="card-grid">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;

/* const getGifs = async () => {
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
    setImages(gifs);
  }; */
