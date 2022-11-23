import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Chicken.module.scss';
import Product from '../../../components/Product/Product';
import List from '../../../components/List/List';

const cx = classNames.bind(styles)

function Chicken() {

  const [products, setProducts] = useState([])
  // const [category, setCategory] = useState()

  useEffect(() => {
      fetch('http://localhost:3001/products/MDM01')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
              console.log(data)
          });
  }, [])

  const productsArr_1 = products.slice(0, 3)
  // console.log('1: ', productsArr_1)
  const productsArr_2 = products.slice(3, 6)
  // console.log('2: ', productsArr_2)
  const productsArr_3 = products.slice(6, 9)
  // console.log('3: ', productsArr_3)

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('list')}>
          <List />
        </div>
        <h1>Gà rán</h1>
        <div className={cx('products')}>
          {productsArr_1.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
        </div>
        {/* <div className={cx('products')}>
          {productsArr_2.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
        </div>
        <div className={cx('products')}>
          {productsArr_3.map((data) => (
            <Product key={data.maMonAn} data={data}/>
          ))} 
        </div> */}
      </div>
    </div>
  )
  
}

export default Chicken;
