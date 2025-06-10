import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetProductReview = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [oneStar, setOneStar] = useState([]);
  const [twoStar, setTwoStar] = useState([]);
  const [threeStar, setThreeStar] = useState([]);
  const [fourStar, setFourStar] = useState([]);
  const [fiveStar, setFiveStar] = useState([]);
  const [avg, setAvg] = useState(0);

  const getReviews = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/view_review/${id}/`, {
        withCredentials: true,
      });
      const data = response.data;
      setReviews(data.reviews);
      const one = data.reviews.filter((x) => x.rating === 1);
      const two = data.reviews.filter((x) => x.rating === 2);
      const three = data.reviews.filter((x) => x.rating === 3);
      const four = data.reviews.filter((x) => x.rating === 4);
      const five = data.reviews.filter((x) => x.rating === 5);
      setOneStar(one);
      setTwoStar(two);
      setThreeStar(three);
      setFourStar(four);
      setFiveStar(five);
      const total = data.reviews.reduce((acc, x) => {
        return acc + x.rating;
      }, 0);
      const avgRatings = total / data.reviews.length;
      setAvg(avgRatings);
    } catch (error) {
      console.log(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          err ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getReviews();
  }, []);

  const refetch = () => {
    getReviews();
  };

  return {
    refetch,
    loading,
    reviews,
    oneStar,
    twoStar,
    threeStar,
    fourStar,
    fiveStar,
    avg,
  };
};

export default useGetProductReview;
