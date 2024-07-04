import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import HomeNavbar from "../../Components/Navbar";
// import Rating from "react-rating-stars-component";
import "./SinglePlaylist.css";
import ReviewForm from "./ReviewForm";

const SinglePlaylist = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const imageSrc = queryParams.get("imageSrc");

  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({ name: "", review: "" });
  // const [reviewData, setReviewData] = useState({ name: '', review: '', rating });

  useEffect(() => {
    if (!imageSrc) {
      navigate("/");
    } else {
      fetchReviews();
    }
  }, [imageSrc, navigate]);

  const fetchReviews = async () => {
    try {
      // api endpoint must be /api/reviews of backend database
      const response = await fetch("/api/reviews");
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setReviewData({ ...reviewData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/reviews', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...reviewData, rating }),
  //     });
  //     if (response.ok) {
  //       fetchReviews();
  //       setReviewData({ name: '', review: '' });
  //       setRating(0);
  //     }
  //   } catch (error) {
  //     console.error('Error submitting review:', error);
  //   }
  // };

  if (!imageSrc) {
    return null;
  }

  return (
    <>
      <HomeNavbar />
      <Container className="mt-4 container-padding">
        <Row>
          <Col md={6}>
            <img
              src={decodeURIComponent(imageSrc)}
              className="img-fluid"
              alt="Detail"
            />
          </Col>
          <Col md={6}>
            <ReviewForm
              rating={rating}
              setRating={setRating}
              reviews={reviews}
              setReviews={setReviews}
              reviewData={reviewData}
              setReviewData={setReviewData}
              bookId={imageSrc}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SinglePlaylist;
