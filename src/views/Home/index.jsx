import { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie'
import { MovieService } from '../../api/MovieService'
import styles from './index.module.scss'

export default function Home({searchMovie}) {

    const [movies, setMovies] = useState([])

    async function getMovies() {
        const { data: {results} } = await MovieService.getMovies()

        setMovies(results)

    }

    async function getMoviesSeached(movieString){
        const {data: {results}}= await MovieService.searchMovies(movieString)
        
        setMovies(results)
    }

    useEffect(() => {
        getMovies()
    },[])

    useEffect(()=>{
        searchMovie? getMoviesSeached(searchMovie):getMovies()
    },[searchMovie])

    return (
        <section className={styles.movies} >

            {

                movies.map(movie => <CardMovie key={movie.id} movie={movie} />)

            }
        </section>
    )
}
