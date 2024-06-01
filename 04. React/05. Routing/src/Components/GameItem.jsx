import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const GameItem = ({ id, thumbnail, short_description }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                width: "400px",
                flexWrap: 'nowrap'
            }}
        >
            <Card
                style={{
                    width: "20rem",
                }}
            >
                <Card.Img variant="top" src={thumbnail} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>{short_description}</Card.Text>
                    <Button as={Link} to={`/details/${id}`} variant="variant">
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GameItem;
