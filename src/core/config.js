/* eslint-disable no-mixed-spaces-and-tabs */
const config = {
	countStart: 0,
	increment: 1,
	shapeStyles: {
		circle: {
			height: '10vh',
			width: '10vh',
			borderRadius: '50%',
		},
		rectangle: {
			height: '20vh',
			width: '30vw',
		},
		square: {
			height: '30vh',
			width: '30vw',
		},
	},
	shapes: ['square', 'rectangle', 'circle'],
	colorStyles: {
		red: { backgroundColor: 'red' },
		blue: { backgroundColor: 'blue' },
		green: { backgroundColor: 'green' },
	},
	colors: ['red', 'blue', 'green'],
	 sizeStyles: {
		small: { transform: 'scale(0.1)' },
		medium: { transform: 'scale(0.3)' },
		large: { transform: 'scale(1)' },
	 },
	 sizes: ['small', 'medium', 'large'],

};

export default config;
