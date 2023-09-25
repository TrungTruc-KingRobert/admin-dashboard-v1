// components
import Sidebar from "./components/Sidebar";
import Analytics from "./components/Analytics";
import NewUsers from "./components/NewUsers";
import RecentOrders from "./components/RecentOrders";
import RightSection from "./components/RightSection";

// context
import AppProvider from "./contexts/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <div className="w-[96%] my-0 mx-auto grid grid-cols-[12rem_auto_23rem] gap-[1.8rem] xl:w-[95%] xl:grid-cols-[7rem_auto_23rem] md:w-full md:grid-cols-[1fr] md:py-0 md:px-[1.8rem]">
        <Sidebar />
        <main className="mt-[1.4rem] md:mt-[8rem] md:py-0 md:px-[1rem]">
          <Analytics />
          <NewUsers />
          <RecentOrders />
        </main>
        <RightSection />
      </div>
    </AppProvider>
  );
};

export default App;
