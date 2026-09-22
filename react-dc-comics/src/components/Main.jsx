import ProductList from "./ProductList";

export default function Main() {
  return (
    <main className="bg-black flex flex-col items-center">
      <section>
        <div className="flex relative bottom-0 left-100 -translate-y-1/2 justify-center items-center h-13 w-60 bg-blue-600 py-4 px-6">
          <h1 className="text-white text-center font-bold uppercase text-xl">
            Current Series
          </h1>
        </div>
        <ProductList />
      </section>
      <div className="flex justify-center align-center items-center h-13 w-60 bg-blue-600 py-4 px-6 mb-5 mt-8">
        <h2 className="h1 text-white font-bold uppercase text-x1">Load More</h2>
      </div>
    </main>
  );
}
