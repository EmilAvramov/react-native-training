import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDataContext as useAuthContext } from '../context/authContext';
import { NavigationEvents } from 'react-navigation';
import { AuthForm } from '../components/AuthForm';
import NavLink from '../components/NavLink';

export const SigninScreen = () => {
	const { state, signin, clearErrorMessage, tryLocalSignin } = useAuthContext();

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText={'Sign In to Tracker'}
				buttonText={'Sign In'}
				errorMessage={state.errorMessage}
				onSubmit={signin}
			/>
			<NavLink
				text={'Do not have an account? Sign up'}
				routeName={'Signup'}
			/>
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 100,
	},
});
