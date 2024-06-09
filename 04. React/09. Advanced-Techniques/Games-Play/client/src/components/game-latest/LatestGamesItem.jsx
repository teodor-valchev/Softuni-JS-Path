import { Link } from "react-router-dom";
import Path from "../../paths";

const LatestGamesItem = ({ image, title, _id }) => {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={image} />
            </div>
            <h3>{title}</h3>
            <div className="rating">
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
                <span>☆</span>
            </div>
            <div className="data-buttons">
                <Link to={Path.Details.replace(':gameId', _id)} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default LatestGamesItem;
