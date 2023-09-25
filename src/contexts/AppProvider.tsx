import { ReactNode, createContext, useState } from "react";

interface appContextInterface {
  isShowNav: boolean;
  setIsShowNav: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export const AppContext = createContext<appContextInterface>({
  isShowNav: false,
  setIsShowNav: (_value: boolean) => {},
  isDarkMode: false,
  setIsDarkMode: (_value: boolean) => {}
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isShowNav, setIsShowNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <AppContext.Provider
      value={{ isShowNav, setIsShowNav, isDarkMode, setIsDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
