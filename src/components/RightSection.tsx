// hooks
import { useContext } from "react";

// icons
import { FaBars } from "react-icons/fa6";
import {
  MdLightMode,
  MdDarkMode,
  MdNotificationsNone,
  MdVolumeUp,
  MdModeEdit,
  MdAdd,
  MdMoreVert
} from "react-icons/md";

// context
import { AppContext } from "../contexts/AppProvider";

const RightSection = () => {
  const { setIsShowNav, isDarkMode, setIsDarkMode } = useContext(AppContext);

  const handleClickMode = () => {
    setIsDarkMode(!isDarkMode);
    if (document) {
      document.body.classList.toggle("dark-mode-variables");
    }
  };

  return (
    <section className="mt-[1.4rem] md:w-[94%] md:mt-0 md:mb-16 md:mx-0">
      <nav className="flex justify-end gap-8 md:fixed md:top-0 md:left-0 md:items-center md:bg-[var(--color-white)] md:py-0 md:px-[1.2rem] md:h-[4.6rem] md:w-full md:z-[2] md:shadow-[0_1rem_1rem_var(--color-light)] md:m-0">
        <button
          id="menu-btn"
          className="hidden md:inline-block md:bg-transparent md:cursor-pointer md:text-[var(--color-dark)] md:absolute md:left-4"
          onClick={() => setIsShowNav(true)}
        >
          <FaBars className="md:text-[2rem]" />
        </button>
        <div className="bg-[var(--color-light)] flex justify-between items-center h-[1.6rem] w-[4.2rem] cursor-pointer rounded-[0.4rem] md:w-[4.4rem] md:absolute md:left-[66%]">
          <MdLightMode
            className={`text-[1.2rem] w-1/2 h-full flex items-center justify-center ${
              !isDarkMode
                ? "bg-[var(--color-primary)] text-white rounded-[0.4rem]"
                : ""
            }`}
            onClick={handleClickMode}
          />
          <MdDarkMode
            className={`text-[1.2rem] w-1/2 h-full flex items-center justify-center ${
              isDarkMode
                ? "bg-[var(--color-primary)] text-white rounded-[0.4rem]"
                : ""
            }`}
            onClick={handleClickMode}
          />
        </div>

        <div className="flex gap-8 text-right">
          <div className="md:hidden">
            <p>
              Hey, <b>LTT</b>
            </p>
            <small className="text-[var(--color-info-dark)]">Admin</small>
          </div>
          <div className="w-[2.8rem] h-[2.8rem] rounded-[50%] overflow-hidden">
            <img src="/profile-1.jpg" />
          </div>
        </div>
      </nav>

      <div className="flex justify-center text-center mt-4 bg-[var(--color-white)] p-[1.8rem] rounded-[2rem] shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 hover:shadow-none">
        <div>
          <img
            src="/logo.png"
            className="w-44 h-auto mb-[0.8rem] rounded-[50%]"
          />
          <h2 className="mb-[0.2rem]">KingRobert</h2>
          <p>Frontend Web Developer</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-[0.8rem]">
          <h2>Reminders</h2>
          <div className="p-2.5 shadow-[0_2rem_3rem_var(--color-light)] rounded-[50%] bg-[var(--color-white)] cursor-pointer">
            <MdNotificationsNone className="text-[24px]" />
          </div>
        </div>

        <div className="bg-[var(--color-white)] flex items-center gap-4 mb-[0.7rem] py-[1.4rem] px-[1.8rem] rounded-[1.2rem] shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 hover:shadow-none">
          <div className="p-[0.6rem] text-[var(--color-white)] bg-[var(--color-success)] rounded-[20%] flex">
            <MdVolumeUp className="text-[24px]" />
          </div>
          <div className="flex justify-between items-center m-0 w-full">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text_muted">08:00 AM - 12:00 PM</small>
            </div>
            <MdMoreVert className="text-[24px]" />
          </div>
        </div>

        <div className="bg-[var(--color-white)] flex items-center gap-4 mb-[0.7rem] py-[1.4rem] px-[1.8rem] rounded-[1.2rem] shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 hover:shadow-none">
          <div className="p-[0.6rem] text-[var(--color-white)] bg-[var(--color-danger)] rounded-[20%] flex">
            <MdModeEdit className="text-[24px]" />
          </div>
          <div className="flex justify-between items-center m-0 w-full">
            <div>
              <h3>Workshop</h3>
              <small>08:00 AM - 12:00 PM</small>
            </div>
            <MdMoreVert className="text-[24px]" />
          </div>
        </div>

        <div className="bg-[var(--color-white)] flex items-center gap-4 mb-[0.7rem] py-[1.4rem] px-[1.8rem] rounded-[1.2rem] shadow-[0_2rem_3rem_var(--color-light)] cursor-pointer duration-300 ease delay-0 border-[2px] border-dashed border-[var(--color-primary)] text-[var(--color-primary)] justify-center hover:shadow-none hover:bg-[var(--color-primary)] hover:text-white">
          <div className="flex items-center gap-[0.6rem]">
            <MdAdd className="text-[24px]" />
            <h3>Add Reminder</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
