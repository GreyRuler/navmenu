import './App.css'
import './assets/css/google-icons.css'
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';

function App() {
	return (
		<>
			<Menu />
			<div className="page">
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/drift" element={<DriftPage/>}/>
					<Route path="/timeattack" element={<TimeAttackPage/>}/>
					<Route path="/forza" element={<ForzaPage/>}/>
				</Routes>
			</div>
		</>
	);
}

export default App;
