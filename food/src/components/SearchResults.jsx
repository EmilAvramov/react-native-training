import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { SearchTile } from './SearchTile';
import { withNavigation } from 'react-navigation'

const SearchResults = ({ title, results, navigation }) => {
	if (!results.length) {
		return null
	}

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
						<TouchableOpacity onPress={() => navigation.navigate('Tile', {id: item.id})}>
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

export default withNavigation(SearchResults);