import React from 'react';
import { StyleSheet } from 'react-native';
import { useDataContext } from '../context/BlogContext';
import { BlogPostForm } from '../components/BlogPostForm';

export const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useDataContext();

	return (
		<BlogPostForm
			onSubmit={(title, content) =>
				addBlogPost(title, content, () => navigation.navigate('Index'))
			}
		/>
	);
};

const styles = StyleSheet.create({});
