import React from "react";
import Header from "./Header";
import Products from "./Products";
import { productAction } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MainNavigation() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => {
    return state.productCategory.categoryId;
  });

  const clickHandler = (e) => {
    dispatch(productAction.selectProductId(e.target.value));
  };

  return (
    <>
      <Header onClick={clickHandler} />
      <Products categoryId={categoryId} />
    </>
  );
}
