import React from 'react';
import Pixel from './Pixel';
import PixelArray from './PixelArray';

// // const App = () => {
// return <div>{Pixel}</div>;
// // };

class App extends React.Component {
	render() {
		return (
			<>
				<h2 className="rainbow-text">Welcome to the Rainbow Parrot Page :</h2>
				<h3 className="rainbow-text">Come and unleash your creativity !</h3>
				<div className='pixelContainer'>
					<PixelArray />
				</div>
			</>
		);
	}
}

export default App;

//const App = () => {
/* https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f */
//    const filledArray = Array(10000).fill(<Pixel/>)
//    return filledArray
