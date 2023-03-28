import { Link } from 'react-router-dom'
import styles from './index.module.scss'

export default function CardMovie({ movie }) {
    return (
        <div className={styles.card}>
            <div className={styles.card__img}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className={styles.card__description}>
                <h3>{movie.title}</h3>
                
                <div className={styles.card__description_sub}>
                    <h5>{`Popularidade: ${movie.popularity}`}</h5>
                    <p>{`Estrelas: ${movie.vote_average}`}</p>
                    <Link to={`detalhamento/${movie.id}`} className={styles.card__description__button}>Saiba Mais</Link>
                </div>
            </div>
        </div>
    )
}
