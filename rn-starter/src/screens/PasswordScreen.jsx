import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export const PasswordScreen = () => {
	const [text, setText] = useState('');

	return (
		<View>
			<Text style={styles.text}>Enter Password:</Text>
			<TextInput
				autoCorrect={false}
				autoCapitalize='none'
				style={styles.input}
				value={text}
				onChangeText={(val) => setText(val)}
			/>
			{text.length < 5 && <Text style={styles.text}>Password must be at least 5 characters long</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
	text: {
		margin: 15,
	},
});
