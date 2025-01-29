import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useGetServiceReviews = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [oneStar, setOneStar] = useState([]);
  const [twoStar, setTwoStar] = useState([]);
  const [threeStar, setThreeStar] = useState([]);
  const [fourStar, setFourStar] = useState([]);
  const [fiveStar, setFiveStar] = useState([]);
  const [avg, setAvg] = useState(0);

  const getServiceReviews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_rating`, {
        params: { service_id: id },
      });
      const data = res.data;
      setReviews(data.Ratings);
      const one = data.Ratings.filter((x) => x.rating === 1);
      const two = data.Ratings.filter((x) => x.rating === 2);
      const three = data.Ratings.filter((x) => x.rating === 3);
      const four = data.Ratings.filter((x) => x.rating === 4);
      const five = data.Ratings.filter((x) => x.rating === 5);
      setOneStar(one);
      setTwoStar(two);
      setThreeStar(three);
      setFourStar(four);
      setFiveStar(five);
      const total = data.Ratings.reduce((acc, x) => {
        return acc + x.rating;
      }, 0);
      const avgRatings = total / data.Ratings.length;
      setAvg(avgRatings);
    } catch (err) {
      // toast.error(
      //   err?.response?.data?.msg || err?.error || "something went wrong"
      // );
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getServiceReviews();
  }, []);

  const refetch = () => {
    getServiceReviews();
  };

  return {
    loading,
    reviews,
    oneStar,
    twoStar,
    threeStar,
    fourStar,
    fiveStar,
    avg,
    refetch,
  };
};

export default useGetServiceReviews;
