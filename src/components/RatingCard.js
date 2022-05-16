import './RatingCard.css'
import {useState} from "react";

const RatingCard = (props) => {

    const onClickHandler = () => {
        if(props.rating !== +props.num){
            props.setRating(+props.num)
        }else{
            props.setRating(0)
        }

    }

    return (
        <>
            <button className={`ratingBtn btn ${props.rating === +props.num ? 'selectedBtn' : 'regularBtn'}`} onClick={onClickHandler}>
                {props.num}
            </button>
        </>
    )
}

export default RatingCard