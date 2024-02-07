const Testimonials = () => {
  return (
    <section className="flex flex-col justify-center px-16 py-12 bg-white max-md:px-5">
      <div className="flex flex-col justify-center mx-8 mt-10 rounded-xl bg-neutral-100 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[984px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d1ce7ffb7521fe61c133887b9f37315451a4fac47c24695bebfac2bb4b4763b?apiKey=d785672278ca42889a21c261facca94d&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col mt-20 mb-11 w-full max-w-[980px] max-md:my-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between self-end max-w-full text-center w-[692px] max-md:flex-wrap">
              <div className="flex flex-col max-md:max-w-full">
                <h1 className="text-6xl font-bold text-teal-900 leading-[68px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                  What our happy <br /> client say
                </h1>
                <p className="self-center mt-7 text-lg tracking-normal leading-8 text-slate-600">
                  File storage made easy – including powerful features you won’t
                  find anywhere else. Whether you’re.
                </p>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1220dbe903a0a3f41202a1a72452b93ba6f7a0ebc9a5fb69f5d25e3deaf6aa3?apiKey=d785672278ca42889a21c261facca94d&"
                className="my-auto aspect-square w-[78px]"
              />
            </div>
            <div className="flex gap-5 justify-between items-end mt-28 font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09cf1ae79d5ff6edad23223f723b4b0e3c4e4304b2deb055212e11444f163d26?apiKey=d785672278ca42889a21c261facca94d&"
                className="mt-96 aspect-square fill-rose-400 w-[41px] max-md:mt-10"
                alt=""
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1567cbdeae57856be0ceeaf72ca0d37232fcdd6a0b8d45433f899ec2ee37f11b?apiKey=d785672278ca42889a21c261facca94d&"
                className="flex-1 self-stretch w-full aspect-[0.81]"
                alt=""
              />
              <div className="flex flex-col flex-1 mt-6 max-md:max-w-full">
                <div className="text-2xl font-bold tracking-tighter text-teal-900 max-md:max-w-full">
                  furni.shop
                </div>
                <div className="mt-12 text-2xl italic leading-10 text-slate-500 max-md:mt-10 max-md:max-w-full">
                  File storage made easy – including powerful features you won’t
                  find anywhere else. Whether you’re.
                </div>
                <div className="mt-14 text-2xl text-slate-800 max-md:mt-10 max-md:max-w-full">
                  Larry Diamond
                </div>
                <div className="mt-3 text-sm tracking-normal text-gray-500 max-md:max-w-full">
                  Chief Executive Officer
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5cab81ff1dae81e9bda3704f269e4662be9b64acc58d721cc2d6b41fd56d64?apiKey=d785672278ca42889a21c261facca94d&"
                  className="mt-14 max-w-full aspect-[2.33] w-[142px] max-md:mt-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
