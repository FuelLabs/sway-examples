// import { createContext, useContext, useEffect } from "react";

// const NftThemeContext = createContext();

// export const useTheme = () => {
//   const context = useContext(NftThemeContext);

//   return {
//     theme: context,
//     isDarkMode: context === "dark",
//   };
// };

// export const NftThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//       document.documentElement.removeAttribute("data-theme");
//     }
//   }, [isDarkMode]);

//   return (
//     <NftThemeContext.Provider value="">
//         {children}
//     </NftThemeContext.Provider>
//   )
// };
