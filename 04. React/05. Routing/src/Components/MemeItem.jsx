import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MemeItem = ({ id, name, url }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
            }}
        >
            <Card
                style={{
                    width: "20rem",
                }}
            >
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{name}</Card.Text>
                    <Button as={Link} to={`/details/${id}`} variant="variant">
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MemeItem;
