import React from "react";

function item({ ingredient }) {
  return (
    <div className="flex p-2.5 mt-14 shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-xl justify-around bg-blue-50">
      <div
        key={ingredient.id}
        className="flex justify-between items-center p-2"
      >
        <div className="flex rounded-2xl">
          <img
            className="w-auto h-auto bg-blue-50 rounded-2xl"
            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center ml-16 ">
          <div className=" font-bold text-lg">{ingredient.name}</div>
          <div className="font-semibold text-start">
            {ingredient.amount} {ingredient.unit}
          </div>
        </div>
        <div className="flex flex-col items-center ml-18">
          <span className="font-bold text-lg">consistency</span>{" "}
          <div className="flex items-center">{ingredient.consistency}</div>
        </div>
      </div>
    </div>
  );
}

export default item;
