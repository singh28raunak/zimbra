import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { dropdownAction } from "../store/productSlice";

function Header({ onClick }) {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productCategory.items);
  const categoryId = useSelector((state) => state.productCategory.categoryId);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(url);
        const result = response.data.categories;
        dispatch(dropdownAction.dropdownItem(result));
      } catch (err) {
        setError(true);
      }
    };
    fetchList();
  }, [dispatch]);

  return (
    <header id="main-header">
      <div id="title">
        <img src="images/logo.jpg" alt="meals" />
        <h1>React Ecommerce</h1>
      </div>
      <div>
        <select onChange={(e) => onClick(e)} value={categoryId}>
          {productList.map((list) => {
            return (
              <option value={list.id} key={list.id}>
                {list.name}
              </option>
            );
          })}
        </select>
        {error && <div>unable to fetch category list </div>}
      </div>
    </header>
  );
}

export default Header;
