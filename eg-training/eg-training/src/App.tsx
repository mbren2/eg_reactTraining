import React, { useEffect, useState } from "react";
import { getFoods, deleteFood } from "./api/foodsApi";
import { Input } from "./shared/input";
import { Select } from "./shared/select";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  reorderPoint: number;
  type: string;
};

export type NewFood = {
  name: string;
  quantity: number;
  reorderPoint: number;
  type: string;
};

const emptyFood: NewFood = {
  name: "",
  quantity:0,
  reorderPoint: 0,
  type: "",
}

//Exercise 2:
//  -Add 2 properties: reorderPoint (number), type (String)
//  -Display all of this in a table
export function App() {
  //Use this useState to deconstruct an array
  const [foods, setFoods] =  useState<Food[]>([]);
  //The long-hand version of the line above
  //const foodStateArray = useState<Food[]>([]);
  //const foods = foodStateArray[0];
  //const setFoods = foodStateArray[1];

  const [newFood, setNewFood] = useState<NewFood>(emptyFood);

  useEffect(() => {
    async function callGetFoods() {
      const data = await getFoods();
      setFoods(data);
    }
    callGetFoods();
    //using an empty array for useEffect since we only want this to run once 
  }, []);

  function renderFoods() {
    {
      /* Excercise1: Display quantity next to food with dash in between*/
    }
    return foods.map((food) => (
      <li>
        {food.name} - {food.quantity} - {food.reorderPoint} - {food.type}
      </li>
    ));
  }

  function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    //How do we create a new object that contains one updated property?
    //You can create a const, then pass that into setNewFood()
    //const _newFood = {
    //  ...newFood,
    //  name: value,
    //}
    //setNewFood(_newFood);
    //Or, you can call the above within the setNewFood() call here, 
    setNewFood({
      ...newFood,
      name: value,
    });
  }

  return (
    //Use this empty tag (opposed to using a div) to give these elements a parent element
    //Without the empty tag or div here, we get an error bc h1 and ul need a parent tag
    <>
      <h1>Pantry Manager</h1>

      {/* Day 2|Exercise 1: Create a reusable select and consume it below for food type.
          1. Vegetable
          2. Grain 
          3. Fruit      

              id:string;
    label:string;
    options:SelectOption[];
      */}

      <form>
        <Input 
          onChange={onNameChange} 
          id="name" 
          label="Name" 
          value={newFood.name}
        />
        <Input 
          onChange={onNameChange} 
          id="quantity" 
          label="Quantity" 
          value={newFood.quantity.toString()}
        />
        <Input 
          onChange={onNameChange} 
          id="minQuantity" 
          label="Min Quantity" 
          value={newFood.reorderPoint.toString()}
        />
        <Select id="type" label="Type" placeholderOption="" value={newFood.type} options={[
          {label:"Vegetable", value:"Vegetable"},
          {label:"Grain", value:"Grain"},
          {label:"Fruit", value:"Fruit"}
          ]}
        />
      </form>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>quantity</th>
            <th>reorderPoint</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          {/* Exercise 3: Add a delete button next to the name. WHen clicked, alert('clicked') */}
          {foods.map((food) => (
            <tr key={food.name}>
              <button onClick={async () => {
                await deleteFood(food.id);
                //returns a new array w/ the id that was just deleted ommitted 
                const newFoods = foods.filter((f) => f.id !== food.id);
                setFoods(newFoods);
                //need to remove the deleted food from the state
              }}
              >
                Delete
              </button>
              <td>{food.name}</td>
              <td>{food.quantity}</td>
              <td>{food.reorderPoint}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*<ul>{renderFoods()}</ul>*/}
    </>
  );
}
