import './App.css';
import { Buttongroup } from './Buttongroup';
import { Navbar } from './Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Buttongroup />
			<div className="d-flex py-2 border border-dark  text-break">
				<p>DATA</p>
			</div>
		</div>
	);
}

export default App;
