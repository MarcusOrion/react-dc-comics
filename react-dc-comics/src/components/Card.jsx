export default function Card({ image, title }) {
  return (
    <div className="bg-black text-white font-semibold p-4">
      <img src={image} alt={`Immagine del fumetto su ${title}`} />
      <h3>{title}</h3>
    </div>
  );
}
