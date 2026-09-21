import jumbotron from "../assets/jumbotron.jpg";
export default function Jumbotron() {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      <img
        className="w-full h-full object-cover object-top"
        src={jumbotron}
        alt="Jumbotron dei Teen Titans"
      />
    </div>
  );
}
