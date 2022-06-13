import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './css/reset.css';
import './css/global.css';
import Post from './pages/Post';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
	return (<>
		<Navbar/>
		<Routes>
			<Route path='/' element={<Home/>}></Route>
			<Route path='/post' element={<Post/>}></Route>
			<Route path='*' element={<h1>잘못된 경로입니다</h1>}></Route>
		</Routes>
		<Footer/>
	</>);
}

export default App;
