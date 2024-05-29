import { React } from 'react';
const SelectBox = ({ data: { action, list }}) =>
	<select
		onChange={ (e) => action(e.target.value) }
	>
		{ list.map((newValue, index) =>
			<option
				key={ index }
				value={ newValue }
			>
				{ newValue }
			</option>) }
	</select>
			;

export default SelectBox;
