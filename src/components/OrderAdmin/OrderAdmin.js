import classNames from 'classnames/bind';

import styles from './OrderAdmin.module.scss';

const cx = classNames.bind(styles)

function OrderAdmin({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div className={cx('code-order')}>{data.maChiTietDonHang}</div>
        <div className={cx('active')}>Done!!!</div>
        <div className={cx('price')}>{data.thanhTien}</div>
        <div className={cx('product')}>Gãy!!!</div>
        <div className={cx('create')}>{data.ngayDat} {data.gioDat}</div>
      </div>
      <div className={cx('line')}></div>
    </div>
  )
}

export default OrderAdmin;
