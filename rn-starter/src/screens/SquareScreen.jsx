import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ColorCounter } from '../components/ColorCounter';
import { ColorTile } from '../components/ColorTile';

export const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	return (
		<View>
			<View>
				<ColorCounter
					color='Red'
					setter={setRed}
				/>
				<ColorCounter
					color='Green'
					setter={setGreen}
				/>
				<ColorCounter
					color='Blue'
					setter={setBlue}
				/>
			</View>
			<ColorTile color={`rgb(${red}, ${green}, ${blue})`} />
		</View>
	);
};

const styles = StyleSheet.create({});
