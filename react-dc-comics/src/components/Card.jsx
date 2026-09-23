export default function Card({ image, title }) {
  return (
    <div className="bg-[#1c1c1c] text-white font-semibold w-[230px] flex flex-col p-2">
      <div className="w-[214px] h-[214px] overflow-hidden bg-gray-950 flex justify-center items-center">
        <img
          src={image}
          alt={`Immagine del fumetto su ${title}`}
          className="w-full h-full object-cover object-center shadow-lg"
        />
      </div>
      <h3 className="pt-5 uppercase text-lg">{title}</h3>
    </div>
  );
}
