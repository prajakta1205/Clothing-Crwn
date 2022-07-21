import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../../src/utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});



export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser)

  const setCurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });


    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
  
      return unsubscribe;
    }, []);
  
    const value = {
      currentUser,
    };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};