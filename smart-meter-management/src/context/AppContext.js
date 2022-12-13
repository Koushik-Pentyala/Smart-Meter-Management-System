import { useContext, useReducer, createContext } from 'react';

const initialState = {
  load: false,
};

const reducers = (state, action) => {
  switch (action.type) {
    case 'START_LOAD':
      return {
        ...state,
        load: true,
      };
    case 'END_LOAD':
      return {
        ...state,
        load: false,
      };
    default:
      return state;
  }
};

export function startRefresh(payload) {
  return {
    type: 'START_LOAD',
  };
}

export function stopRefresh(payload) {
  return {
    type: 'END_LOAD',
  };
}

const AppContext = createContext(initialState);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
