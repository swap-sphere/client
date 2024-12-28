import { logo } from "../../../assets";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { allItems } from "../../../common/constants/categories.constant";
import HeaderBottom from "../../molecules/header-bottom/HeaderBottom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full bg-amazon_blue sticky top-0 z-50">
      <div className="mx-auto text-white px-4 py-2 flex items-center gap-4">
        <div className="px-2 h-[80%] flex items-center cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="brand-logo" />
        </div>

        <div className="flex items-center gap-2">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold text-whiteText">Kochi</span>
          </p>
        </div>

        <div className="h-10 rounded flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All
            <span>
              <ArrowDropDownIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-solid border-amazon_blue text-black p-2 flex-col gap-1 z-50">
                <li className="text-sm tracking-wide font-titleFont cursor-pointer">
                  All Departments
                </li>
                {allItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-sm tracking-wide font-titleFont cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />

          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#fea847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-xs text-lightText font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">
            Account & Lists{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>

        <div className="flex items-center justify-center relative">
          <ShoppingCartIcon />
          <p className="text-sm font-semibold mt-3 ml-1 text-whiteText">Cart <span className="text-sm font-semibold absolute text-xs -top-1 left-4 p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center justify-center">0</span></p>
        </div>
      </div>

      <HeaderBottom />
    </div>
  );
};

export default Header;
