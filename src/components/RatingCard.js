import './RatingCard.css'

const RatingCard = (props) => {

    const onClickHandler = () => {
        props.setRating(+props.num)
    }

    return (
        <>
            <button className='ratingBtn' onClick={onClickHandler}>
                {props.num}
            </button>
        </>
    )
}

export default RatingCard