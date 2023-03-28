import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieService } from '../../api/MovieService'
import styles from './index.module.scss'


export default function Details() {

    const params = useParams()

    const [movie, setMovie] = useState({})
    const [genres, setGenres] = useState([])

    async function getMovieDetails(id) {

        const { data: data } = await MovieService.getMovieDetails(id)

        setMovie(data)
        setGenres(data.genres)

    }

    useEffect(() => {
        getMovieDetails(params.id)
    })

    return (
        <div className={styles.movie}>
            <div className={styles.movie__back}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
            </div>
            <div className={styles.movie__description}>
                <h1>{movie.title}</h1>

                <h3>Genres</h3>
                {genres.map((genre, index) => index + 1 !== genres.length ? <p key={genre.id}>{genre.name},</p> : <p key={genre.id}>{genre.name}.</p>)}

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
