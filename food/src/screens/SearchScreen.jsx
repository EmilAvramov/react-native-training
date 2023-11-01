import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { useYelp } from '../hooks/useYelp';
import { SearchResults } from '../components/SearchResults';

export const SearchScreen = ({ navigation }) => {
	const [term, setTerm] = useState('');
	const { businesses, errorMessage, makeApiRequest } = useYelp();

	const filterResultsByPrice = (price) => {
		return businesses.filter((business) => {
			return business.price === price;
		});
	};

	return (
		<ScrollView>
			<SearchBar
				textValue={term}
				onChange={(val) => setTerm(val)}
				onSubmit={() => makeApiRequest(term)}
			/>
			{errorMessage && <Text>{errorMessage}</Text>}
			<SearchResults
				results={filterResultsByPrice('$')}
				title={'Cost Effective'}
                navigation={navigation}
			/>
			<SearchResults
				results={filterResultsByPrice('$$')}
				title={'Bit Pricier'}
                navigation={navigation}
			/>
			<SearchResults
				results={filterResultsByPrice('$$$')}
				title={'Big Spender'}
                navigation={navigation}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
});
