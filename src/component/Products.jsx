import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import { url } from "./constant";

export default function Products({ categoryId }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        const response = await axios.get(url);
        const result = response.data.products;
        const newResult = result.filter(
          (val) => +categoryId === val.categoryId
        );
        setProducts(newResult);
      } catch (err) {
        setError(true);
      }
    };
    fetchProductsList();
  }, [categoryId]);

  return (
    <>
      <ul id="products">
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductsList key={product.id} product={product} />;
          })
        ) : (
          <div>loading.....</div>
        )}
      </ul>
      {error && <div>error in fetching data</div>}
    </>
  );
}
