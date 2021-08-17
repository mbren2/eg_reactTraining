type Food = {
    name: string;
    quantity: number;
}

const foods: Food[] = [
    {name:"carrot", quantity: 1},
    {name: "potato", quantity: 5}
];

export function App() {
    function renderFoods() {
        return foods.map((food) => <li>{food.name}</li>);
    }

    return (
        //Use this empty tag (opposed to using a div) to give these elements a parent element 
        //Without the empty tag or div here, we get an error bc h1 and ul need a parent tag
        <>
            <h1>Pantry Manager</h1>
            <ul>
                { renderFoods()}
            </ul>
        </>
    );
}