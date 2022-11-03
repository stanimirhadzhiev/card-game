import './Card.css';

export const Card = ({card, hanleChoice, flipped, disabled}) =>{
    const handleClick = () => {
        if (!disabled) {
            hanleChoice(card)
        }
    }
    return(
        <div className='card'  >
            <div className={flipped ? "flipped" : ""}>
                <div className='front'><img src={card.src} alt='Loading..'/></div>
                <div className='back'><img src='img/card-back.png' alt='Loading..' onClick={handleClick}/></div>
            </div>
        </div>
    );
};
