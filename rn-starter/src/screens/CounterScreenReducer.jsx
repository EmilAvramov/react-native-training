import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
	return {
		...state,
		count: action.type === 'increase' ? state.count + action.payload : state.count - action.payload
	}
}

export const CounterScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
		count: 0
	})

	return (
		<View>
            <Text>Current Count: {state.count}</Text>
			<Button title='Increase' onPress={() => dispatch({type: 'increase', payload: 5})}/>
            <Button title='Decrease' onPress={() => dispatch({type: 'decrease', payload: 3})}/>
		</View>
	);
};

const styles = StyleSheet.create({});
