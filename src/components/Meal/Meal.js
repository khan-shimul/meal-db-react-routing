import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Meal.css'

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal
    const history = useHistory();

    const handleClick = () => {
        history.push(`/meal/${idMeal}`)
    }
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="meal-img" variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 100)}
                        </Card.Text>
                        <div className="d-flex justify-content-center align-items-center">
                            <Link className="me-4" to={`/meal/${idMeal}`}>Details</Link>
                            <Link className="me-2" to={`/meal/${idMeal}`}>
                                <Button variant="danger">Details</Button>
                            </Link>
                            <Button onClick={handleClick} className="me-2" variant="primary">Details 2</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;