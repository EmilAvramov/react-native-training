import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from 'react-native';
import { useDataContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

export const IndexScreen = ({ navigation }) => {
	const { state, addBlogPost, deleteBlogPost } = useDataContext();

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate('Detail', { id: item.id })}>
						<View style={styles.row}>
							<Text style={styles.title}>
								{item.title}
							</Text>

							<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
								<Feather
									style={styles.icon}
									name='trash'
								/>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather
					name='plus'
					size={30}
				/>
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderColor: 'gray',
	},
	icon: {
		fontSize: 24,
	},
	title: {
		fontSize: 18,
	},
});
