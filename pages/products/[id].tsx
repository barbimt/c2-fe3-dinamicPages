import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";

const Product = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();
  const { id, name } = router.query;

  useEffect(() => {
    if(!id) return

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
