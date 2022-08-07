import * as React from "react";
import {
  FiMenu,
  FiChevronLeft,
  FiCircle,
  FiSquare,
  FiCloud,
  FiWifi,
  FiBattery,
  FiBluetooth,
} from "react-icons/fi";
import { Sidebar } from "./sidebar";

type IProps = {
  children: React.ReactNode | string;
};

export const Layout: React.FC<IProps> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  function handleCloseSidebarOnClickAway(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!openSidebar) return;
    e.stopPropagation();
    setOpenSidebar(false);
  }

  return (
    <div className="text-sm font-sans w-full h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full min-h-[600px] max-w-[340px] flex flex-col mx-auto bg-black border-4 border-black rounded-md shadow-md overflow-hidden">
        <header className="text-[13px] text-[15px] bg-black h-[25px] text-white flex gap-2 justify-between items-center px-2">
          <div className="flex gap-2 items-center">
            <span className="flex items-center text-[11px] h-[14px]">20:28</span>
            <FiCloud />
          </div>

          <div className="flex gap-2 items-center">
            <FiBluetooth />
            <FiWifi />
            <FiBattery />
          </div>
        </header>

        <div className="flex-1 relative bg-white">
          <div
            onClick={handleCloseSidebarOnClickAway}
            className="flex justify-between gap-4 bg-primary p-2"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenSidebar(!openSidebar);
              }}
              className="flex justify-center items-center w-[40px] h-[40px] text-2xl text-white hover:bg-gray-800/20 rounded-full transition-all"
            >
              <FiMenu className="w-full" />
            </button>

            <div className="w-[40px] h-[40px] pointer-events-none overflow-hidden bg-gray-400 rounded-full">
              <img src="/user.png" alt="Usuário" className="w-full" />
            </div>
          </div>

          <main
            onClick={handleCloseSidebarOnClickAway}
            className="p-3 h-full w-full h-[600px] overflow-y-auto"
          >
            {children}
          </main>

          <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
        </div>

        <footer className="mt-auto text-[15px] bg-black h-[50px] text-white flex gap-4 justify-evenly items-center">
          <FiChevronLeft className="text-[19px]" />
          <FiCircle />
          <FiSquare />
        </footer>
      </div>
    </div>
  );
};
