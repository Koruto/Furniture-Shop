import Sofa from './svg/Sofa.svg';
import Chair_Vase from './svg/Chair_Vase.svg';
import Study_Lamp from './svg/Study_Lamp.svg';
import Bedside from './svg/Bedside.svg';

const About = () => {
  return (
    <section className="mx-44 my-32">
      <div className="flex items-center">
        <div className="flex flex-col space-y-6">
          <span className="flex items-center font-bold font-notoJP text-5xl text-primary">
            About Us
          </span>
          <p>
            At Besnik Consultancy, we take pride in our values
            <br /> &#x2010; service, integrity, and excellence.
          </p>
        </div>
        <button className="bg-[#F4F6F6] px-10 h-16 rounded font-semibold text-[#5F5F64] ml-auto mr-10">
          Learn more
        </button>
      </div>
      <div className="flex mt-20">
        <div className="grid grid-cols-2">
          <div className="flex flex-col max-w-[241px]">
            <h4 className="flex flex-col space-y-6 w-full text-6xl font-bold text-primary">
              <span className="text-6xl text-primary">1.</span>
              <span className="text-2xl leading-8 text-primary">
                Who We Are
              </span>
            </h4>
            <div className="mt-3 w-full text-base leading-6 text-gray-500">
              You get a 2-week free trial to kick the Smarty tries. We want you
              to.
            </div>
          </div>
          <div className="flex flex-col max-w-[241px]">
            <h4 className="flex flex-col space-y-6 w-full text-6xl font-bold text-primary">
              <span className="text-6xl text-primary">2.</span>
              <span className="text-2xl leading-8 text-primary">
                What Do We Do
              </span>
            </h4>
            <div className="mt-3 w-full text-base leading-6 text-gray-500">
              We give you a free course that guides you through the process.
            </div>
          </div>
          <div className="flex flex-col max-w-[241px]">
            <h4 className="flex flex-col space-y-6 w-full text-6xl font-bold text-primary">
              <span className="text-6xl text-primary">3.</span>
              <span className="text-2xl leading-8 text-primary">
                How Do We Help
              </span>
            </h4>
            <div className="mt-3 w-full text-base leading-6 text-gray-500">
              Use our multimedia lecturers, videos, and coaching sessions.
            </div>
          </div>
          <div className="flex flex-col max-w-[241px]">
            <h4 className="flex flex-col space-y-6 w-full text-6xl font-bold text-primary">
              <span className="text-6xl text-primary">4.</span>
              <span className="text-2xl leading-8 text-primary">
                Create success story
              </span>
            </h4>
            <div className="mt-3 w-full text-base leading-6 text-gray-500">
              With access to online learning resources anyone can transform.
            </div>
          </div>
        </div>
        <div className="ml-auto mr-10 max-w-[523px]">
          <div className="flex max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-14 max-md:mt-10">
                <img
                  loading="lazy"
                  src={Study_Lamp}
                  className="w-full aspect-[1.67]"
                />
                <img
                  loading="lazy"
                  src={Sofa}
                  className="mt-4 w-full aspect-[0.93]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6">
                <img
                  loading="lazy"
                  src={Chair_Vase}
                  className="w-full aspect-[0.93]"
                />
                <img
                  loading="lazy"
                  src={Bedside}
                  className="mt-8 w-full aspect-[1.67]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
