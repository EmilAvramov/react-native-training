import React, { useEffect } from 'react';
import { useDataContext as useAuthContext } from '../context/authContext';

export const ResolveAuthScreen = () => {
	const { tryLocalSignin } = useAuthContext();

	useEffect(() => {
		tryLocalSignin();
	}, []);

	return null;
};
