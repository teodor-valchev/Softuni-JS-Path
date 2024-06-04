const GameListItem = ({
_id,
category,
image,
title
}) => {

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={image} />
                <h6>{title}</h6>
                <h2>{category}</h2>
                <a href="#" className="details-button">
                    Details
                </a>
            </div>
        </div>
    );
}

export default GameListItem