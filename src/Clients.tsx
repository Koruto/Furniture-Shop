import Microsoft from './svg/Microsoft.svg';
import Entrepreneur from './svg/Entrepreneur.svg';
import Fortune from './svg/Fortune.svg';
import Business_Web from './svg/Business_web.svg';
import Mashable from './svg/Mashable.svg';

const Clients = () => {
  return (
    <section className=" bg-[#F4F6F6] my-20 flex flex-col items-center justify-center">
      <p className=" font-semibold text-[#031745] text-xl tracking-[0.1em] font-open p-12">
        TRUSTED BY OVER 1K+ COMPANIES
      </p>
      <div className="flex items-center justify-center space-x-24 pb-12">
        <img src={Microsoft} alt="Microsoft Logo" width={110} />
        <img src={Entrepreneur} alt="Entrepreneur Logo" width={110} />
        <img src={Fortune} alt="Fortune Logo" width={110} />
        <img src={Business_Web} alt="Business_Web Logo" width={110} />
        <img src={Mashable} alt="Mashable Logo" width={110} />
      </div>
    </section>
  );
};

export default Clients;
