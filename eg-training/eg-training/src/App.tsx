import { useEffect, useState } from "react";
import { getFoods, deleteFood } from "./api/foodsApi";

export type Food = {
  id: number;
  name: string;
  quantity: number;
  reorderPoint: number;
  type: string;
};

//Exercise 2:
//  -Add 2 properties: reorderPoint (number), type (String)
//  -Display all of this in a table


export function App() {
  //Use this useState to deconstruct an array
  const [foods, setFoods] =  useState<Food[]>([]);

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

  return (
    //Use this empty tag (opposed to using a div) to give these elements a parent element
    //Without the empty tag or div here, we get an error bc h1 and ul need a parent tag
    <>
      <h1>Pantry Manager</h1>
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
