import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDataContext } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

export const DetailScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state } = useDataContext();

	const blogPost = state.find((blog) => blog.id === id);

	return (
		<View>
			<Text>{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	);
};

DetailScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
				<EvilIcons
					name='pencil'
					size={35}
				/>
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({});
