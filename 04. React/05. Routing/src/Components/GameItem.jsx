import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const GameItem = ({ name, id }) => {
    return (
        <div
            style={{
                display: "flex",
                width: "400px",
                flexFlow: 'column wrap'
            }}
        >
            <Card
                style={{
                    width: "20rem",
                }}
            >
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>{name}</Card.Text>
                    <Button as={Link} to={`/details/${id}`} variant="primary">
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default GameItem;
