import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>React Native</Text>
			<Button
				title='Go to Components Demo'
				color={'green'}
				onPress={() => navigation.navigate('Components')}
			/>
			<Button
				title='Go to List Demo'
				onPress={() => navigation.navigate('List')}
			/>
			<Button
				title='Go to Images Demo'
				color={'brown'}
				onPress={() => navigation.navigate('Image')}
			/>
			<Button
				title='Go to Counter Demo'
				color={'orange'}
				onPress={() => navigation.navigate('Counter')}
			/>
			<Button
				title='Go to Color Demo'
				color={'red'}
				onPress={() => navigation.navigate('Color')}
			/>
			<Button
				title='Go to Square Demo'
				color={'purple'}
				onPress={() => navigation.navigate('Square')}
			/>
			<Button
				title='Go to Square Reducer Demo'
				color={'black'}
				onPress={() => navigation.navigate('SquareReducer')}
			/>
			<Button
				title='Go to Square Reducer Demo'
				color={'darkblue'}
				onPress={() => navigation.navigate('CounterReducer')}
			/>
			<Button
				title='Go to Text Input Demo'
				color={'grey'}
				onPress={() => navigation.navigate('Text')}
			/>
			<Button
				title='Go to Password Validation Demo'
				color={'magenta'}
				onPress={() => navigation.navigate('Password')}
			/>
			<Button
				title='Go to Box Demo'
				color={'darkgreen'}
				onPress={() => navigation.navigate('Box')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: 'center',
	},
});

export default HomeScreen;
