import React, {useState} from 'react'
import './App.css'

//components
import Genre from './components/Genre/Genre'
import Header from './components/Header/Header'

//data
import data  from './data/data'



function App() {
	//state
	const [games, setGames] = useState(data());
	const [currentGenre, setCurrentGenre] = useState("All");
	const changeFilter = (newFilter) => {
		setCurrentGenre(newFilter);
	}
	const filteredGames = games.filter((game) => {
		switch (currentGenre) {
			case "All":
				return true
			case "Action":
			case "Action-RPG":
			case "Survival":
			case "Shooter":
			case "Adventure":
			case "Multiplayer":
				return game.genre === currentGenre
			default:
				return true
		}
	})
	// console.log(games);
	return(
		<div className='flex'>
			<Header />
			<div className='container'>
				<Genre currentGenre={currentGenre} changeFilter={changeFilter} filteredGames={filteredGames}/>
			</div>
		</div>
	)
}

export default App;