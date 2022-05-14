import "./Rating.css";
import iconStar from "../images/icon-star.svg";
import { useEffect, useState } from "react";
import RatingCard from "./RatingCard";

const Rating = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  return (
    <>
      <div className="image-star">
        <img src={iconStar} alt="" />
      </div>
      <div className="template">
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="ratingCard-div">
        <RatingCard num="1" setRating={setRating} />
        <RatingCard num="2" setRating={setRating} />
        <RatingCard num="3" setRating={setRating} />
        <RatingCard num="4" setRating={setRating} />
        <RatingCard num="5" setRating={setRating} />
      </div>
      <div className="submitBtn-div">
        <button className="submitBtn">Submit</button>
      </div>
    </>
  );
};

export default Rating;
