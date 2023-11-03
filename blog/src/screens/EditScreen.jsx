import React from 'react';
import { StyleSheet } from 'react-native';
import { useDataContext } from '../context/BlogContext';
import { BlogPostForm } from '../components/BlogPostForm';

export const EditScreen = ({ navigation }) => {
	const { state, editBlogPost } = useDataContext();
	const id = navigation.getParam('id');

	const blogPost = state.find((item) => item.id === id);

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) =>
				editBlogPost(id, title, content, () =>
					navigation.navigate('Detail', { id })
				)
			}
		/>
	);
};

const styles = StyleSheet.create({});
