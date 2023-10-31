import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

export const TextScreen = () => {
    const [text, setText] = useState('')

	return (
		<View>
			<TextInput
				autoCorrect={false}
				autoCapitalize='none'
                style={styles.input}
                value={text}
                onChangeText={(val) => setText(val)}
			/>
            <Text style={styles.text}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
	},
    text: {
        margin: 15,
    }
});
