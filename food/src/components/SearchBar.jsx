import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchBar = ({textValue, onChange, onSubmit}) => {
	return (
		<View style={styles.container}>
			<Feather
				name='search'
				style={styles.icon}
			/>
			<TextInput
				placeholder={'Search'}
                autoCorrect={false}
				autoCapitalize='none'
				style={styles.input}
                value={textValue}
                onChangeText={onChange}
                onEndEditing={onSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 10,
		padding: 5,
		marginHorizontal: 10,
		marginVertical: 10,
		flexDirection: 'row',
		gap: 5,
	},
	icon: {
		fontSize: 35,
        alignSelf: 'center',
        color: 'black'
	},
    input: {
        fontSize: 18,
        flex: 1
    }
});
