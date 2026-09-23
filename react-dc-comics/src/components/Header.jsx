import logo from "../assets/dc-logo.png";
export default function Header() {
  return (
    <header className="flex justify-between items-center ml-[200px] px-8 py-4 bg-white">
      <div>
        <img
          className="flex items-center relative left-100"
          src={logo}
          alt="Logo della DC Comics"
        />
      </div>
      <ul className="flex items-center gap-6 relative right-50 list-none font-bold text-base uppercase text-gray-700">
        <li>Characters</li>
        <li className="relative cursor-pointer py-2 text-blue-600">
          Comics
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
        </li>
        <li>Movies</li>
        <li>TV</li>
        <li>Games</li>
        <li>Collectibles</li>
        <li>Videos</li>
        <li>Fans</li>
        <li>News</li>
        <li>Shop</li>
      </ul>
    </header>
  );
}
