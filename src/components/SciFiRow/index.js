import { getSciFi } from '../../services/net-api';
import MovieCard from '../../components/MovieCard';
import styles from '../../components/MovieRow/MovieRow.module.css';
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';


function SciFiRow(props) {

    const [movieData, setMovieData ] = useState({
        page: 1,
        results: []
    });


  async function getMovieData(){
    const data = await getSciFi();
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
                  <Col md={2} key={idx}>
                    <Link  to={`/movie/${movie.id}`}>
                        <MovieCard movie={movie} />
                    </Link>
                  </Col>
                ))}
        </Row>
        
    </>
  )

}

export default SciFiRow;