import React, { createContext, useState } from "react";
export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [Request_List, setRequest_List] = useState();

  return (
    <MyContext.Provider value={{ Request_List, setRequest_List }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
