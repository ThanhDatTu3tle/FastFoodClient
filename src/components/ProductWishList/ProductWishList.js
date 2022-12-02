import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import classNames from 'classnames/bind';

import styles from './ProductWishList.module.scss';
import Image from '../Image/Image';

const cx = classNames.bind(styles)

function ProductWishList({ data }) {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('product-image')} src={data.maMonAn.hinhAnhMonAn}></Image>
      <div className={cx('name-favorite-container')}>
        <div className={cx('product-name')}>{data.maMonAn.tenMonAn}</div>
        <FavoriteIcon sx={{ cursor: 'pointer' }} fontSize='large'></FavoriteIcon>
      </div>
      <div className={cx('product-price')}>{data.maMonAn.giaTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</div>
    </div>
  )
}

export default ProductWishList;
