import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Child #1</Text>
			<Text style={styles.textTwoStyle}>Child #2</Text>
			<Text style={styles.textThreeStyle}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
		height: 200,
		alignItems: 'center'
	},
	textOneStyle: {
		borderWidth: 1,
		borderColor: 'red',
		paddingVertical: 1,
		top: 100,
		right: 30
	},
	textTwoStyle: {
		borderWidth: 1,
		borderColor: 'red',
		paddingVertical: 1,
		position: 'absolute',
		fontSize: 18,
		...StyleSheet.absoluteFillObject
	},
	textThreeStyle: {
		borderWidth: 1,
		borderColor: 'red',
		paddingVertical: 1,
		alignSelf: 'flex-start',
		bottom: -50,
		left: 20
	},
});
