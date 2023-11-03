import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export const BlogPostForm = ({ initialValues, onSubmit }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(val) => setTitle(val)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(val) => setContent(val)}
			/>
			<Button
				title={'Save Blog Post'}
				onPress={() => onSubmit(title, content)}
			/>
		</View>
	);
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
	label: {
		marginHorizontal: 10,
		fontSize: 20,
		marginBottom: 5,
	},
	input: {
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: 'black',
		fontSize: 18,
		marginBottom: 15,
	},
});
