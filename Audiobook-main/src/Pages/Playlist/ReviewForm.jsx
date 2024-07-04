import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Rating from "react-rating-stars-component";
import "./ReviewForm.css";
const ReviewForm = ({
  bookId,
  rating,
  setRating,
  reviews,
  setReviews,
  reviewData,
  setReviewData,
}) => {
  //   const [reviewData, setReviewData] = useState({ name: '', review: '' });
  //   const [rating, setRating] = useState(0);
  //   const [reviews, setReviews] = useState([]);

  //   this will access data from the local storage
  useEffect(() => {
    const storedReviews =
      JSON.parse(localStorage.getItem(`reviews_${bookId}`)) || [];
    setReviews(storedReviews);
  }, [bookId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = { ...reviewData, rating, date: new Date().toISOString() };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${bookId}`, JSON.stringify(updatedReviews));

    setReviewData({ name: "", review: "" });
    setRating(0);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h3>Leave a Review</h3>
        <Form.Group controlId="review">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            name="name"
            as="textarea"
            rows={1}
            value={reviewData.name}
            onChange={handleInputChange}
          />
          <Form.Label className="rating-label">Rating:</Form.Label>
          <div className="star-rating">
            <Rating
              count={5}
              size={24}
              activeColor="#ffd700"
              value={rating}
              onChange={handleRatingChange}
            />
          </div>
          <Form.Label>Review:</Form.Label>
          <Form.Control
            name="review"
            as="textarea"
            rows={5}
            value={reviewData.review}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
      <h3 className="reviews">Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <h4>{review.name}</h4>
            <p>
              Rating:{" "}
              <Rating
                count={5}
                size={24}
                activeColor="#ffd700"
                value={review.rating}
                edit={false}
              />
            </p>
            <p>{review.review}</p>
            <small>{new Date(review.date).toLocaleDateString()}</small>
            <hr />
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewForm;
