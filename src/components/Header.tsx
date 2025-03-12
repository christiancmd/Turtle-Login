import { FaUserCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="w-full h-[70px] bg-transparent px-10">
      <div className="w-full h-full flex  justify-between items-center px-5">
        <h1 className=" text-white font-bold text-3xl hover:underline cursor-pointer">
          Turttle Login
        </h1>
        <FaUserCircle className="size-12 fill-amber-50 cursor-pointer hover:fill-black duration-300 ease-out" />
      </div>
    </header>
  );
};

export default Header;
