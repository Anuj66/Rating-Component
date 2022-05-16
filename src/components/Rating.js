import "./Rating.css";
import iconStar from "../images/icon-star.svg";
import {useEffect, useState} from "react";
import RatingCard from "./RatingCard";
import { useNavigate } from 'react-router-dom'

const Rating = (props) => {

    const {rating, setRating} = props
    const navigate = useNavigate()

    useEffect(() => {

    }, [rating])

    const onSubmitHandler = () => {
        navigate('/thankyou')
    }

    return (
        <div className={'main-body'}>
            <div className={'main-card'}>
                <div className="image-star">
                    <button className={'starBtn btn'}>
                        <img src={iconStar} alt=""/>
                    </button>
                </div>
                <div className="template">
                    <h3 className={'template-header'}>How did we do?</h3>
                    <p className={'template-paragraph'}>
                        Please let us know how we did with your support request. All feedback
                        is appreciated to help us improve our offering!
                    </p>
                </div>
                <div className="ratingCard-div">
                    <RatingCard
                        num="1"
                        setRating={setRating}
                        rating={rating}/>
                    <RatingCard
                        num="2"
                        setRating={setRating}
                        rating={rating}/>
                    <RatingCard
                        num="3"
                        setRating={setRating}
                        rating={rating}/>
                    <RatingCard
                        num="4"
                        setRating={setRating}
                        rating={rating}/>
                    <RatingCard
                        num="5"
                        setRating={setRating}
                        rating={rating}/>
                </div>
                <div className="submitBtn-div" onClick={onSubmitHandler}>
                    <button className="submitBtn btn" onClick={onSubmitHandler}>SUBMIT</button>
                </div>
            </div>
        </div>

    );
};

export default Rating;
