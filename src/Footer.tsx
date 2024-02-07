const Footer = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-12 bg-teal-900 max-md:px-5">
      <div className="flex flex-col mt-24 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <h1 className="flex-auto text-5xl text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[59px]">
            Start your business today for $0+ state fees.
          </h1>
          <div className="flex gap-5 my-auto text-xl font-medium text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <button className="grow justify-center px-12 py-6 text-teal-900 bg-white rounded-[30px] max-md:px-5">
              Get Started
            </button>
            <button className="grow justify-center px-10 py-6 text-white bg-slate-600 rounded-[30px] max-md:px-5">
              Contact Sales
            </button>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/050c49caf61cf47edf8896d2fe08fafb69234413c02285527acd28140c006297?apiKey=d785672278ca42889a21c261facca94d&"
          className="mt-16 w-full stroke-[1px] stroke-white max-md:mt-10 max-md:max-w-full"
          alt="Business Image"
        />
        <div className="flex gap-5 justify-between items-start pr-16 mt-24 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              furni.shop
            </h2>
            <div className="mt-7 text-base leading-7 text-zinc-100">
              Optix seamlessly connects your members with the community,
              resources.
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/130c74c4112c7c22fafa305057a31c74f95ad5fff51b02d9e2be67ff79500e32?apiKey=d785672278ca42889a21c261facca94d&"
              className="mt-10 max-w-full aspect-[7.14] w-[145px]"
              alt="Optix Image"
            />
          </div>
          <div className="flex flex-col flex-1 self-stretch text-base text-zinc-100">
            <h3 className="text-lg font-medium text-white">Entity types</h3>
            <div className="mt-6">Knowledge base</div>
            <div className="mt-5">Security</div>
            <div className="mt-5">Privacy Policy</div>
            <div className="mt-5">Partners</div>
            <div className="mt-6">About us</div>
            <div className="mt-6">FAQs</div>
          </div>
          <div className="flex flex-col self-stretch text-base whitespace-nowrap text-zinc-100">
            <h3 className="text-lg font-medium text-white">Services</h3>
            <div className="mt-7">Contact Us</div>
            <div className="mt-6">Press</div>
            <div className="mt-6">Payrool</div>
            <div className="mt-5">Library</div>
            <div className="mt-5">Blog</div>
            <div className="mt-5">Help Center</div>
          </div>
          <div className="flex flex-col flex-1 text-base whitespace-nowrap text-zinc-100">
            <h3 className="text-lg font-medium text-white">Resources</h3>
            <div className="mt-7">Pricing</div>
            <div className="mt-5">FAQs</div>
            <div className="mt-5">Contact Support</div>
            <div className="mt-5">Privacy Policy</div>
            <div className="mt-5">Terms</div>
          </div>
          <div className="flex flex-col flex-1 text-base whitespace-nowrap text-zinc-100">
            <h3 className="text-lg font-medium text-white">Support</h3>
            <div className="mt-6">Contact</div>
            <div className="mt-6">Affiliates</div>
            <div className="mt-6">Sitemap</div>
            <div className="mt-5">Cancelation Policy</div>
            <div className="mt-5">Pricing</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
