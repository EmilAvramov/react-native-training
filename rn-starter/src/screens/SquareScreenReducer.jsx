import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorTile } from '../components/ColorTile';
import { ColorCounterReducer } from '../components/ColorCounterReducer';

const reducer = (state, action) => {
    let color = action.type.toLowerCase()
    let sum = state[color] + action.payload

    return {
        ...state,
        [color]: sum > 255 || sum < 0 ? state[color] : sum
    }
};

export const SquareScreenReducer = () => {
	const [{red, green, blue}, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});

	return (
		<View>
			<View>
				<ColorCounterReducer
					color='Red'
					setter={dispatch}
				/>
				<ColorCounterReducer
					color='Green'
					setter={dispatch}
				/>
				<ColorCounterReducer
					color='Blue'
					setter={dispatch}
				/>
			</View>
			<ColorTile color={`rgb(${red}, ${green}, ${blue})`} />
		</View>
	);
};

const styles = StyleSheet.create({});
