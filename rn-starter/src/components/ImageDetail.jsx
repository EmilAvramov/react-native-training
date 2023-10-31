import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export const ImageDetail = ({ title, img, score }) => {
	return (
		<View>
			<Text>{title} - Score {score}</Text>
			<Image source={img} />
		</View>
	);
};

const styles = StyleSheet.create({});
