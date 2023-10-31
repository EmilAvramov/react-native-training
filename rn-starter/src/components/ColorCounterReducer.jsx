import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const INCREMENT = 10

export const ColorCounterReducer = ({ color, setter }) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button
				title={`Increase ${color}`}
				onPress={() =>
					setter({type: color, payload: INCREMENT})
				}
			/>
			<Button
				title={`Decrease ${color}`}
				onPress={() =>
					setter({type: color, payload: -1 * INCREMENT})
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});
