import { useEffect, useState } from 'react';
import classNames from "classnames/bind";

import styles from './Checkout.module.scss';
import Product from "../../components/Product/Product";
import Title from '../../components/Title/Title';
import Bill from '../../layouts/components/Bill/Bill';
import AddressCard from '../../layouts/components/AddressCard/AddressCard';

const cx = classNames.bind(styles)

function Checkout() {

  const [address, setAddress] = useState([])
  const [products, setProducts] = useState([])

  const email = localStorage.getItem('email').replace('@', '%40')
  useEffect(() => {
      fetch(`http://localhost:3001/address/${email}`)
          .then((response) => response.json())
          .then((content) => {
              setAddress(content)
          });
  }, [])

  useEffect(() => {
      fetch('http://localhost:3001/products/MDM04')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
          });
  }, [])

  const addressArr = address.slice(0, address.length)

  const productsArr_1 = products.slice(0, 3)
  const productsArr_2 = products.slice(3, 6)

  return (
    <div className={cx('wrapper')}>

      <div className={cx('left-content')}>
        <Title content={'NGON HƠN KHI ĂN KÈM'}/>
        {productsArr_1 !== null
            ?
            <>
              <div className={cx('products')}>
                {productsArr_1.map((data) => (
                  <Product key={data.maMonAn} data={data}/>
                ))} 
              </div>
            </>
            :<></>
        }
        {productsArr_2 !== null
            ?
            <>
              <div className={cx('products')}>
                {productsArr_2.map((data) => (
                  <Product key={data.maMonAn} data={data}/>
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
