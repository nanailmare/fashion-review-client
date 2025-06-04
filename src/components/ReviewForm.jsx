
import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ token }) => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/reviews",
        { image, caption },
        { headers: { Authorization: "Bearer " + token } }
      );
      alert("Review posted successfully!");
      setImage("");
      setCaption("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to post review.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h3>Post a Review</h3>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      /><br /><br />
      <textarea
        placeholder="Your review..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
      /><br /><br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
