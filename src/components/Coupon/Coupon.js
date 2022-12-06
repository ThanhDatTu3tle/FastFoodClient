import classNames from "classnames/bind";

import styles from './Coupon.module.scss';
import Voucher from "../Voucher/Voucher";

const cx = classNames.bind(styles)

function Coupon() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left-container')}>
        <h3>Mã giảm giá</h3>
        <br />
        <h4>Mã coupon</h4>
      </div>

      <div className={cx('right-container')}>
        <Voucher></Voucher>
      </div>
    </div>
  )
}

export default Coupon;
