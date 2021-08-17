import { useEffect, useState } from "react";
import { getFoods } from "./api/foodsApi";

type Food = {
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
      const response = await getFoods();
      debugger;
      if(!response.ok) throw new Error("Call to getFoods has failed.");
      const json  = await response.json();
      //calling setFoods here will store it "in state" with the logic above
      setFoods(json);
    }
    callGetFoods();
  });

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
            <th>name</th>
            <th>quantity</th>
            <th>reorderPoint</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food.name}>
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
