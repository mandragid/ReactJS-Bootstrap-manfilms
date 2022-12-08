import React, { useState } from "react";
import "./MovieSection.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import axios from "axios";

const MovieSection = () => {
  const [movieData, setMoviedata] = useState([]);
  const entries = Object.entries(movieData);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=23942a5fde32780928ffa5dfd8a92f2d"
      )
      .then((res) => {
        setMoviedata(res.data.results);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="container-fluid d-flex">
      <div className="container">
        {Object.entries(movieData).length
          ? movieData.map((item) => (
              <div className="row">
                <div className="col-6">
                  {" "}
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{item.original_title}</Card.Title>
                      <Card.Text>{item.overview}</Card.Text>
                      <Button variant="primary">Detail</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default MovieSection;
