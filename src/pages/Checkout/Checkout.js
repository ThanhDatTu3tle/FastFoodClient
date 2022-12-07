import { useEffect, useState } from 'react';
import classNames from "classnames/bind";

import styles from './Checkout.module.scss';
import Product from "../../components/Product/Product";
import ProductCard from '../../layouts/components/Cart/ProductCard';
import Title from '../../components/Title/Title';
import Bill from '../../layouts/components/Bill/Bill';
import AddressCard from '../../layouts/components/AddressCard/AddressCard';

const cx = classNames.bind(styles)

function Checkout() {

  const [address, setAddress] = useState([])
  const [productsCategory, setProductsCategory] = useState([])
  const [products, setProducts] = useState([])

  const email = localStorage.getItem('email').replace('@', '%40')
  useEffect(() => {
      fetch(`http://localhost:3001/address/${email}`)
          .then((response) => response.json())
          .then((content) => {
              setAddress(content)
          });
  }, [email])

  useEffect(() => {
      fetch('http://localhost:3001/products/MDM04')
          .then((response) => response.json())
          .then((dataCategory) => {
              setProductsCategory(dataCategory)
          });
  }, [])

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
          });
  }, [])

  const addressArr = address.slice(0, address.length)

  const productsArr_1 = productsCategory.slice(0, 3)
  const productsArr_2 = productsCategory.slice(3, 6)

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

  const prices = productsInCart.map(item => {
    if (item !== null) {
      return item.giaTien*item.count
    }
  })
  
  const total = prices.reduce((x, y) => {
    return x + y
  }, 0)

  localStorage.setItem('total', total)

  return (
    <div className={cx('wrapper')}>

      <div className={cx('left-content')}>
        <Title content={'GIỎ HÀNG CỦA BẠN'}/>
        <div className={cx('products-in-cart')}>
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
        </div>
        
        <br />
        <Title content={'NGON HƠN KHI ĂN KÈM'}/>
        {productsArr_1 !== null
            ?
            <>
              <div className={cx('products')}>
                {productsArr_1.map((dataCategory) => (
                  <Product key={dataCategory.maMonAn} data={dataCategory}/>
                ))} 
              </div>
            </>
            :<></>
        }
        {productsArr_2 !== null
            ?
            <>
              <div className={cx('products')}>
                {productsArr_2.map((dataCategory) => (
                  <Product key={dataCategory.maMonAn} data={dataCategory}/>
                ))} 
              </div>
            </>
            :<></>
        }
      </div>

      <div className={cx('right-content')}>
        <Title content={"Hóa đơn"}/>
        <Bill />
        <br />
        <Title content={'Danh sách địa chỉ'}/>
        {addressArr.map((content) => (
          <AddressCard key={content.maDiaChi} content={content}/>
        ))}
      </div>
      
    </div>
  )
}

export default Checkout;
