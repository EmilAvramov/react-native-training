import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { SearchScreen } from './src/screens/SearchScreen';
import { TileScreen } from './src/screens/TileScreen';

const navigator = createStackNavigator(
	{
		Search: SearchScreen,
		Tile: TileScreen
	},
	{
		initialRouteName: 'Search',
		defaultNavigationOptions: {
			title: 'Business Search',
		},
	}
);

export default createAppContainer(navigator);
