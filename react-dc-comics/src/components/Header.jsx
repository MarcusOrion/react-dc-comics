import logo from "../assets/dc-logo.png";
export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white">
      <div>
        <img className="align-start" src={logo} alt="Logo della DC Comics" />
      </div>
      <ul className="flex items-center gap-6 list-none font-semibold text-sm uppercase text-gray-700">
        <li>Characters</li>
        <li>Comics</li>
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
