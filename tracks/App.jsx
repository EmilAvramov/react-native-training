import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { AccountScreen } from './src/screens/AccountScreen';
import { SigninScreen } from './src/screens/SigninScreen';
import { SignupScreen } from './src/screens/SignupScreen';
import { TrackCreateScreen } from './src/screens/TrackCreateScreen';
import { TrackDetailScreen } from './src/screens/TrackDetailScreen';
import { TrackListScreen } from './src/screens/TrackListScreen';

import { DataProvider as AuthProvider } from './src/context/authContext';
import { DataProvider as LocationProvider } from './src/context/locationContext';
import { DataProvider as TrackProvider } from './src/context/trackContext';

import { setNavigator } from './src/navigationRef';
import { ResolveAuthScreen } from './src/screens/ResolveAuthScreen';
import { FontAwesome } from '@expo/vector-icons';

const tracklistFlow = createStackNavigator({
	TrackList: TrackListScreen,
	TrackDetail: TrackDetailScreen,
});

tracklistFlow.navigationOptions = {
	title: 'Tracks',
	tabBarIcon: (
		<FontAwesome
			name='th-list'
			size={24}
		/>
	),
};

const switchNavigator = createSwitchNavigator({
	loadingFlow: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen,
	}),
	mainFlow: createMaterialBottomTabNavigator({
		trackListFlow: tracklistFlow,
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<AuthProvider>
			<LocationProvider>
				<TrackProvider>
					<App ref={(navigator) => setNavigator(navigator)} />
				</TrackProvider>
			</LocationProvider>
		</AuthProvider>
	);
};
