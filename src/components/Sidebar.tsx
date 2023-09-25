// hooks
import { useContext } from "react";

// icons
import { IoClose } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import {
  MdOutlineInsights,
  MdOutlineReceiptLong,
  MdOutlineMail,
  MdOutlineInventory,
  MdOutlineReportGmailerrorred,
  MdSettings,
  MdAdd,
  MdLogout
} from "react-icons/md";

// context
import { AppContext } from "../contexts/AppProvider";

const Sidebar = () => {
  const { isShowNav, setIsShowNav } = useContext(AppContext);

  return (
    <aside
      style={{ display: isShowNav ? "block" : "" }}
      className="h-screen md:fixed md:bg-[var(--color-white)] md:w-[15rem] md:z-[3] md:shadow-[1rem_3rem_4rem_var(--color-light)] md:h-screen md:left-[-100%] md:hidden md:animate-showMenu"
    >
      <div className="flex items-center justify-between mt-[1.4rem]">
        <div className="flex gap-2 md:ml-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <h2 className="xl:hidden md:inline">
            King<span className="text-[var(--corlor-danger)]">Robert</span>
          </h2>
        </div>
        <div
          className="pr-4 hidden md:inline-block md:cursor-pointer"
          onClick={() => setIsShowNav(false)}
        >
          <IoClose className="text-black text-[24px]" />
        </div>
      </div>

      <div className="flex flex-col bg-[var(--color-white)] shadow-[0_2rem_3rem_var(--color-light)] rounded-[15px] h-[88vh] relative top-6 duration-300 ease delay-0 hover:shadow-[none]">
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <BiSolidDashboard className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Dashboard
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <FaRegUser className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Users
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <MdOutlineReceiptLong className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            History
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center h-[3.7rem] gap-4 relative duration-300 ease delay-0 text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem] w-full bg-[var(--color-light)] ml-0 before:content-[''] before:w-1.5 before:h-[18px] before:bg-[var(--color-primary)]"
        >
          <MdOutlineInsights className="text-[1.6rem] duration-300 ease delay-0 ml-[16px] group-hover:ml-[13px]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Analytics
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <MdOutlineMail className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Tickets
          </h3>
          <span className="bg-[var(--color-danger)] py-0.5 px-1.5 text-[var(--color-white)] text-[11px] rounded-[0.4rem]">
            26
          </span>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <MdOutlineInventory className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Sale List
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <MdOutlineReportGmailerrorred className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Reports
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <MdSettings className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Settings
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 relative ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] md:w-full md:h-[3.4rem]"
        >
          <MdAdd className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            New Login
          </h3>
        </a>
        <a
          href="#"
          className="group flex items-center text-[var(--color-info-dark)] h-[3.7rem] gap-4 absolute bottom-8 w-full ml-8 duration-300 ease delay-0 hover:text-[var(--color-primary)] xl:w-[5.6rem] xl:relative xl:mt-[1.8rem] md:w-full md:h-[3.4rem] md:absolute md:bottom-20"
        >
          <MdLogout className="text-[1.6rem] duration-300 ease delay-0 group-hover:ml-[0.6rem]" />
          <h3 className="duration-300 ease delay-0 xl:hidden md:inline">
            Logout
          </h3>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
