import Container from 'react-bootstrap/Container';

import styles from './Start.module.css';
import { Link } from 'react-router-dom';


export const Start = ({shuffleCards}) => {
    
    return (
        <Container fluid>
            <div className={styles.main}>
                <div className={styles.mainPosition}>
                    <button className={styles.startBtn} onClick = {shuffleCards}>
                        <Link className={styles.link} to="/game-play" >
                            START GAME
                        </Link>
                    </button>
                </div>
            </div>
        </Container>
    );
};
