import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";
import Search from "./Components/Search";
import { useState } from "react";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");

  return (
    <>
      <div>
        <Nav />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container className="flex">
          <InnerContainer>
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
          <InnerContainer>
            {foodId ? <FoodDetails foodId={foodId} /> : null}
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
