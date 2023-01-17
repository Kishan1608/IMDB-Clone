import React, { useEffect, useState } from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../component/movieList/movieList';

const Home = () => {
    const[popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=1cfdef5b9b692b18e625154c77e083c1")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[])
    return(
        <>
            <Carousel 
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map((movie, key) => (
                        <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
                            <div className='posterImage'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                            </div>
                            <div className='posterImage__overlay'>
                                <div className='posterImage__title'>{movie.original_title}</div>
                                <div className='posterImage__runtime'>
                                    {movie ? movie.release_date : ""}
                                    <span className='posterImage__rating'>
                                        {movie ? movie.vote_average : ""}
                                        <i className='fa fa-star'></i>
                                    </span>
                                </div>
                                <div className='posterImage__description'>{movie ? movie.overview: ""}</div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>

            <MovieList />
        </>
    )
}

export default Home;