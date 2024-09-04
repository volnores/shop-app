import React from "react";
import star from "../../assets/star.png";

const Item = ({ title, price, image, rating, category }) => {
  return (
    <div className="bg-white">
      <div className="flex-col  px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <h4 className="grid text-center text-lg">{category}</h4>

        <div className="mt-6 ">
          <div>
            <div className="hover:opacity-75 lg:h-80 cursor-pointer">
              <img
                src={image}
                alt="category"
                className=" w-full h-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between ">
              <div>
                <h3 className="text-md text-gray-700">
                  {`${title.slice(0, 15)}...`}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{rating.rate}</p>
              </div>
              <div>
                <p className="text-md font-medium text-gray-900">${price}</p>
                <img src={star} alt="star" className="h-4 mt-1.5" />
              </div>
            </div>
            <div className="rounded-lg text-center border-solid border-2 py-2 mt-1.5 bg-gray-100 hover:bg-gray-200">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
