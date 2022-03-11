import { Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'


function Item({ producto, stock,img }) {

    function onAdd(cantidad) {
        console.log(cantidad)
    }

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img className='zapatillaFoto' variant="top" src={img} />
            <Card.Body>
                <Card.Title>{producto}</Card.Title>
                <Card.Text>
                    Stock: {stock}
                </Card.Text>
                <Button variant="primary"> Más detalles </Button>
                <ItemCount  initial={1} stock={stock} producto={producto} onAdd={onAdd}/>
            </Card.Body>
        </Card>
    );
}

export default Item