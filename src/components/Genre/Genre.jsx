import styles from './Genre.module.css'
//state
const filterList = ['All', 'Action', 'Action-RPG', 'Adventure', 'Shooter', 'Multiplayer', 'Survival']

function Genre({filteredGames, currentGenre, changeFilter}) {
 
  const handleClick = (newFilter) => {
    changeFilter(newFilter)
  }
  
  return (
    <>
      <ul className={styles.tabs}>
        {filterList.map((f) => (
          <button key={f} onClick={() => handleClick(f)} className={currentGenre === f ? `${styles.active}` : ""}>{f}</button>
        ))}
      </ul>
      <div className={styles.games}>
        {filteredGames.map((game) => (
          <div className={styles.card} key={game.id}>
            <img src={game.background_image} className={styles.image}/>
            <h2 className={styles.name}>{game.name}</h2>
            <p className={styles.genre}>{game.genre}</p>
            <p className={styles.rating}>⭐ {game.rating}</p>
            <p className={styles.platform}>Availabe on: {game.platforms}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Genre