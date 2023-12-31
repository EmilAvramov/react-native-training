import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDataContext as useAuthContext } from '../context/authContext';
import { NavigationEvents } from 'react-navigation';
import { AuthForm } from '../components/AuthForm';
import NavLink from '../components/NavLink';

export const SignupScreen = () => {
	const { state, signup, clearErrorMessage, tryLocalSignin } = useAuthContext();

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText={'Sign Up for Tracker'}
				buttonText={'Sign Up'}
				errorMessage={state.errorMessage}
				onSubmit={signup}
			/>
			<NavLink
				text={'Already have an account? Sign in instead.'}
				routeName={'Signin'}
			/>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
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
