import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { useDataContext as useTrackContext } from '../context/trackContext';

export const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useTrackContext();

	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('TrackDetail', { _id: item._id })
							}>
							<ListItem>
								<ListItem.Content>
									<ListItem.Title>{item.name}</ListItem.Title>
								</ListItem.Content>
								<ListItem.Chevron />
							</ListItem>
						</TouchableOpacity>
					);
				}}
			/>
		</>
	);
};

TrackListScreen.navigationOptions = {
	title: 'Tracks',
};

const styles = StyleSheet.create({});
