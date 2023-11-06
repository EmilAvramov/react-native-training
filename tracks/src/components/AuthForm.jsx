import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { Spacer } from './Spacer';

export const AuthForm = ({
	headerText,
	buttonText,
	errorMessage,
	onSubmit,
}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Spacer>
				<Text h3>{headerText}</Text>
			</Spacer>
			<Input
				label='Email'
				value={email}
				autoCapitalize='none'
				autoCorrect={false}
				onChangeText={setEmail}
			/>
			<Spacer />
			<Input
				label='Password'
				value={password}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
				onChangeText={setPassword}
			/>
			{errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
			<Spacer>
				<Button
					title={buttonText}
					onPress={() => onSubmit(email, password)}
				/>
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 100,
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		textAlign: 'center',
		marginVertical: 5,
	},
});
