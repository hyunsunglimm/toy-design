import icon from "/icon.png";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-white flex justify-between items-center h-[80px] px-[40px] fixed w-full top-0 z-10">
      <div className="w-[150px]">Logo</div>
      <div className="relative">
        <input
          placeholder="Search..."
          className="w-[400px] border py-2 px-8 rounded-[12px]"
        />
        <IoSearch className="absolute top-[6px] right-3 text-[26px] text-gray-300" />
      </div>
      <div className="flex justify-between items-center w-[150px]">
        <p className="">username</p>
        <img className="w-[50px]" src={icon} alt="user icon" />
      </div>
    </header>
  );
}
