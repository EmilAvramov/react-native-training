import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationEvents, withNavigationFocus } from 'react-navigation';
import { Map } from '../components/Map';
import { useDataContext as useLocationContext } from '../context/locationContext';
import { TrackForm } from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';

import '../_mockLocation';
import { useLocation } from '../hooks/useLocation';

const TrackCreateScreenS = ({ isFocused }) => {
	const {
		state: { recording },
		addLocation,
	} = useLocationContext();
	const { err } = useLocation(
		isFocused || recording,
		useCallback((location) => addLocation(location, recording), [recording])
	);

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text h3>Create a track</Text>
			<Map />
			<NavigationEvents onWillBlur={() => {}} />
			{err && <Text>{err}</Text>}
			<TrackForm />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

TrackCreateScreenS.navigationOptions = {
	title: 'Add Track',
	tabBarIcon: (
		<FontAwesome
			name='plus'
			size={24}
		/>
	),
};

export const TrackCreateScreen = withNavigationFocus(TrackCreateScreenS);
