import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "./constant";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const [details, setDetails] = useState({});
  const [error, setError] = useState();
  const param = useParams();
  const categoryId = useSelector((state) => state.productCategory.categoryId);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(url);
        const res = response.data.productsDetails;
        const productDetail = res.filter((el) => {
          if (+param.id === el.id && +categoryId === el.categoryId) {
            return true;
          }
          return false;
        })[0];
        setDetails(productDetail);
      } catch (err) {
        setError(err);
      }
    };
    fetchDetails();
  }, [categoryId, param.id]);

  const backHandler = () => {
    navigate("/");
  };

  return (
    <ul id="details">
      <li className="product-item">
        <article>
          <img src={`/${details.imageUrl}`} alt="img" />
          <div>
            <h3>{details.name}</h3>
            <p className="product-item-description">{details.description}</p>
          </div>
          <div className="product-item-actions">
            <button onClick={backHandler} className="button">
              Back to home
            </button>
          </div>
          {error && <di>something went wrong .....</di>}
        </article>
      </li>
    </ul>
  );
}
