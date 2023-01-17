import React, { useEffect, useState } from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },1500)
    },[])

    return<>
        {
            isLoading?
            <div className='cards'>
                <SkeletonTheme baseColor='#090909' highlightColor='#444'>
                    <Skeleton height={450} duration={2}/>
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className='cards'>
                    <img className='cards__img' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
                
                    <div className='cards__overlay'>
                        <div className='card__title'>{movie?movie.original_title:""}</div>
                        <div className='card__runtime'>
                            {movie ? movie.release_date : ""}
                            <span className='card__rating'>
                                {movie ? movie.vote_average : ""}
                                <i className='fa fa-star'></i>
                            </span>
                        </div>
                        <div className='card__description'>{movie ? movie.overview.slice(0,118)+"...": ""}</div>
                    </div>
                </div>
            </Link>
        }
        </>
    
}

export default Card;