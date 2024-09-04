import React, { useEffect } from "react";
import lemon from "../../assets/lemon.svg";
import cart from "../../assets/bag.svg";
import { Link } from "react-router-dom";
import ListItems from "../ListItems/ListItems";

const nav = ["Home", "Popular", "Fashion", "Settings"];

const Home = () => {
  return (
    <div>
      <header className=" flex items-center justify-between bg-gray-800/30 px-6 py-6">
        <div>
          <Link to={"/"}>
            <img
              src={lemon}
              alt="logo"
              className="cursor-pointer block h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            />
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-14">
          {nav?.map((item) => {
            return (
              <li
                key={item}
                className="cursor-pointer text-lg rounded-lg hover:bg-gray-300/40 py-1 px-1 border-solid focus-visible:outline-2 focus-visible:outline-offset-2  transition ease-in-out delay-50 text-white"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className="cursor-pointer">
          <Link to={"/cart"}>
            <img
              src={cart}
              alt="cart"
              className="cursor-pointer block h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            />
          </Link>
        </div>
      </header>
      <ListItems />
    </div>
  );
};

export default Home;
