import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDataContext as useTrackContext } from '../context/trackContext';
import MapView, { Polyline } from 'react-native-maps';

export const TrackDetailScreen = ({ navigation }) => {
	const { state } = useTrackContext();

	const _id = navigation.getParam('_id');

	const track = state.find((t) => t._id === _id);
	const initialCoords = track.locations[0].coords;

	return (
		<>
			<Text style={{ fontSize: 24 }}>{track.name}</Text>
			<MapView
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...initialCoords,
				}}
				style={{
					height: 200,
				}}>
				<Polyline coordinates={track.locations.map((loc) => loc.coords)} />
			</MapView>
		</>
	);
};

const styles = StyleSheet.create({});
