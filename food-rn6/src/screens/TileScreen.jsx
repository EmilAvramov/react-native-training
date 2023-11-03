import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

export const TileScreen = ({ route }) => {
	const [details, setDetails] = useState({});

	const id = route.params.id;

	const getDetails = async () => {
		const response = await yelp.get(`/${id}`);
		setDetails(response.data);
	};

	useEffect(() => {
		getDetails(id);
	}, []);

	if (!details) {
		return null;
	}

	return (
		<View>
			<Text>{details.name}</Text>
			<FlatList
				data={details.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => (
					<Image
						style={styles.image}
						source={{ uri: item }}
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    }
});
