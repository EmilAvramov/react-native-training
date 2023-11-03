import React, { createContext, useReducer, useContext } from 'react';

export default (reducer, actions, initialState) => {
	const Context = createContext();

	const DataProvider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		const boundActions = {};

		Object.keys(actions).forEach((key) => {
			boundActions[key] = actions[key](dispatch);
		});

		return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
	};

	const useDataContext = () => useContext(Context);

	return { useDataContext, DataProvider };
};
