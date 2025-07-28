
const Feedback = ({ feedbackDa }) => {
    const {
        feedback,
        location,
        name,
        photo,
        rating
    } = feedbackDa;
    console.log(feedbackDa);
    return (
        <div className="card bg-blue-800 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    alt="Photo"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p>{name}</p>
                <p>{location}</p>
                <h2 className="card-title">Feedback</h2>
                <p>{feedback}</p>
                <div>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
                        {/* <p>{rating}</p> */}
                    </div>
                </div>
                {/* <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default Feedback;
