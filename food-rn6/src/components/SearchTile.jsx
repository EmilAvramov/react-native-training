import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const SearchTile = ({ tileData }) => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: tileData.image_url }}
			/>
			<Text style={styles.title}>{tileData.name}</Text>
			<Text style={styles.rating}>
				{tileData.rating} Stars, {tileData.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
	title: {
		fontWeight: 'bold',
	},
	image: {
		borderRadius: 5,
		width: 250,
		height: 120,
        marginBottom: 5
	},
});
