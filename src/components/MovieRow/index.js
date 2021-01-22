import { getMovieEndpoint } from '../../services/net-api';
import MovieCard from '../../components/MovieCard';
import Row from 'react-bootstrap/Row';
import styles from './MovieRow.module.css';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';


function MovieRow(props) {

    const [movieData, setMovieData ] = useState({
        page: 1,
        results: []
    });

  
  async function getMovieData(){
    const data = await getMovieEndpoint();
    setMovieData(data);
    console.log(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
      <>
        <Row className={styles.Row}>
            <h2>{props.title}</h2>
        </Row>
        <Row className={styles.MoviesRow}>
                {movieData.results.map((movie, idx) => (
                    <Col key={idx} md={2}>
                        <MovieCard  movie={movie}/>
                    </Col>
                ))}
        </Row>
    </>
  )

}

export default MovieRow;