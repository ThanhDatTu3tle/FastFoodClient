import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';

import styles from './WishList.module.scss';
import SideBar from '../SideBar';
import ProductWishList from '../../../components/ProductWishList/ProductWishList';

const cx = classNames.bind(styles)

function WishList() {

  const email = localStorage.getItem('email')

  const [products, setProducts] = useState([])

  axios.get(`http://localhost:3001/favorite`)
  .then(function (response) {
    const arrProducts = response.data
    const arrFavoriteProducts = []
    for (let i = 0; i < arrProducts.length; i++) {
      if (arrProducts[i].email.email === email) {
        arrFavoriteProducts.push(arrProducts[i])
      }
    }
    setProducts(arrFavoriteProducts)
  })
  .catch(function (error) {
    console.log(error);
  })

  const favoriteProductsArr_1 = products.slice(0, 3)
  const favoriteProductsArr_2 = products.slice(3, 6)

  return (
    <div className={cx('wrapper')}>
      <SideBar />
      <div className={cx('content')}>
        <div className={cx('title')}>
          WISH LIST
        </div>
        <div className={cx('line')}></div>
        
        <div className={cx('container')}>
          <div className={cx('products')}>
            {favoriteProductsArr_1.map((data) => (
              <ProductWishList key={data.maMonAn.maMonAn} data={data}/>
            ))}
          </div>

          <div className={cx('products')}>
            {favoriteProductsArr_2.map((data) => (
              <ProductWishList key={data.maMonAn} data={data}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList;
