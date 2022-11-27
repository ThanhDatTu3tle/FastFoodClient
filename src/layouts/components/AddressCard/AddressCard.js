import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AddressCard.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

function AddressCard({ content }) {

  // console.log(address[0])
  // const addressArr = address.slice

  return (
    <div className={cx('wrapper')}>
      <h3>Giao hàng đến</h3>

      <div className={cx('info')}>
        <span>{content.diaChi}</span>
        <span>{content.tenDiaChi}</span>
      </div>

      <p>---------------------------------------------</p>

      <h5>
        Thời gian tiếp nhận đơn hàng từ
        08:00 đến 21:30 hằng ngày
      </h5>

      <Button primary>Chọn</Button>
    </div>
  )
}

export default AddressCard;
