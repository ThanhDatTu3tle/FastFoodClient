import classNames from "classnames/bind";

import styles from './AddressPayment.module.scss';

const cx = classNames.bind(styles)

function AddressPayment({ content }) {
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
        08:00 đến 21:00 hằng ngày
      </h5>
    </div>
  )
}

export default AddressPayment;
