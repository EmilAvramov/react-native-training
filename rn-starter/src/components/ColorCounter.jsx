import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const INCREMENT = 10

export const ColorCounter = ({ color, setter }) => {
	return (
		<View>
			<Text>{color}</Text>
			<Button
				title={`Increase ${color}`}
				onPress={() =>
					setter((prev) => prev + INCREMENT > 255 ? prev : prev + INCREMENT)
				}
			/>
			<Button
				title={`Decrease ${color}`}
				onPress={() =>
					setter((prev) => prev - INCREMENT < 0 ? prev : prev - INCREMENT)
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});
