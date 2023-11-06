import { useDataContext as useTrackContext } from '../context/trackContext';
import { useDataContext as useLocationContext } from '../context/locationContext';
import { navigate } from '../navigationRef';

export default () => {
	const { createTrack } = useTrackContext();
	const {
		state: { name, locations },
		reset,
	} = useLocationContext();

	const saveTrack = async () => {
		await createTrack(name, locations);
		reset();
		navigate('TrackList');
	};

	return { saveTrack };
};
