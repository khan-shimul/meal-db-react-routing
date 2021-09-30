import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const MealDetails = () => {
    const { mealdb } = useParams()
    const [meal, setMeal] = useState({})
    // console.log(meal)
    const { strMeal, strMealThumb, strInstructions } = meal

    const history = useHistory()

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data?.meals[0]))
    }, [])

    const handleBack = () => {
        history.push("/resturant")
    }
    return (
        <div>
            <h2>Meal Details of: {mealdb}</h2>
            {/* <h1>Meal Name: {strmeal}</h1> */}
            <Card className="w-50 d-flex mx-auto">
                <Card.Img className="h-75" variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions?.slice(0, 200)}
                    </Card.Text>
                    <Button onClick={handleBack} variant="primary">See All Meals</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetails;