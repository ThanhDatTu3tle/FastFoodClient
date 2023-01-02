import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Chicken.module.scss";
import Product from "../../../components/Product/Product";
import List from "../../../components/List/List";

const cx = classNames.bind(styles);

function Chicken() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}products/MDM01`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const productsArr_1 = products.slice(0, 3);
  const productsArr_2 = products.slice(3, 6);
  const productsArr_3 = products.slice(6, 9);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("list")}>
          <List />
        </div>
        <h1>Gà rán</h1>
        <div className={cx("products")}>
          {productsArr_1.map((data) => (
            <Product key={data.maMonAn} data={data} />
          ))}
        </div>
        <div className={cx("products")}>
          {productsArr_2.map((data) => (
            <Product key={data.maMonAn} data={data} />
          ))}
        </div>
        {/* <div className={cx('products')}>
          {productsArr_3.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
        </div> */}
      </div>
    </div>
  );
}

export default Chicken;
