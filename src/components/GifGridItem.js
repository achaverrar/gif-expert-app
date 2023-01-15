export const GifGridItem = ({ title, src }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};
