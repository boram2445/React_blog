import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import './css/reset.css';
import './css/global.css';
import PostPage from './pages/PostPage';
import {Routes, Route} from 'react-router-dom';
import data from './asset/data.json';
import { useState } from 'react';

function App() {
	return (<>
		<Navbar/>
		<Routes>
			<Route path='/' element={<Home data={data}/>}/>
			<Route path='/post/:id' element={<PostPage data={data}/>}/>
			<Route path='*' element={<h1>잘못된 경로입니다</h1>}></Route>
		</Routes>
		<Footer/>
	</>);
}

export default App;
