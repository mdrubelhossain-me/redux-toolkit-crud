import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" style={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    textAlign: "center",
  },
  heading: {
    fontSize: "6rem",
    color: "#343a40",
    margin: "0",
  },
  message: {
    fontSize: "1.5rem",
    color: "#6c757d",
    margin: "1rem 0",
  },
  link: {
    fontSize: "1.2rem",
    color: "#007bff",
    textDecoration: "none",
    marginTop: "1rem",
  },
};

export default NotFound;
