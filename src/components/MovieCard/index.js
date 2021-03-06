import React from 'react';
import styles from './MovieCard.module.css';
import Card from 'react-bootstrap/Card';


const imageUrl = 'https://image.tmdb.org/t/p/original/'

function MovieCard(props){
    return (
        <div className={styles.Card}>
           <Card className="bg-dark text-white">
            <Card.Img src={`${imageUrl}${props.movie.poster_path}`} alt="Card image" />
            {/* 
            <Card.ImgOverlay>
                <Card.Title>{props.movie?.name || props.movie.original_title || props.movie?.original_name}</Card.Title>
                <Card.Text>
                {props.movie.overview}
                </Card.Text>
                <Card.Text>Rating: {props.movie.vote_average}</Card.Text>
            </Card.ImgOverlay>
            */}
            </Card>
        </div>
    )
}

export default MovieCard;