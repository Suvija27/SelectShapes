import { React } from 'react';
import './App.scss';
import Shapes from './components/Shapes';

const App = (context) =>
	<div className="App">
		<Shapes { ...context }/>
	</div>;

export default App;
