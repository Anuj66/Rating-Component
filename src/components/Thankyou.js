import './Thankyou.css'
import thankYou from "../images/illustration-thank-you.svg"

const Thankyou = (props) => {
    return (
        <div className={'main-body'}>
            <div className={'main-card thankYou-card'}>
                <div className={'thankYou-image-div'}>
                    <img className={'thankYou-image'} src={thankYou} alt="Thank You Image"/>
                </div>
                <div className={'thankYou-rating-div'}>
                    <span className={'thankYou-rating-span'}>
                        You selected {props.rating} out of 5
                    </span>
                </div>
                <div className={"thankYou-template"}>
                    <h3 className={"template-header thankYou-template-header"}>Thank You!</h3>
                    <p className={"template-paragraph"}>
                        We appreciate you taking the time to give a rating. If you ever need more support,
                        don’t hesitate to get in touch!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Thankyou