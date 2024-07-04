import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HomeNavbar from '../../Components/Navbar';
import Rating from 'react-rating-stars-component';
import './SinglePlaylist.css'; 

const SinglePlaylist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const imageSrc = queryParams.get('imageSrc');
  
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({ name: '', review: '' });
  // const [reviewData, setReviewData] = useState({ name: '', review: '', rating });

  useEffect(() => {
    if (!imageSrc) {
      navigate('/');
    } else {
      fetchReviews();
    }
  }, [imageSrc, navigate]);

  const fetchReviews = async () => {
    try {
      // api endpoint must be /api/reviews of backend database
      const response = await fetch('/api/reviews'); 
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...reviewData, rating }),
      });
      if (response.ok) {
        fetchReviews(); 
        setReviewData({ name: '', review: '' });
        setRating(0);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!imageSrc) {
    return null; 
  }

  return (
    <>
      <HomeNavbar />
      <Container className="mt-4 container-padding">
        <Row>
          <Col md={6}>
            <img src={decodeURIComponent(imageSrc)} className="img-fluid" alt="Detail" />
          </Col>
          <Col md={6}>
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
            <section className="reviews mt-4">
              <h3>Reviews</h3>
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="review">
                    <h5>{review.name}</h5>
                    <div className="star-rating">
                      <Rating
                        count={5}
                        size={24}
                        value={review.rating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>{review.review}</p>
                  </div>
                ))
              ) : (
                <p>No reviews yet.</p>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SinglePlaylist;

