import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Backdrop from '@mui/material/Backdrop';

import SideBar from '../SideBar';
import Title from '../../../components/Title/Title';
import ProductAdmin from '../../../components/ProductAdmin/ProductAdmin';
import Options from '../../../layouts/components/Header/Options';
import styles from './Products.module.scss';
import Button from '../../../components/Button';
import LoginForm from '../../../layouts/components/LoginForm/LoginForm';
import AddProduct from '../../../layouts/components/AddProduct/AddProduct';

const cx = classNames.bind(styles)

function Products() {

  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)

    const handleToggle = () => {

        if (open === false) {
            setOpen(!open);
            // localStorage.setItem('tenMonAn', data.tenMonAn.toString())
            // localStorage.setItem('giaTien', data.giaTien.toString())
        } 
    };

  useEffect(() => {
      fetch('http://localhost:3001/products')
          .then((response) => response.json())
          .then((data) => {
              setProducts(data)
          });
  }, [])

  const productsArr_1 = products.slice(0, 4)
  const productsArr_2 = products.slice(4, 8)
  const productsArr_3 = products.slice(8, 12)
  const productsArr_4 = products.slice(12, 16)
  const productsArr_5 = products.slice(16, 20)
  const productsArr_6 = products.slice(20, 24)
  const productsArr_7 = products.slice(24, 28)
  const productsArr_8 = products.slice(28, 32)
  const productsArr_9 = products.slice(32, 36)
  const productsArr_10 = products.slice(36, 40)
  const productsArr_11 = products.slice(40, 44)
  const productsArr_12 = products.slice(44, 48)
  const productsArr_13 = products.slice(48, 52)
  const productsArr_14 = products.slice(52, 56)
  const productsArr_15 = products.slice(56, 60)
  const productsArr_16 = products.slice(60, 64)

  return (
    <div className={cx('wrapper')}>
      <SideBar></SideBar>

      <div className={cx('content')}>

        <div className={cx('header')}>
          <Options></Options>
        </div>  

        <div className={cx('main-content')}>
          
          <div className={cx('container-products')}>
            <div className={cx('container-header')}>
              <Title content={'DANH SÁCH MÓN ĂN'}/>
              <Button small onClick={handleToggle}>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                >
                  <AddProduct data={products} onClick={() => {
                      setOpen(false)
                  }} />
                </Backdrop>
                Thêm món
              </Button>
            </div>
            
            <div className={cx('products')}>
              {productsArr_1.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_2.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_3.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_4.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_5.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_6.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_7.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_8.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_9.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_10.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_11.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_12.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_13.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_14.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_15.map((data) => (
                <ProductAdmin key={data.maMonAn} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {productsArr_16.map((data) => (
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
