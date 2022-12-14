import React, { useState } from "react";
import "./MovieSection.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import axios from "axios";

const MovieSection = () => {
	const [movieData, setMoviedata] = useState({});
	const entries = Object.entries(movieData);

	useEffect(() => {
		axios
			.get("https://api.themoviedb.org/3/movie/popular?api_key=23942a5fde32780928ffa5dfd8a92f2d")
			.then((res) => {
				setMoviedata(res.data);
				console.log(res);
			})
			.catch((err) => console.log(err.message));
	}, []);

	return (
		<div className="container-fluid">
			<div className="container">
				{Object.entries(movieData).length ? (
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movieData.results[1].poster_path}`} />
						<Card.Body>
							<Card.Title>{movieData.original_title}</Card.Title>
							<Card.Text>1</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				) : null}
			</div>
		</div>
	);
};

export default MovieSection;
