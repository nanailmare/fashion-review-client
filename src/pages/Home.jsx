
import React from "react";
import ReviewForm from "../components/ReviewForm";

const Home = () => {
  const token = localStorage.getItem("token");

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome to Fashion Review App</h2>
      <ReviewForm token={token} />
      <p>Use the search bar above to find items and read reviews.</p>
    </div>
  );
};

export default Home;
