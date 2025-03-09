import { FaStar, FaRegStar, FaStarHalfAlt} from "react-icons/fa"

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Joshua",
      rating: 4,
      comment: "Decadent, delicious dessert - the perfect ending to a great meal.",
    },
    {
      id: 2,
      name: "Sasha",
      rating: 5,
      comment: "The pasta dish was flavorful and hearty, and the service was excellent.",
    },
    {
      id: 3,
      name: "Robin",
      rating: 4,
      comment: "The sushi was fresh and flavorful, and the presentation was beautiful.",
    },
    {
      id: 4,
      name: "Natasha",
      rating: 3,
      comment: "The pizza was delicious, with just the right amount of cheese and toppings.",
    },
  ]

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star" />)
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="star" />)
      } else {
        stars.push(<FaRegStar key={i} className="star" />)
      }
    }
    return stars
  }

  return (
    <section className="reviews section__padding">
      <h1>Valuable Customer Reviews</h1>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="grp-1">
              <div className="stars">{renderStars(review.rating)}</div>
              <div className="reviewer">
                <img src="Images/icon-4.svg" alt="review-icon"/>
                <span>{review.name}</span>
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews

