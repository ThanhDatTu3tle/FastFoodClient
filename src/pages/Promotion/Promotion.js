import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';
import Product from '../../components/Product/Product';

const cx = classNames.bind(styles)

function Promotion() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
              console.log(data)
          });
  }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('products')}>
          {products.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
        </div>
        <div className={cx('products')}>
          {products.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Promotion;
