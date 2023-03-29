import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Header = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue)
  const handleClick = () => {
    setSearch(inputValue);
    setInputValue("");
  };
  return (
    <div className="">
      <div className="flex justify-between h-20 bg-info px-5 items-center ">
        <h1 className="text-3xl font-bold">Meal DB</h1>
        <div className="flex gap-5">
          <input
            value={inputValue}
            onChange={getInputValue}
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
          <button onClick={handleClick} className="btn btn-secondary">
          <FontAwesomeIcon className="text-xl text-error" icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
