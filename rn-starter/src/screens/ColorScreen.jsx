import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ColorTile } from '../components/ColorTile';

export const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	const randomColor = () => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);

		return `rgb(${red}, ${green}, ${blue})`;
	};

	return (
		<View>
			<Button
				title='Add a Color'
				onPress={() =>
					setColors((prev) => {
						return [...prev, randomColor()];
					})
				}
			/>
			<View>
				<FlatList
					data={colors}
					keyExtractor={(color) => color}
					renderItem={({ item }) => <ColorTile color={item} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create();
