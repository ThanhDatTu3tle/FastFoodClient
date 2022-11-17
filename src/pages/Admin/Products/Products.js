import classNames from 'classnames/bind';

import SideBar from '../SideBar';
import Title from '../../../components/Title/Title';
import ProductAdmin from '../../../components/ProductAdmin/ProductAdmin';
import Options from '../../../layouts/components/Header/Options';
import styles from './Products.module.scss';

const cx = classNames.bind(styles)

function Products() {
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
