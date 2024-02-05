import { IoIosArrowRoundDown } from 'react-icons/io';
import { CgDetailsMore } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <header className="mt-5">
      <nav className="flex flex-row justify-between mx-20 my-4">
        <span className="font-notoJP font-bold text-primary  text-2xl">
          furni.shop
        </span>
        <ul className="flex flex-row space-x-5 font-monts">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
        <ul className="flex flex-row space-x-5">
          <li>
            <CiSearch size={24} />
          </li>
          <li>
            <CgDetailsMore size={24} />
          </li>
        </ul>
      </nav>
      <div className="flex flex-row justify-end items-center mx-6">
        <div className="bg-white bg-opacity-40 z-10 -mr-52 w-[570px] h-[470px] p-16 backdrop-blur-xl space-y-4 ">
          <h3 className="text-7xl w-100 font-notoJP font-bold text-primary">
            We Help You Make Modern Interior
          </h3>
          <p className="w-[280px]">
            We will help you to make an elegant and luxurious interior designed
            by professional interior designer.
          </p>
        </div>
        <img
          className="h-[666px]"
          src="../public/furniture.png"
          alt="Furniture Image"
        />
        <div
          className="h-32 w-32 absolute bottom-0 right-16
         bg-white bg-opacity-40 backdrop-blur-2xl flex justify-center items-center"
        >
          <IoIosArrowRoundDown color="white" size={64} />
        </div>
        <div className="ml-6 flex flex-col items-center justify-center space-y-28 w-10">
          <div className="space-y-3">
            <MdKeyboardArrowUp size={32} className="opacity-75" />
            <MdKeyboardArrowDown size={32} className="opacity-75" />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-notoJP font-bold">01</span>
            <span className="h-12 w-[0.7px] bg-[#B5B5B7] my-2"></span>
            <span className="font-notoJP font-bold">06</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
