export default function Card({ image, title }) {
  return (
    <div className="bg-black text-white font-semibold w-[230px] h-[230px] p-4">
      <img
        src={image}
        alt={`Immagine del fumetto su ${title}`}
        className="w-full h-full object-cover object-center shadow-lg"
      />
      <h3 className="pt-5 uppercase text-lx">{title}</h3>
    </div>
  );
}
