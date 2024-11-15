import { createContext, useReducer, useState } from "react";

export const UserListContext = createContext({
  users: [],
  setUsers: (users) => {},
  updateUser: (user) => {},
  addUser: (user) => {},
  removeUser: (id) => {},
});

const SET_USERS = "SET_USERS";
const UPDATE_USER = "UPDATE_USER";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

const userListReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.payload];
    case ADD_USER:
      return [...state, action.payload];
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    case REMOVE_USER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export const UserListProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userListReducer, []);

  const setUsers = (users) => {
    dispatch({ type: SET_USERS, payload: [...users] });
  };
  const updateUser = (user) => {
    dispatch({ type: UPDATE_USER, payload: { ...user } });
  };

  const addUser = (user) => {
    dispatch({ type: ADD_USER, payload: { ...user } });
  };

  const removeUser = (userId) => {
    dispatch({ type: REMOVE_USER, payload: userId });
  };

  const values = { users, setUsers, updateUser, addUser, removeUser };
  return (
    <UserListContext.Provider value={values}>
      {children}
    </UserListContext.Provider>
  );
};

export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user: user,
    setUser: setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const Context = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Context;
