import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
	return {
		timestamp: new Date().getTime(),
		coords: {
			speed: 0.0714036300778389,
			heading: 0,
			accuracy: 5,
			altitudeAccuracy: 5,
			altitude: 0,
			longitude: -122.0312186 + increment * tenMetersWithDegrees,
			latitude: 37.33233141 + increment * tenMetersWithDegrees,
		},
	};
};

let counter = 0;

setInterval(() => {
	Location.EventEmitter.emit('Expo.locationChanged', {
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter),
	});
	counter++;
}, 1000);
