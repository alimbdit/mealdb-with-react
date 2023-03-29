import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SiteCart from "./components/SideCart/SiteCart";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState("");
  const [local, setLocal] = useState([]);
  // console.log(search);
  // const meals = [];
  const notify = () => toast("You add this item already!");
  const [mealName, setMealName] = useState([]);
  const addMeal = (name) => {
    const exist = mealName.find((meal) => meal === name);
    if (!exist) {
      setMealName([...mealName, name]);
      // meals.push(name);
    } else {
      notify()
      // toast.success("you add this")
    }

    console.log(name, mealName);
  };

  const removeAll = () => {
    setMealName([])
  }

  const handleLocalStorage = () => {
    const storedItem = localStorage.getItem('meal');
    if(!storedItem){
      localStorage.setItem('meal', mealName)
    }
  }

  return (
    <div className="App ">
      <div className="">
        <Header setSearch={setSearch}></Header>
      </div>
      <div className="card-cart-container ">
        <Card search={search} addMeal={addMeal}></Card>

        <div className="mt-5">
          <SiteCart mealName={mealName} removeAll={removeAll}></SiteCart>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
