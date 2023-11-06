import React from 'react';
import { Button, Input } from 'react-native-elements';
import { Spacer } from './Spacer';
import { useDataContext as useLocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';

export const TrackForm = () => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useLocationContext();
	const { saveTrack } = useSaveTrack();

	return (
		<>
			<Spacer>
				<Input
					placeholder='Enter name'
					onChangeText={changeName}
					value={name}
				/>
			</Spacer>
			<Spacer>
				{recording ? (
					<Button
						title='Stop'
						onPress={stopRecording}
					/>
				) : (
					<Button
						title='Start Recording'
						onPress={startRecording}
					/>
				)}
			</Spacer>

			{!recording && locations.length ? (
				<Spacer>
					<Button
						title='Save Recording'
						onPress={saveTrack}
					/>
				</Spacer>
			) : null}
		</>
	);
};
