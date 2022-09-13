import React, {useState} from 'react'
import './App.css'

//components
import Genre from './components/Genre/Genre'
import Header from './components/Header/Header'

// social icons
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"
import twitter from "./assets/twitter.png"
import portfolio from "./assets/business.png"

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
			<footer>
				<div className="socials">
				<h3 id="foot-heading">Socials</h3>
				<p>You can connect with me here</p>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/hitesh-kumar09/" target="_blank"><img src={linkedin} alt="linkedin icon"/></a>
					</li>
					<li>
						<a href="https://twitter.com/hitesh091895" target="_blank"><img src={twitter} alt="twitter icon"/></a>
					</li>
					<li>
						<a href="https://github.com/kumarhites" target="_blank"><img src={github} alt="github icon"/></a>
					</li>
					<li>
						<a href="https://kumarhitesh.netlify.app/" target="_blank"><img src={portfolio} alt="portfolio"/></a>
					</li>
					</ul>
				</div>
			</footer>
		</div>
	)
}

export default App;