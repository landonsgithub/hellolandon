import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Salmon Avocado Roll',
      description: 'Finest fish and tropical yums',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Spicy Tuna Roll',
      description: 'Suburb cuts of fatty Tuna',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Poke Bowl',
      description: 'Best in town, absolutely',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Jin Jin\'s Sake',
      description: 'Award winning',
      price: 18.99,
    },
  ];

function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem 
            id={meal.id}
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price}
        /> 
    ));

    return (
        <section className={classes.meals}>
            <Card>
               <ul>{mealsList}</ul> 
            </Card>
        </section>


    );
}

export default  AvailableMeals;