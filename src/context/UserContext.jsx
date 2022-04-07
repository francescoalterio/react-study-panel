import React, { useState, useEffect } from "react";

export const UserContext = React.createContext({});

export const initialState = {
  learning: [],
  dominated: [],
  created: [],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  const handleUser = (data) => {
    setUser(data);
  };

  useEffect(() => {
    console.log(`UserContext:`, user);
  }, [user]);

  return (
    <UserContext.Provider value={[user, handleUser]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
