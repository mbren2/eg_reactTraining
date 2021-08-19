import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
export function Home() {
  //Use this useState to deconstruct an array
  const [foods, setFoods] =  useState<Food[]>([]);
  //The long-hand version of the line above
  //const foodStateArray = useState<Food[]>([]);
  //const foods = foodStateArray[0];
  //const setFoods = foodStateArray[1];

  useEffect(() => {
    async function callGetFoods() {
      const data = await getFoods();
      setFoods(data);
    }
    callGetFoods();
    //using an empty array for useEffect since we only want this to run once 
  }, []);

  //Day 3 Exercise 6: Display "uh oh, no food in pantry" when no food exists and hide the table
  return (
    //Use this empty tag (opposed to using a div) to give these elements a parent element
    //Without the empty tag or div here, we get an error bc h1 and ul need a parent tag
    <>
      <h1>Pantry Manager</h1>

      {/* Day 3 Exercise 1: Add a link to the food page here*/}
      <Link to="/food">Add Food</Link>

      {/* Day 2|Exercise 1: Create a reusable select and consume it below for food type.
          1. Vegetable
          2. Grain 
          3. Fruit      

              id:string;
    label:string;
    options:SelectOption[];
      */}

      {/* this is a way of saying, "if foods.length is great then zero, 
      show the table."" 
      Note: see that the } is after the table */}
      {foods.length > 0 ? (
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
              {/* Day 3 Exercise 3: Link to edit page on each name*/}
              <td>
                <Link to={`/food/${food.id}`}>
                  {food.name}
                </Link>
              </td>
               {/*  style quantity in bold red when it's lower than the reorderPoint */ }
              <td style= {food.reorderPoint > food.quantity ? {color: 'red'} :{}}>
                {food.quantity}
              </td>
              <td>{food.reorderPoint}</td>
              <td>{food.type}</td>
            </tr>
          ))}
        </tbody>
      </table> ) :(<p>Uh uh, there are no foods</p>)}
    </>
  );
}
