import { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import styles from './GamePlay.module.css';

import { Card } from './Card';

export const GamePlay = ({cards, setCards, setTurns, turns, score, setScore }) => {
    
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    
    
    const navigate = useNavigate();

    // handle choise
    const hanleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    };

    useEffect(() => {
        if(choiceOne && choiceTwo){
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards =>{
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            setScore(prevScore => prevScore + 5)
                            return {...card, matched: true}
                        }else{
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                
                setTimeout(() => resetTurn(), 1000) 
            }
        }
    }, [choiceOne, choiceTwo] );
    
    // reset choices & increase turn
    const resetTurn = () =>{
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    };

    

    useEffect(() => {
        if(score === 90){
            navigate('/game-over');
        }
    }, [score])

    return (
            <Container fluid>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <div className={styles.results}>
                            <p className={styles.resultsText}>
                                <span> Score: </span>
                                <span> {score} </span>
                            <br/>
                                <span> Turns: </span>
                                <span> {turns} </span>
                            </p>
                        </div>

                        <div className={styles.restart} >
                            <Link to="/">
                                <img src='img/restart.png' alt='Loading..'></img>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.cardBox}>
                        <div className={styles.cardContainer}>
                            {cards.map(card =>(
                                <Card 
                                    card = {card} 
                                    key={card.id} 
                                    hanleChoice = {hanleChoice}
                                    flipped = {card === choiceOne || card === choiceTwo || card.matched}
                                    disabled = {disabled}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
    );
};
