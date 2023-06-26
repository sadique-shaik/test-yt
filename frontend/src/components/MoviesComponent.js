import axios from "axios";
import { React, useEffect, useState } from "react"



const MoviesComponent = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:4017/get/movieslist')
			.then((res) => setMovies(res.data.movies)).catch((err) => { });

		// fetch('http://localhost:4017/get/movieslist')
		// .then(response => response.json())
		// .then(data => setMovies(data.movies));
	}, []);
	console.log("============movies===", movies);

	return (
		<div className=''>
			<h1>Movies List</h1>
			<div className="wrap-content">
					<div className="row ">
						{movies && movies.length > 0 && movies.map((item, i) => {
							return (
								<div className="col-sm-3">
									<div className=' card  m-2' key={i}>
										<div className="card-header">
											<h4 className="text-success">Name: {item.name}</h4>
										</div>
										<div className="card-body">
											<dl>
												<dt>Rating: {item.rating}</dt>
												<dd>Release Date: {item.release}</dd>
											</dl>
										</div>
									</div>
								</div>
							)
						})}
					</div>
			</div>
		</div>
	)
}

export default MoviesComponent;