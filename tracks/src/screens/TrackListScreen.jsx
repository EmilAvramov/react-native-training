import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const TrackListScreen = ({ navigation }) => {
	return (
		<>
			<Text>TrackListScreen</Text>
			<Button
				title='Go to track detail'
				onPress={() => navigation.navigate('TrackDetail')}
			/>
		</>
	);
};

const styles = StyleSheet.create({});