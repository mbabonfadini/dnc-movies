import styles from './index.module.scss'

export default function Movie({ movie }) {
    return (
        <div className={styles.movie}>
            <div className={styles.movie__back}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
            </div>
            <div className={styles.movie__description}>
                <h1>{movie.title}</h1>
                <h3>Genero:</h3>
                {movie.genres.map((gender, index) => index + 1 !== movie.genres.length ? <p key={gender.id}>{gender.name}, </p> : <p key={gender.id}>{gender.name}</p>)}
                <h3>Sinopse</h3>
                <p>{movie.overview}</p>

                <div>
                    <div>
                        <h5>Total votos:</h5>
                        <p>{movie.vote_count}</p>
                    </div>
                    <div>
                        <h5>Média Votos:</h5>
                        <p>{movie.vote_average}</p>
                    </div>
                    <div>
                        <h5>Budget:</h5>
                        <p>{movie.budget}</p>
                    </div>
                    <div>
                        <h5>Popularidade:</h5>
                        <p>{movie.popularity}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
