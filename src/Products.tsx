const Products = () => {
  return (
    <section>
      Products
      <form className="flex gap-5 justify-between px-5 text-lg whitespace-nowrap max-w-[420px] text-neutral-400">
        <header className="text-neutral-700">All</header>
        <div>Bed</div>
        <div>Sofa</div>
        <div>Chair</div>
        <div>Light</div>
      </form>
      <div className="flex flex-col pt-4 max-w-[312px]">
        <header className="flex flex-col mt-4 w-full bg-teal-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3546d053795fd3292734d423fb82de4336cb70ffe77f70809c737aa0673b8ec5?apiKey=d785672278ca42889a21c261facca94d&"
            className="z-10 self-end mt-0 mr-4 w-8 aspect-square"
            alt="Chair Image"
          />
          <div className="flex z-10 flex-col pr-4 pl-12 mt-8 mb-0 w-full">
            <h1
              className="text-2xl text-neutral-700"
              aria-label="Stylish Chair"
            >
              Stylish Chair
            </h1>
            <div className="flex gap-5 justify-between mt-8 whitespace-nowrap">
              <div className="text-xl text-neutral-700">$45.00</div>
              <div className="flex-auto text-base text-neutral-400">$55.00</div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da509c7d6459c03120bceb3556f5eba332d853082f7295541b8e4c77b9ce1701?apiKey=d785672278ca42889a21c261facca94d&"
              className="mt-8 max-w-full aspect-[0.72] w-[170px]"
              alt="Chair Image"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Products;
