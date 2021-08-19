import { Food } from "../Home";  
import { NewFood } from "../FoodForm"; 

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getFoods() {
    const response = await fetch("http://localhost:3001/foods");
    if(!response.ok) throw new Error("Call to getFoods has failed.");
    return response.json() as Promise<Food[]>;
}

export async function getFood(foodId: number) {
  const response = await fetch("http://localhost:3001/foods/" + foodId);
  if(!response.ok) throw new Error("Call to getFoods has failed.");
  return response.json() as Promise<Food>;
}

export async function deleteFood(id: number) {
    const response = await fetch("http://localhost:3001/foods/" + id, {
        method: "DELETE",
    });
    if(!response.ok) throw new Error("Delete failed.");
    return response.json();
}

export async function addFood(food: NewFood) {
  const response = await fetch("http://localhost:3001/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) throw new Error("Call to add foods failed");
  return response.json() as Promise<Food>;
}


export async function editFood(food: Food) {
  const response = await fetch("http://localhost:3001/foods/" + food.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!response.ok) throw new Error("Edit foods failed");
  return response.json() as Promise<Food>;
}