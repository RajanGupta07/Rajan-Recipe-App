import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "900bf5271d2042fabce12fba8091e1f8";

  // useEffect(() => {
  //   async function fetchFood() {
  //     const res = await fetch(`${URL}?apiKey=${API_KEY}`);
  //     const data = await res.json();
  //     console.log(data);
  //     setFood(data);
  //     setIsLoading(false);
  //   }
  //   fetchFood();
  // }, [foodId, URL]);

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Fetching food data failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div className="max-w-2xl my-5 mx-auto p-5 shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg bg-green-50">
        <h1 className="font-bold text-3xl mb-[20px] text-green-900 ">
          {food.title}
        </h1>
        <img
          className=" items-center max-w-full h-auto rounded-xl mb-8 "
          src={food.image}
          alt={food.title}
        />

        <div className="flex justify-between mb-5 items-center ">
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🌱Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div className="mb-5 text-green-800 flex-auto">
          <strong>
            {" "}
            ₹ <span>{Math.round(food.pricePerServing)} Per-serving</span>
          </strong>
        </div>
        <h2 className=" p-0 rounded-br-xl text-2xl text-yellow-600 font-semibold mb-2 justify-items-center ">
          Ingredients
        </h2>
        <ItemList food={food} />
        <h2 className="font-bold  p-0 rounded-br-xl text-2xl text-green-900">
          Instruction
        </h2>
        <div className=" p-0 rounded-br-xl text-lg text-gray-500 mb-5">
          <ol className="list-decimal list-item  ml-5">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number} className="my-[10px] mx-0">
                  {step.step}
                </li>
              ))
            )}
          </ol>
        </div>
        <div>
          <span>
            <strong className="font-bold  p-0 rounded-br-xl text-xl text-green-900">
              Cuisines:
            </strong>
            {food && food.cuisines && (
              <ul className="list-disc  list-inside text-gray-500 flex justify-around m-4 items-center">
                {food.cuisines.map((cuisine) => (
                  <li key={cuisine}>{cuisine}</li>
                ))}
              </ul>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
