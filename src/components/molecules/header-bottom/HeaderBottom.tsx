import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import SidenavContent from "../sidenav-content/SidenavContent";
import { sidenavContent } from "../../../common/constants/sidenav-content.constant";

const HeaderBottom = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setShowSidebar(true)}
          className="flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>

      {showSidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <div className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <AccountCircleIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>

              {
                sidenavContent.map((item) => {
                   return <SidenavContent title={item.title} items={item.items}/>
                })
              }
            </div>

            <span onClick={() => setShowSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
              <CloseIcon />
            </span>
          </div>
        </div>
      )}


    </div>
  );
};

export default HeaderBottom;
