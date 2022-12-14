import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Promotion.module.scss";
import Product from "../../components/Product/Product";

const cx = classNames.bind(styles);

function Promotion() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  const productsArr_1 = products.slice(0, 3);
  // console.log('1: ', productsArr_1)
  const productsArr_2 = products.slice(3, 6);
  // console.log('2: ', productsArr_2)
  const productsArr_3 = products.slice(6, 9);
  // console.log('3: ', productsArr_3)

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
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
        <div className={cx("products")}>
          {productsArr_3.map((data) => (
            <Product key={data.maMonAn} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotion;
