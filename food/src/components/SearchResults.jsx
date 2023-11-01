import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { SearchTile } from './SearchTile';

export const SearchResults = ({ title, results, navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item, index }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Tile')}>
							<SearchTile tileData={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 10,
		marginBottom: 10,
	},
	container: {
		marginBottom: 10,
	},
});
