import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'error':
			return { ...state, errorMessage: action.payload };
		case 'auth':
			return { token: action.payload, errorMessage: '' };
		case 'clear_error_msg':
			return { ...state, errorMessage: '' };
		case 'logout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignin = (dispatch) => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'auth', payload: token });
		navigate('TrackList');
	} else {
		navigate('loginFlow');
	}
};

const clearErrorMessage = (dispatch) => () =>
	dispatch({ type: 'clear_error_msg' });

const signup = (dispatch) => async (email, password) => {
	try {
		const response = await trackerApi.post('/signup', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'auth', payload: response.data.token });
		navigate('TrackList');
	} catch (e) {
		dispatch({
			type: 'error',
			payload: 'Something went wrong with sign up.',
		});
	}
};

const signin = (dispatch) => async (email, password) => {
	try {
		const response = await trackerApi.post('/signin', { email, password });
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'auth', payload: response.data.token });
		navigate('TrackList');
	} catch (e) {
		dispatch({
			type: 'error',
			payload: 'Something went wrong with sign in.',
		});
	}
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'logout' });
	navigate('loginFlow');
};
export const { DataProvider, useDataContext } = createDataContext(
	authReducer,
	{ signin, signout, signup, clearErrorMessage, tryLocalSignin },
	{ token: null, errorMessage: '' }
);
