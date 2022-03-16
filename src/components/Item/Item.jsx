import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Item.css'


function Item({ producto, stock, img, id }) {


    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img className='zapatillaFoto' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{producto}</Card.Title>
                <Card.Text>
                    Stock: {stock}
                </Card.Text>
                <Link to={`detalle/${id}`}>
                    <Button variant="primary"> Más detalles </Button>
                </Link>
                
            </Card.Body>
        </Card>
    );
}

export default Item