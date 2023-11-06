import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Spacer } from '../components/Spacer';
import { useDataContext as useAuthContext } from '../context/authContext';
import { FontAwesome } from '@expo/vector-icons';

export const AccountScreen = () => {
	const { signout } = useAuthContext();

	return (
		<SafeAreaView forceInset={{ top: 'always' }}>
			<Text style={styles.heading}>AccountScreen</Text>
			<Spacer>
				<Button
					title='Sign Out'
					onPress={signout}
				/>
			</Spacer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 24,
		textAlign: 'center',
	},
});

AccountScreen.navigationOptions = {
	title: 'Account',
	tabBarIcon: (
		<FontAwesome
			name='gear'
			size={24}
		/>
	),
};