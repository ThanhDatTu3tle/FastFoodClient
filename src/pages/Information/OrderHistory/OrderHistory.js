import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './OrderHistory.module.scss';
import SideBar from '../SideBar';
import OrderHis from '../../../components/OrderHistory/OrderHis';

const cx = classNames.bind(styles)

function OrderHistory() {

  const email = localStorage.getItem('email')
  const emailResult = email.replace('@', '%40')

  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/order/${emailResult}`)
        .then((response) => response.json())
        .then((data) => {
          setOrders(data)
        });
}, [])

  return (
    <>
      { window.location.href === 'http://localhost:3002/information/order-history'
        ?
          <>
            <div className={cx('wrapper')}>
              <SideBar />
              <div className={cx('content')}>
                <div className={cx('title')}>
                  ORDER HISTORY
                </div>
                <div className={cx('line')}></div>
                <div className={cx('titles')}>
                  <div className={cx('id-order')}>Mã đơn hàng</div>
                  <div className={cx('address')}>Địa chỉ giao hàng</div>
                  <div className={cx('time')}>Ngày giờ đặt hàng</div>
                  <div className={cx('price')}>Thành tiền</div>
                </div>
                {orders.map((data) => (
                  <OrderHis key={data.maChiTietDonHang} data={data}/>
                ))} 
              </div>
            </div>
          </>
        :
          <>
            <div className={cx('wrapper')}>
              <SideBar />
              <div className={cx('content')}>
                <div className={cx('title')}>
                  ORDER DETAIL
                </div>
                <div className={cx('line')}></div>
                  <p>{orders[0].maChiTietDonHang}</p>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default OrderHistory;
