import Fire from '../public/static/images/fire.svg';
import Bullet_Point from '../public/static/images/bullet_point.svg';

const Deals = () => {
  return (
    <section className="flex items-center space-x-20 mx-40 my-32">
      <h3 className="flex flex-col">
        <p className="flex items-center font-bold font-notoJP text-5xl text-primary">
          <span>Hot</span>
          <img className="px-1" src={Fire} alt="Fire Icon" />
        </p>
        <span className="font-bold font-notoJP text-5xl text-primary">
          deals for you
        </span>
        <p className="py-5">
          Online shopping for retail sales <br /> direct to consumers
        </p>
      </h3>
      <div className="flex space-x-32">
        <div className=" space-y-6">
          <img src={Bullet_Point} alt="Bullet Point" />
          <h4 className="font-open font-bold">1.5% cashback</h4>
          <p>
            Online shopping for retail <br /> sales direct to <br /> consumers
          </p>
        </div>
        <div className=" space-y-4">
          <img src={Bullet_Point} alt="Bullet Point" />
          <h4 className="font-open font-bold">30-day terms</h4>
          <p>
            Online shopping for retail <br /> sales direct to <br /> consumers
          </p>
        </div>
        <div className=" space-y-4">
          <img src={Bullet_Point} alt="Bullet Point" />
          <h4 className="font-open font-bold">Save Money</h4>
          <p>
            Online shopping for retail <br /> sales direct to consumers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Deals;
