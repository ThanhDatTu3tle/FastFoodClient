import { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

import ProductCard from "./ProductCard";
import styles from './Cart.module.scss';
import Title from '../../../components/Title/Title';
import Button from "../../../components/Button/Button";
import config from '../../../config';

const cx = classNames.bind(styles)

function Cart({ onClick }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
          });
  }, [])

  const ids = products.map(product => { // lấy ra mảng các id từ products => dùng tính counts
    return product.maMonAn;
  })
  const counts = ids.map(id => { // lấy ra mảng các thông tin products đc add to cart
    if (id !== null) {
      return JSON.parse(localStorage.getItem(`gioHang${id}`))
    }
  })
  const productsInCart = []
  counts.map(count => {
    if (count !== null) {
      productsInCart.push(count)
    }
  })
  localStorage.setItem('numberOfProductsInCart', productsInCart.length)
  const prices = productsInCart.map(item => {
    if (item !== null) {
      return item.giaTien*item.count
    }
  })
  
  const total = prices.reduce((x, y) => {
    return x + y
  }, 0)

  const MySwal = withReactContent(Swal);

  const handleCheckOut = async () => {
    await MySwal.fire({
      title: "Vui lòng đợi trong giây lát!",
      didOpen: () => {
          MySwal.showLoading();
      },
      timer: 2000,
    });
    localStorage.setItem('total', total)
    localStorage.setItem('maChiTietDonHang', '')
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Title content={'Giỏ hàng của bạn:'}/>
        <Button small onClick={onClick}>Thoát</Button>
      </div>
      <div className={cx('line')}></div>
      {productsInCart 
        ? 
        <>
          {
            productsInCart.map((data) => (
              <ProductCard key={data.maMonAn} data={data}/>
            ))
          }
        </>
        :
        <>
          <p>Bạn chưa thêm món nào vào giỏ cả!!</p>
        </>
      } 
      <div className={cx('line')}></div>
      <div className={cx('total')}>
        <p>Tổng cộng:</p>
        {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
      </div>
      <Button className={cx('btn-checkout')} to={config.routes.checkout} onClick={handleCheckOut}>Check out</Button>
    </div>
  )
}

export default Cart;
