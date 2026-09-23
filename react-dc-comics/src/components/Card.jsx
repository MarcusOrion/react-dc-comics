export default function Card({ image, title }) {
  return (
    <div className="bg-black text-white font-semibold p-4">
      <img
        src={image}
        alt={`Immagine del fumetto su ${title}`}
        className="w-[230px] h-[230px] object-cover shadow-lg"
      />
      <h3 className="pt-5 uppercase text-lx">{title}</h3>
    </div>
  );
}
