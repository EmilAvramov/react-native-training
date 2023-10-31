import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const ComponentScreen = () => {
	const name = 'Emil';

	return (
		<View>
			<Text style={styles.first}>Getting started with React Native</Text>
            <Text style={styles.second}>My name is {name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	first: {
		fontSize: 45,
	},
    second: {
        fontSize: 20
    }
});
