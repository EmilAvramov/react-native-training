import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const ColorTile = ({ color }) => {
	return (
		<View
			style={{
				height: 100,
				width: 100,
				backgroundColor: color,
			}}
		/>
	);
};

const styles = StyleSheet.create({});
