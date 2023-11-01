import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export const useYelp = () => {
	const [businesses, setBusinesses] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const makeApiRequest = async (searchTerm) => {
		try {
			const results = await yelp.get('/search', {
				params: {
					term: searchTerm,
					limit: 50,
					location: 'san jose',
				},
			});
			setBusinesses(results.data.businesses);
			setErrorMessage('');
		} catch (err) {
			setErrorMessage('Something went wrong. Please try again.');
		}
	};

	useEffect(() => {
		makeApiRequest('pizza');
	}, []);

	return {businesses, errorMessage, makeApiRequest};
};
