import "../assets/movie.scss";
import { useState } from "react";

function MovieView(props) {
    let [like, setLike] = useState(0);

    function onLike() {
        setLike(oldValue => oldValue + 1)
    }

    const movie = props.moviesData;
    movie.plot = "";
    const heading = props.headingText;
    return (
        <>
            
            <div className="container">
                <div className="cellphone-container">
                    <div className="header">{heading}</div>
                    <div className="movie">
                        <div className="menu">
                            <i className="material-icons"></i>
                        </div>
                        <div className="movie-img"></div>
                        <div className="text-movie-cont">
                            <div className="mr-grid">
                                <div className="col1">
                                    <h1>{movie.title}</h1>
                                    <ul className="movie-gen">
                                        <li>PG-13 /</li>
                                        <li>2h 49min /</li>
                                        <li>{movie.genres.join(", ")}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid summary-row">
                                <div className="col2">
                                    <h5>SUMMARY</h5>
                                </div>
                                <div className="col2">
                                    <ul className="movie-likes">
                                        <li>
                                            <i className="material-icons">
                                                &#xE813;
                                            </i>
                                            124
                                        </li>
                                        <li>
                                            <i className="material-icons">
                                                &#xE813;
                                            </i>
                                            3
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-grid">
                                <div className="col1">
                                    <p className="movie-description">
                                        {movie.plot ? movie.plot : "No plot"}
                                    </p>
                                </div>
                            </div>
                            <div className="mr-grid actors-row">
                                <div className="col1">
                                    <p className="movie-actors">
                                        {movie.actors}
                                    </p>
                                </div>
                            </div>
                            <div className="mr-grid action-row">
                                <div className="col2">
                                    <button onClick={onLike} type="button" className="watch-btn">
                                        <h3>
                                            Like
                                        </h3>
                                    </button>
                                    <p className="likes">Likes:{like === 0 ? 'There are no likes' : like}</p>
                                </div>
                                <div className="col6 action-btn">
                                    <i className="material-icons">&#xE161;</i>
                                </div>
                                <div className="col6 action-btn">
                                    <i className="material-icons">&#xE866;</i>
                                </div>
                                <div className="col6 action-btn">
                                    <i className="material-icons">&#xE80D;</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://dribbble.com/geehm" target="_blank">
                <img
                    className="dribbble-link"
                    src="https://image.flaticon.com/icons/png/512/124/124037.png"
                />
            </a>
        </>
    );
}

export default MovieView;
