import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import styles from './GameOver.module.css';



export const GameOver = ({turns, score}) => {
    return (
            <Container fluid>
                <div className={styles.main}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>GAME OVER</h1>
                        <p className={styles.finalScore}>Final score: {score}</p>
                        <p className={styles.finalScore}>Final turns: {turns}</p>
                        <div className={styles.buttonPosition}>
                            <div className={styles.startBtn}>
                                <Link to="/">TRY AGAIN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
    );
};
