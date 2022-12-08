import React, { useState } from "react";
import "./MovieSection.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import axios from "axios";

const MovieSection = () => {
  const [movieData, setMoviedata] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/2?api_key=23942a5fde32780928ffa5dfd8a92f2d"
      )
      .then((res) => {
        setMoviedata(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container-fluid">
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={movieData.poster_path} />
          <Card.Body>
            <Card.Title>{movieData.original_title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MovieSection;
