import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../store/Slices/GetApiSlice/GetApiSlice";
import Item from "../Item/Item";

const ListItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const items = useSelector((state) => state.items.items);

  return (
    <div>
      <div className="mt-10 grid grid-cols-4 grid-rows-2 justify-items-center ">
        {items.map((item) => {
          console.log(item);
          return (
            <div>
              <Item key={item.id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListItems;
