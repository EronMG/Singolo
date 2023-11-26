import styles from "../styles";
import { links } from "../constants/index";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`${styles.sectionCenter} bg-[#2D303A] px-[20px] sm:px-[40px] py-[30px] w-full`}
    >
      <div className="flex flex-row justify-between max-w-[1020px] w-full items-center">
        <h3 className="text-[25px] font-lato font-semibold text-white">
          SINGOLO<span className="text-[#F06C64]">*</span>
        </h3>
        <ul className="list-none flex flex-row justify-end items-center hidden ss:inline-block ss:flex ss:gap-[15px]">
          {links.map((nav, index) => (
            <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px]   ${
                nav.id == 1 ? "text-[#F06C64]" : "text-white"
              } max-w-[100px]`}
            >
              <a href={`${nav.link}`}>{nav.name}</a>
            </li>
          ))}
        </ul>
        <div className="ss:hidden flex flex-1 justify-end items-center">
          <img
            src={
              toggle
                ? "../src/assets/Header.svg"
                : "../src/assets/Burger-menu-icon.svg"
            }
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-[#2D303A] absolute top-20 right-0 mx-0 my-2 min-w-[140px]  rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-center items-start flex-1">
              {links.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === links.length - 1 ? `mr-0` : `mb-4`
                  } mr-10 ${nav.id == 1 ? "text-[#F06C64]" : "text-white"}`}
                >
                  <a href={`${nav.link}`}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
