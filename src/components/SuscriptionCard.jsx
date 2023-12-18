import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SuscriptionCard({ image, level, text }) {
    return (
        <Card style={{ width: '18rem', backgroundColor: "#222" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{level}</Card.Title>
                <div className="module-border-wrap-sus">
                    <div className='module-sus'>
                        JOIN
                    </div>
                </div>
                <Card.Text>
                    {text}
                    <ul>
                        <li>Virtual high five and thanks for supporting the project ❤️</li>
                        <li>Digital downloads</li>
                        <li>Acceso a Discord</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SuscriptionCard;