import { useState } from "react";
import { toast } from "react-toastify";
import { addFood } from "./api/foodsApi";
import { Input } from "./shared/input";
import { Select } from "./shared/select";
import { useHistory } from "react-router-dom";

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
    const [newFood, setNewFood] = useState<NewFood>(emptyFood);
    const history = useHistory(); 
    
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
          await addFood(newFood);
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
    setNewFood({
      ...newFood,
      [id]: value,
    });
  }

    return(

        <form onSubmit={handleSubmit}>
        <Input 
          onChange={onChange} 
          id="name" 
          label="Name" 
          value={newFood.name}
        />
        <Input 
          onChange={onChange} 
          id="quantity" 
          label="Quantity" 
          type="number"
          value={newFood.quantity.toString()}
        />
        <Input 
          onChange={onChange} 
          id="reorderPoint" 
          label="Min Quantity" 
          type="number"
          value={newFood.reorderPoint.toString()}
        />
        <Select 
          id="type" 
          label="Type" 
          onChange={onChange}
          placeholderOption="Select Type" 
          value={newFood.type} 
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