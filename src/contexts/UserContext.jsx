import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);

  function handleLogOut() {
    setUserLoggedIn(null);
  }

  function handleSetUser(user) {
    setUserLoggedIn(user);
  }

  return (
    <UserContext.Provider value={{ userLoggedIn, handleLogOut, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};
