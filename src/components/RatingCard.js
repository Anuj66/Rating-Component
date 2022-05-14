import './RatingCard.css'
import {useState} from "react";

const RatingCard = (props) => {

    const [isSelected, setIsSelected] = useState(false)

    const onClickHandler = () => {
        props.setRating(+props.num)
        setIsSelected(() => !isSelected)
    }

    return (
        <>
            <button className={`ratingBtn btn ${isSelected ? 'selectedBtn' : 'regularBtn'}`} onClick={onClickHandler}>
                {props.num}
            </button>
        </>
    )
}

export default RatingCard