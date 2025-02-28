// import React from "react";
// import PropTypes from "prop-types";
// import { useState } from "react";

// function FoodItem({ food, setFoodId }) {
//   return (
//     <div className="bg-gray-200 p-1 m-5 rounded-3xl shadow-emerald-900 shadow-xl overflow-hidden max-w-xs">
//       <img
//         src={food.image}
//         alt={food.title}
//         className="max-w-full rounded-2xl h-auto"
//       />
//       <div className="font-sans text-center p-2">
//         <p className="font-bold text-xl text-green-950">{food.title}</p>
//       </div>
//       <div className="flex justify-around text-center mb-3">
//         <button
//           className="bg-green-900 hover:bg-green-700 cursor-pointer text-white font-bold py-1 my-1.5 px-4 rounded"
//           onClick={() => {
//             console.log(food.id);
//             setFoodId(food.id);
//           }}
//         >
//           View Recipe
//         </button>
//       </div>
// {/*
//       {/* <div className="flex justify-around text-center mb-3">
//         <span>
//           <strong>Cuisines:</strong>
//           <ul>
//             {/* Check if food and food.cuisines exist before calling map */}
//             {food && food.cuisines && food.cuisines.length > 0 ? (
//               <ul>
//               {food.cuisines.map((cuisine) => (
//                 <li key={cuisine}>{cuisine}</li>
//               ))}
//             </ul>
//             ) : (
//               <li>No cuisines available</li> // Display message if food or food.cuisines not found
//             )}
//           </ul>
//         </span>
//       </div> */} */}

//     </div>
//   );
// }
// FoodItem.propTypes = {
//   food: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     cuisines: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
//   setFoodId: PropTypes.func.isRequired,
// };

// export default FoodItem;

import React from "react";
import PropTypes from "prop-types";

function FoodItem({ food, setFoodId }) {
  // Destructure food object for cleaner access
  const { id, image, title } = food;

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-200 p-1 m-5 rounded-3xl shadow-gray-600 shadow-lg overflow-hidden max-w-xs">
        <img
          src={image}
          alt={title}
          className="max-w-full rounded-2xl h-auto"
        />
        <div className="font-sans text-center p-2">
          <p className="font-bold text-xl text-green-950">{title}</p>
        </div>
        <div className="flex justify-around text-center mb-3">
          <button
            className="bg-green-900 hover:bg-green-700 cursor-pointer text-white font-bold py-1 my-1.5 px-4 rounded"
            onClick={() => {
              console.log(id);
              setFoodId(id);
            }}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

FoodItem.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cuisines: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setFoodId: PropTypes.func.isRequired,
};

export default FoodItem;
