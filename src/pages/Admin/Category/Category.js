import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Backdrop from '@mui/material/Backdrop';

import styles from './Category.module.scss';
import SideBar from '../SideBar';
import Title from '../../../components/Title/Title';
import Options from '../../../layouts/components/Header/Options';
import Button from '../../../components/Button';
import LoginForm from '../../../layouts/components/LoginForm/LoginForm';
import AddCategory from '../../../layouts/components/AddCategory/AddCategory';
import CategoryAdmin from '../../../components/CategoryAdmin/CategoryAdmin';

const cx = classNames.bind(styles)

function Category() {

  const [category, setCategory] = useState([])
  const [open, setOpen] = useState(false)

    const handleToggle = () => {

        if (open === false) {
            setOpen(!open);
            // localStorage.setItem('tenMonAn', data.tenMonAn.toString())
            // localStorage.setItem('giaTien', data.giaTien.toString())
        } 
    };

  useEffect(() => {
      fetch('http://localhost:3001/category')
          .then((response) => response.json())
          .then((data) => {
              setCategory(data)
          });
  }, [])

  const categoryArr_1 = category.slice(0, 4)
  const categoryArr_2 = category.slice(4, 8)

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
              <Title content={'DANH MỤC MÓN ĂN'}/>
              <Button small onClick={handleToggle}>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                >
                  <AddCategory data={category} onClick={() => {
                      setOpen(false)
                  }} />
                </Backdrop>
                Thêm danh mục
              </Button>
            </div>
            
            <div className={cx('products')}>
              {categoryArr_1.map((data) => (
                <CategoryAdmin key={data.maDanhMuc} data={data}/>
              ))} 
            </div>

            <div className={cx('products')}>
              {categoryArr_2.map((data) => (
                <CategoryAdmin key={data.maDanhMuc} data={data}/>
              ))} 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;
