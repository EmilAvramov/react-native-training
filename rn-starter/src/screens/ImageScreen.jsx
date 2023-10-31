import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { ImageDetail } from '../components/ImageDetail';

export const ImageScreen = () => {
	return (
		<View>
			<ImageDetail
				title={'Forest'}
				img={require('../../assets/forest.jpg')}
				score={'77'}
			/>
			<ImageDetail
				title={'Beach'}
				img={require('../../assets/beach.jpg')}
				score={'89'}
			/>
			<ImageDetail
				title={'Mountain'}
				img={require('../../assets/mountain.jpg')}
				score={'80'}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});
