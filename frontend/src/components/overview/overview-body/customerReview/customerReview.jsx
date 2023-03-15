import profileImg from "../../../../imgs/profile.jpg"

function CustomerReview({translate}) {
    return (
        <div className="customer-review" style={{translate}}>
            <div className="customer-review__header">
                <img src={profileImg} alt="" className="customer-review__img profile-img" />
            </div>
            <div className="customer-review__body">
                <h5 className="text-title">Emmanuel Alex</h5>
                <h6 className="text-title">Mpangaji</h6>
                <p className="text--muted text-small text--light">Inasaidia sana Kwene swala la kupata nyumba kwa haraka</p>
            </div>
        </div>
    )
}

export default CustomerReview   