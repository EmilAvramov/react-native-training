import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

	return (
		<View>
            <Text>Current Count: {counter}</Text>
			<Button title='Increase' onPress={() => setCounter(prev => prev + 1)}/>
            <Button title='Decrease' onPress={() => setCounter(prev => prev - 1)}/>
		</View>
	);
};

const styles = StyleSheet.create({});
