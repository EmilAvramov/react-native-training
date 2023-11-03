import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { useYelp } from '../hooks/useYelp';
import { SearchResults } from '../components/SearchResults';

export const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const { businesses, errorMessage, runSearch } = useYelp();

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
				onSubmit={() => runSearch(term)}
			/>
			{errorMessage && <Text>{errorMessage}</Text>}
			<SearchResults
				results={filterResultsByPrice('$')}
				title={'Cost Effective'}
			/>
			<SearchResults
				results={filterResultsByPrice('$$')}
				title={'Bit Pricier'}
			/>
			<SearchResults
				results={filterResultsByPrice('$$$')}
				title={'Big Spender'}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
	},
});
