// components
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-[96%] my-0 mx-auto grid grid-cols-[12rem_auto_23rem] gap-[1.8rem] xl:w-[95%] xl:grid-cols-[7rem_auto_23rem] md:w-full md:grid-cols-[1fr] md:py-0 md:px-[var(--padding-1)]">
      <Sidebar />
    </div>
  );
};

export default App;
