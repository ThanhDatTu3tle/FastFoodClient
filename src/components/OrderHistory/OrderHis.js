import classNames from 'classnames/bind';

import styles from './OrderHis.module.scss';
import config from '../../config';

const cx = classNames.bind(styles)

function OrderHis({ data }) {

  const handleClick = () => {
    window.location.href = `http://localhost:3002${config.routes.orderdetail}`
  }

  return (
    <>
      { window.location.href === 'http://localhost:3002/information/order-history'
        ?
          <>
            <div className={cx('wrapper')} onClick={handleClick}>
              <div className={cx('id-order')}>#{data.maChiTietDonHang}</div>
              <div className={cx('address')}>{data.maDiaChi.diaChi}</div>
              <div className={cx('time')}>
                <p>{data.ngayDat}</p>
                <p>{data.gioDat}</p>
              </div>
              <div className={cx('price')}>{data.thanhTien}</div>
            </div>
          </>
        :
          <>
          </>
      }
    </>
  )
}

export default OrderHis;
