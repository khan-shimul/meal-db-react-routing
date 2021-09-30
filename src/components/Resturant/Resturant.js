import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Resturant = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([])

    const handleSearch = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])



    return (
        <div>
            <InputGroup className="mb-3 container d-flex mx-auto mt-2">
                <FormControl
                    onChange={handleSearch}
                    placeholder="Fish"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

            {
                meals ?
                    <div className="overflow-hidden container">
                        <Row xs={1} md={3} className="g-4">
                            {
                                meals.map(meal => <Meal
                                    key={meal.idMeal}
                                    meal={meal}
                                />)
                            }
                        </Row>
                    </div>
                    :
                    <div className="container">
                        <h2>oops! We cant any result</h2>
                    </div>
            }

        </div>
    );
};

export default Resturant;