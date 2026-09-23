import facebook from "../assets/footer-facebook.png";
import twitter from "../assets/footer-twitter.png";
import youtube from "../assets/footer-youtube.png";
import pinterest from "../assets/footer-pinterest.png";
import periscope from "../assets/footer-periscope.png";
export default function Footer() {
  return (
    <footer className="flex bg-[#303030] justify-around px-12 py-4">
      <div className="flex justify-center items-center h-12 w-38 bg-transparent py-4 px-4 border-2 border-[#0076de] hover:bg-blue-600/10 transition-colors cursor-pointer">
        <h2 className="h2 text-white text-sm tracking-wider font-semibold uppercase">
          Sign-up now!
        </h2>
      </div>
      <section className="flex justify-end items-center space-x-4 me-2">
        <div>
          <h3 className="h2 text-blue-500 text-lg font-bold tracking-widest uppercase ">
            Follow us
          </h3>
        </div>
        <ul className="flex justify-end align-end items-center gap-2">
          <li className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center list-none">
            <img src={facebook} alt="Icon di Facebook" />
          </li>
          <li className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center list-none">
            <img src={twitter} alt="Icon di Twitter" />
          </li>
          <li className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center list-none">
            <img src={youtube} alt="Icon di YouTube" />
          </li>
          <li className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center list-none">
            <img src={pinterest} alt="Icon di Pinterest" />
          </li>
          <li className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center list-none">
            <img src={periscope} alt="Icon di Periscope" />
          </li>
        </ul>
      </section>
    </footer>
  );
}
