import React from "react";
import PropTypes from "prop-types";
import Item from "./Item"; // Import the Item component

function ItemList({ food }) {
  if (!food || !food.extendedIngredients) {
    // Exit early or display a loading message if food or extendedIngredients is not available
    return <div>Loading...</div>;
  }

  return (
    <div>
      {food.extendedIngredients.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </div>
  );
}

ItemList.propTypes = {
  food: PropTypes.shape({
    extendedIngredients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ItemList;
