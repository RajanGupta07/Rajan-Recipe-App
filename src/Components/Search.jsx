import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "900bf5271d2042fabce12fba8091e1f8";

export default function Search({ foodDaat, setFoodData }) {
  const [query, setQuery] = useState("Pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className=" flex justify-center my-5 mx-auto relative ">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        // placeholder="Search for a recipe"
        className=" border-b-3 font-semibold text-red-700  border-gray-400 p-2 rounded-lg w-1/2"
      />
    </div>
  );
}
