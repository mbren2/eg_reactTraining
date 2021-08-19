import { useState } from "react";
import { toast } from "react-toastify";
import { addFood, editFood, getFood } from "./api/foodsApi";
import { Input } from "./shared/input";
import { Select } from "./shared/select";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

/* Day 3 Exercise 4: Hydrate the form for editFood
1. Get the matching food via fetch http://localhost:3001/food/{food.id}
  -Create the func that does the fetch
  -put the call in useEffect
2. Populate the form
*/

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

export function FoodForm() {
    const [food, setFood] = useState<NewFood>(emptyFood);
    const history = useHistory(); 

    //This is grabbing the food that's wanting to be edited by using the foodID in the URL 
    const { foodId } = useParams() as any;
    //Once we have that ID, using state, we can populate the 
    //form with the food that's wanting to be edited
    useEffect(() => {
      async function callGetFood() {
        const _food = await getFood(foodId);
        setFood(_food);
      }
      if(foodId) callGetFood();
    }, [foodId]);


    //Day 3 Exercise 2: Use foodId to set the heading to either add or edit food
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
          try {
            foodId ? await editFood({ ...food, id: foodId }) : await addFood(food);
            toast.success("Food saved! 🦄");
            history.push("/"); //Redirect to home
          } catch (error) {
            toast.error("Failed to add");
          }
      }

  function onChange(event: 
    React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
    const { value, id } = event.target;
    //How do we create a new object that contains one updated property?
    //You can create a const, then pass that into setNewFood()
    //const _newFood = {
    //  ...newFood,
    //  name: value,
    //}
    //setNewFood(_newFood);
    //Or, you can call the above within the setNewFood() call here, 
    setFood({
      ...food,
      [id]: value,
    });
  }

    return(

      <form onSubmit={handleSubmit}>
        <h1>{foodId ? "Edit Food":"Add Food"}</h1>
        <Input 
          onChange={onChange} 
          id="name" 
          label="Name" 
          value={food.name}
        />
        <Input 
          onChange={onChange} 
          id="quantity" 
          label="Quantity" 
          type="number"
          value={food.quantity.toString()}
        />
        <Input 
          onChange={onChange} 
          id="reorderPoint" 
          label="Min Quantity" 
          type="number"
          value={food.reorderPoint.toString()}
        />
        <Select 
          id="type" 
          label="Type" 
          onChange={onChange}
          placeholderOption="Select Type" 
          value={food.type} 
          options={[
            {label:"Vegetable", value:"Vegetable"},
            {label:"Grain", value:"Grain"},
            {label:"Fruit", value:"Fruit"}
            ]}
        />
        <input className="btn btn-primary" type="submit" value="Save Food" />
      </form>
    );
}