import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from './src/screens/SearchScreen';
import { TileScreen } from './src/screens/TileScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerTitle: 'Business Search' }}>
				<Stack.Screen
					name='Search'
					component={SearchScreen}
				/>
				<Stack.Screen
					name='Tile'
					component={TileScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
