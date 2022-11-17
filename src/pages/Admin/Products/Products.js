import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import SideBar from '../SideBar';
import Title from '../../../components/Title/Title';
import ProductAdmin from '../../../components/ProductAdmin/ProductAdmin';
import Options from '../../../layouts/components/Header/Options';
import styles from './Products.module.scss';

const cx = classNames.bind(styles)

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
          });
  }, [])

  const productsArr_1 = products.slice(0, 4)
  // console.log('1: ', productsArr_1)
  const productsArr_2 = products.slice(4, 8)
  // console.log('2: ', productsArr_2)
  const productsArr_3 = products.slice(8, 12)
  // console.log('3: ', productsArr_3)

  return (
    <div className={cx('wrapper')}>
      <SideBar></SideBar>

      <div className={cx('content')}>

        <div className={cx('header')}>
          <Options></Options>
        </div>  

        <div className={cx('main-content')}>
          
          <div className={cx('container-products')}>
            <Title content={'DANH SÁCH MÓN ĂN'}/>

            <div className={cx('products')}>
              {productsArr_1.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>
          </div>

          <div className={cx('filter-products')}>
            Use tags to filter your search
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
