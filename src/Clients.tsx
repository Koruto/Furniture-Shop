import Microsoft from '../public/static/images/Microsoft.png';
import Entrepreneur from '../public/static/images/Entrepreneur.png';
import Fortune from '../public/static/images/Fortune.png';
import Business_Web from '../public/static/images/Business_web.png';
import Mashable from '../public/static/images/Mashable.png';

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