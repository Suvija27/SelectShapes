import { React } from 'react';
import SelectBox from './SelectBox';
import { peek } from '@laufire/utils/debug';

const Shapes = (context) => {
	const {
		config: { shapeStyles, shapes, colors, sizeStyles, sizes },
		state: { shape, color, size },
		actions: { setShape, setColor, setSize },
	} = context;

	peek(shapes);
	return <div> <center>
		<div style={ {
			...shapeStyles[shape],
			backgroundColor: color,
			...sizeStyles[size],
		} }
		/>
		<SelectBox { ...{ data: { action: setShape, list: shapes }} }/>
		<SelectBox { ...{ data: { action: setColor, list: colors }} }/>
		<SelectBox { ...{ data: { action: setSize, list: sizes }} }/>
	</center>
	</div>;
};

export default Shapes;
