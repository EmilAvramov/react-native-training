import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { useDataContext as useLocationContext } from '../context/locationContext';
import { ActivityIndicator } from 'react-native-paper';

export const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useLocationContext();

	if (!currentLocation) {
		return (
			<ActivityIndicator
				size='large'
				style={{ marginTop: 200 }}
			/>
		);
	}

	let initialLocation = {
		longitude: -122.0312186,
		latitude: 37.33233141,
	};

	return (
		<MapView
			style={styles.map}
			initialRegion={{
				...initialLocation,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
			region={{
				...currentLocation.coords,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}>
			<Circle
				center={currentLocation.coords}
				radius={30}
				strokeColor='rgba(158, 158, 255, 1.0)'
				fillColor='rgba(158, 158, 255, 0.3)'
			/>
			<Polyline coordinates={locations && locations.map((location) => location.coords)} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});
