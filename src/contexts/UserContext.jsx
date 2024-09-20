import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

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
