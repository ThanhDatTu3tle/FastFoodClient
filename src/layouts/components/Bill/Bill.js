import classNames from 'classnames/bind';

import styles from './Bill.module.scss';
import Title from '../../../components/Title/Title';

const cx = classNames.bind(styles)

function Bill() {

  const total = localStorage.getItem('total')

  return (
    <div className={cx('wrapper')}>
      <div className={cx('total')}>
        <p>Tổng cộng</p>
        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p> 
      </div>

      <div className={cx('shipping-fee')}>
        <p>Phí giao hàng</p>
        <p>0đ</p> 
      </div>

      <p>---------------------------------------------</p>

      <div className={cx('price')}>
        <h5>Tạm tính</h5>
        <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p> 
      </div>

    </div>
  )
}

export default Bill;
